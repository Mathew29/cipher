var sentence = prompt("I am a sentence.");
// var sentenceLength = sentence.Length()
var firstLast = function(firstLetter, lastLetter) {
  var firstLetter = sentence.slice(0,1).toUpperCase();
  var lastLetter = sentence.slice(-1).toUpperCase();
  var result = firstLetter + lastLetter
    alert(result);
  var result = lastLetter + firstLetter;
    alert(result);
  var addToSentence = sentence + result;
    alert(addToSentence);
  var midletters = parseInt(sentence.length)/2;
  var midLetter = sentence.slice(midletters, (midletters+ 1));
  var finalOutput = midLetter + addToSentence;
    alert(finalOutput);
};

// var midLetterToFront = function(midLetter) {
//   firstLast();
//   // var sentence = prompt("enter sentence");
//   var midletters = parseInt(sentence.length)/2;
//   var midLetter = sentence.slice(midletters, (midletters+ 1));
//   var finalOutput = midLetter + addToSentence;
//   alert(finalOutput);
// };
firstLast();
