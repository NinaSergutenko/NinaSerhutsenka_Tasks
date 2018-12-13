"use strict";


var enteredNumber = prompt('Enter a value' , '10');

var result = 0;
for (var i = 1; i <= +enteredNumber; i++) {
  result = result + Math.pow(i,i);
}
var resultString = ''+result;
if(resultString.length > 10)
  resultString = resultString.substr(-10);
alert ('10 last numbers = '+resultString);





