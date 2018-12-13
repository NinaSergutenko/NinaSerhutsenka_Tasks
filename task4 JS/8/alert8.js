"use strict";

var mainWord = prompt('Enter a word, please' , '').toUpperCase();
var arr = mainWord.split('');
var arr2 = mainWord.split('').reverse();
var isPolindrom = true;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != arr2 [i]) {
    isPolindrom = false;
    break;
  } 
}
if (isPolindrom) {
  alert('YES! it is a polindrom');
} else {
    alert ('your word is NOT a polindrom');
}


