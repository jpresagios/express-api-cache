var translateToMS = {
  ms: 1,
  second: 1000,
  minute: 60000,
  hour: 3600000,
  day: 3600000 * 24,
  week: 3600000 * 24 * 7,
  month: 3600000 * 24 * 30,
};

function timeConversion(strDuration) {
  var components = strDuration.match(/^([\d\.,]+)\s?(\w+)$/);

  var time = parseFloat(components[1]);
  var unit = components[2].replace(/s$/i, "").toLowerCase();

  return time * translateToMS[unit];
}

module.exports = timeConversion;
