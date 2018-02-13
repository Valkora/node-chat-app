const moment = require('moment');

var createdAt=136;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);





//date.add(1000, 'year').subtract(9, 'months');
//new Date().getTime();
// var date = new Date();
//
// console.log(date.getMonth());
