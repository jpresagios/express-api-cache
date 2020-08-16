# express-api-cache

Caching is a commonly used technique to improve the performance of any application, be it desktop, mobile or web.
express-api-cache enable server-side cache for Express API to has more faster response from your API.

#### Cache a route Ready to use sample

```js
var express = require("express");
var app = express();
var cacheService = require("express-api-cache");
var cache = cacheService.cache;

app.get("/movies", cache("10 minutes"), (req, res) => {
  // Do some work to retrieve movies and request before 10 minutes will get movies from cache
  res.json([
    {
      title: "The Lord of the Rings",
      director: "Peter Jackson",
    },
    { title: "Memento", director: "Christopher Nolan" },
  ]);
});

app.listen(3000, function () {
  console.log(`Example app listening on 3000!`);
});
```

## API

- `valid units` - ms, second, minute, hour, day, week, month.
- `duration format` - [time][unit] as `5 minutes`
