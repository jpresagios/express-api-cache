//Engines cache
const MemoryCacheEngine = require('./memory-cache-engine');
const CacheObjet = require('./cache-object');
const timeConversion = require('./duration-service');

function CacheService() {
  const cacheEngine = new MemoryCacheEngine();
  const cacheObjet = new CacheObjet();

  this.cache = function (strDuration) {
    return (req, res, next) => {
      const duration = timeConversion(strDuration);

      let key =
        '__cache__' + (req.originalUrl || req.url) + JSON.stringify(req.body);
      let cachedObject = cacheEngine.getFromCache(key);
      if (cachedObject) {
        res.writeHead(cachedObject.status || 200, cachedObject.headers);
        return res.end(cachedObject.content);
      } else {
        res.sendResponse = res.send;
        res.send = (body) => {
          const cacheObject = cacheObjet.createCache(res, body);
          cacheEngine.storeInCache(key, cacheObject, duration);
          res.sendResponse(body);
        };
        next();
      }
    };
  };
}

module.exports = new CacheService();
