"use strict";

var longNumberEnter = prompt ('Enter any big number','123');
var resultSum = 0;
var arr = longNumberEnter.split('');
for (var i = 0; i < arr.length; i++) {
    resultSum = resultSum + arr[i]*1;
}
alert (resultSum)






