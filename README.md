# express-api-cache

Caching is a commonly used technique to improve the performance of any application, be it desktop, mobile or web.
express-api-cache enable server-side cache for Express API to has more faster response from your API.

#### Cache a route Ready to use sample

```js
var express = require("express");
var app = express();
var cacheService = require("../src/cache");
var cache = cacheService.cache;

app.get("/movies", cache("10 minutes"), (req, res) => {
  // Do some work to retrieve movies and request before 10 minutes will get movies from cache
  res.json([
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  ]);
});

app.listen(3000, function () {
  console.log(`Example app listening on 3000!`);
});
```

## API

- `valid units` - ms, second, minute, hour, day, week, month.
- `duration format` - [time][unit] as `5 minutes, 1 day`
