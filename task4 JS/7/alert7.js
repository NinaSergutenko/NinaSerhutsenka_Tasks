"use strict";


var ourArr = prompt ('Enter numbers or words using commas between', '1, word, word, word, word1');

var ourSrting = ourArr.split(',');

var uniq = [];
for (var i = 0; i < ourSrting.length; i++) {
  if(uniq.indexOf(ourSrting[i]) == -1)
    uniq.push(ourSrting[i]);
}
alert(uniq);





