var sentence = prompt("I am a sentence.");
var firstLast = function(firstLetter, lastLetter) {
  var firstLetter = sentence.slice(0,1).toUpperCase();
  var lastLetter = sentence.slice(-1).toUpperCase();
  var result = firstLetter + lastLetter
    alert(result);
  var result = lastLetter + firstLetter;
    alert(result);
};
firstLast();
// var result = firstLast(firstLetter, lastLetter);
// alert(result);

// var lastFirst = function(lastLetter, firstLetter) {
//   return lastLetter + firstLetter;
// };
// var result = lastFirst(lastLetter, firstLetter);
// alert(result);


//var firstLetter = sentence.slice(0,1).toUpperCase();
//var lastLetter = sentence.slice(-1).toUpperCase();
