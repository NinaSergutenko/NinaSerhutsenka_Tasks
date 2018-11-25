"use strict";
 
var enteredNumber = prompt ('Could you enter a number', '55');
var count = 0;
var simpleArray = simpleNumberCounter (1e10);
  for (var i = 1; i < enteredNumber; i++) {
    console.log ('' +simpleArray[i]);
  };
  
function simpleNumberCounter(number) {
  var a = [];
  for (var i = 1; i < number; i++) {
    if (isSimple(i))
      a.push (i);
  }
  return a;
};

function isSimple(i) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0)
      return false;
  }
  return true;
};
