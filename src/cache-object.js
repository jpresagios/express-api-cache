function CacheObjet() {}

/**
 * Create object that cache response from the API
 */
CacheObjet.prototype.createCache = function (response, body) {
  return {
    headers: this.getHeaders(response),
    content: body,
    status: this.getStatus(response),
  };
};

/*
 * Get headers from the response
 */
CacheObjet.prototype.getHeaders = function (response) {
  return response.getHeaders ? response.getHeaders() : response._headers;
};

/*
 * Get status code from response
 */
CacheObjet.prototype.getStatus = function (response) {
  return response.statusCode;
};

module.exports = CacheObjet;
