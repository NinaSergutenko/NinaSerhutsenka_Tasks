"use strict";

var arr = prompt ('Enter numbers using commas between', '1, 2, 3, 4, 5');
var sum = 0;
var ourArr = arr.split(',');
var result = 0;
ourArr.sort(function(a,b) {
  return b-a;
});

alert (ourArr[0]);




