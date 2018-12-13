"use strict";

//find all simple numbers from 1 to n
 
var enteredNumber = prompt ('Could you enter a number', 'please, not more than 1M');
for (var i = 2; i <= 1000000; i++) {
  if(i > enteredNumber)
    break;
  var found = true;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      found = false;
      break;
    }
  }
  if(found)
    console.log(''+i);
}

