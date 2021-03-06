const faker = require("faker");
var HostInfo = require("./hostInfo.js");

// List of responseTime
var resTime = [
  "within an hour",
  "within two hours",
  "within three hours",
  "within less than five hours"
];
var locName = [
  "San Francisco, CA",
  "New York City,NY",
  "Washington D.C",
  "Chicago, Illinois",
  "Las Vegas, Nevada",
  "San Diego",
  "Honolulu, Hawaii"
];
var joinBy = [
  "January 2019",
  "February 2019",
  "March 2019",
  "January 2018",
  "February 2018",
  "March 2018",
  "April 2018",
  "May 2018",
  "June 2018",
  "July 2018",
  "August 2018",
  "September 2018",
  "October 2018",
  "November 2018",
  "December 2018"
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}





module.exports = resTime;
module.exports = locName;
module.exports = joinBy;
module.exports = getRandomInt;
