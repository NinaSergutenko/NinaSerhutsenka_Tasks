"use strict";

// find a sum of first even numbers in Fibonnacci numbers

var n = prompt ('Enter a number', '');
var fibonacciCount = 0;
var fibonacciSum = 0;
var fbA = fibonacciArray(100000);
for (var i=0; i<fbA.length; i++) {
    if (fbA[i] % 2 == 0) {
      fibonacciSum = fibonacciSum + fbA[i];
      fibonacciCount++;
    }
    if (fibonacciCount == n)
      break;
}
alert (fibonacciSum);


function fibonacciArray(n) {
  var a = [];
  a.push(1);
  a.push(1);
  for (var i = 2; i <= n; i++) {
    a.push( a[i-1] + a[i-2] );
  }
  return a;
}


