//Engines cache
var MemoryCacheEngine = require("./memory-cache-engine");
var timeConversion = require("./duration-service");

function CacheService() {
  var cacheEngine = new MemoryCacheEngine();

  this.cache = function (strDuration) {
    return (req, res, next) => {
      const duration = timeConversion(strDuration);

      let key =
        "__cache__" + (req.originalUrl || req.url) + JSON.stringify(req.body);
      let cachedBody = cacheEngine.getFromCache(key);
      if (cachedBody) {
        res.send(cachedBody);
        return;
      } else {
        res.sendResponse = res.send;
        res.send = (body) => {
          cacheEngine.storeInCache(key, body, duration);
          res.sendResponse(body);
        };
        next();
      }
    };
  };
}

module.exports = new CacheService();
