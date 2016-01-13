'use strict';

// Parses a string and returns a json object
exports.parse = function(req, res) {
  var natural, unix;
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  // try to convert the input to milliseconds
  var msUnix = Number(req.params.date) * 1000;

  if (isNaN(msUnix)) {
    msUnix = Date.parse(req.params.date);
    msUnix = isNaN(msUnix) ? null : msUnix;
  }

  var parsedDate = new Date(msUnix);
  natural = msUnix === null ? null : parsedDate.toLocaleString('en-US', options);
  unix = msUnix === null ? null : msUnix / 1000;

  return res.json({unix, natural});
};
