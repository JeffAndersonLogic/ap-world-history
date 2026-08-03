/**
 * BeHistorical Teacher Hub, connection layer
 *
 * Holds the Apps Script Web App URL and access token, and performs every request to it.
 * Both the sign-in page and the dashboard use this, so there is one place that knows how
 * to talk to the Sheet.
 *
 * The token is the real credential. The Teacher Hub is a static site with no server, so
 * there is nothing here worth protecting on its own. Everything sensitive lives behind the
 * Apps Script endpoint, and that endpoint refuses any request without a valid token.
 */
(function () {
  const ENDPOINT_KEY = 'behistoricalTeacherHubEndpoint';
  const TOKEN_KEY = 'behistoricalTeacherHubToken';
  const SESSION_KEY = 'behistoricalTeacherHubConnected';

  function readStored(key) {
    try {
      return localStorage.getItem(key) || '';
    } catch (error) {
      return '';
    }
  }

  function writeStored(key, value) {
    try {
      if (value) localStorage.setItem(key, value);
      else localStorage.removeItem(key);
    } catch (error) {
      /* Private browsing or blocked storage. The session still works, it just will not persist. */
    }
  }

  function getEndpoint() { return readStored(ENDPOINT_KEY); }
  function getToken() { return readStored(TOKEN_KEY); }

  function save(endpoint, token) {
    writeStored(ENDPOINT_KEY, String(endpoint || '').trim());
    writeStored(TOKEN_KEY, String(token || '').trim());
  }

  function clear() {
    writeStored(ENDPOINT_KEY, '');
    writeStored(TOKEN_KEY, '');
    try { sessionStorage.removeItem(SESSION_KEY); } catch (error) { /* ignore */ }
  }

  function isConfigured() { return Boolean(getEndpoint() && getToken()); }

  function markConnected() {
    try { sessionStorage.setItem(SESSION_KEY, 'yes'); } catch (error) { /* ignore */ }
  }

  function isConnected() {
    try { return sessionStorage.getItem(SESSION_KEY) === 'yes'; } catch (error) { return false; }
  }

  /**
   * Rejects a /dev deployment URL up front. It only resolves for the signed-in script owner
   * and will never work from a browser fetch, which otherwise surfaces as an opaque
   * network failure.
   */
  function validateEndpointShape(endpoint) {
    const value = String(endpoint || '').trim();
    if (!value) return 'Paste the Apps Script Web App URL.';
    if (!/^https:\/\/script\.google\.com\//.test(value)) {
      return 'That does not look like an Apps Script URL. It should start with https://script.google.com/';
    }
    if (/\/dev(\?|$)/.test(value)) {
      return 'That is the /dev test URL, which only works for you while signed in. Use the /exec URL from Deploy > Manage deployments.';
    }
    if (!/\/exec(\?|$)/.test(value)) {
      return 'The Web App URL should end in /exec.';
    }
    return '';
  }

  function buildUrl(params) {
    const url = new URL(getEndpoint());
    url.searchParams.set('token', getToken());
    Object.keys(params || {}).forEach(function (key) {
      const value = params[key];
      if (value !== undefined && value !== null && value !== '') url.searchParams.set(key, value);
    });
    return url.toString();
  }

  /**
   * Apps Script answers a cross-origin GET by redirecting to googleusercontent.com, which
   * is what makes this readable from the browser at all. A rejected fetch is almost always
   * a permissions problem rather than a code problem, so say so plainly.
   */
  async function request(params) {
    if (!isConfigured()) throw new Error('No endpoint and token saved yet.');
    let response;
    try {
      response = await fetch(buildUrl(params), { method: 'GET', redirect: 'follow' });
    } catch (error) {
      throw new Error(
        'Could not reach the Apps Script endpoint. Check that the deployment\'s "Who has access" ' +
        'is set to Anyone. Any other setting blocks this request.'
      );
    }
    if (!response.ok) throw new Error('The endpoint returned HTTP ' + response.status + '.');

    const text = await response.text();
    let payload;
    try {
      payload = JSON.parse(text);
    } catch (error) {
      throw new Error(
        'The endpoint did not return JSON. This usually means the deployment is not set to ' +
        '"Anyone" and Google returned a sign-in page instead.'
      );
    }
    if (payload && payload.ok === false) throw new Error(payload.error || 'The endpoint reported an error.');
    return payload;
  }

  function fetchIndex() { return request({ mode: 'index' }); }

  function fetchAnalysis(filters, writeNamedFlags) {
    return request({
      unit: filters.unit,
      topic: filters.topic,
      responseType: filters.responseType,
      classPeriod: filters.classPeriod,
      write: writeNamedFlags ? 'true' : ''
    });
  }

  window.TeacherHubConnection = {
    getEndpoint: getEndpoint,
    getToken: getToken,
    save: save,
    clear: clear,
    isConfigured: isConfigured,
    isConnected: isConnected,
    markConnected: markConnected,
    validateEndpointShape: validateEndpointShape,
    request: request,
    fetchIndex: fetchIndex,
    fetchAnalysis: fetchAnalysis
  };
})();
