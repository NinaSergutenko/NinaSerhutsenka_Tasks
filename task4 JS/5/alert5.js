"use strict";

//average of a set of numbers from an array

var arr = prompt ('Enter numbers using commas between', '1, 2, 3, 4, 5');
var sum = 0;
var ourArr = arr.split(',');
for (var i=0; i < ourArr.length; i++) {
  sum = sum + ourArr[i]*1;
}
var result = sum/ourArr.length;
alert(result);


