const mcache = require("memory-cache");

function MemoryCacheEngine() {}

/**
 * Used to retrieve data from memcache
 * @param {*} key
 */
MemoryCacheEngine.prototype.getFromCache = (key) => {
  const cachedBody = mcache.get(key);
  if (cachedBody) {
    return cachedBody;
  }
  return false;
};

/**
 * Used to store data in a memcache
 * @param {*} key
 * @param {*} data
 * @param {*} duration
 */
MemoryCacheEngine.prototype.storeInCache = (key, data, duration) => {
  mcache.put(key, data, duration);
};

module.exports = MemoryCacheEngine;
