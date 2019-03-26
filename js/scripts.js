var sentence = prompt("I am a sentence.");
// var sentenceLength = sentence.Length()
var result = "";
var firstLast = function(firstLetter, lastLetter) {
  var firstLetter = sentence.slice(0,1).toUpperCase();
  var lastLetter = sentence.slice(-1).toUpperCase();
  var result = lastLetter + firstLetter;
  return result;
  };
 var sentenceWithLetters = function(sentence, result){
  var addToSentence = sentence + result;
  return(addToSentence);
  };
var middleStuff = function(addToSentence){
  var midletters = parseInt(sentence.length)/2;
  var midLetter = sentence.slice(midletters, (midletters+ 1));
  var finalOutput = midLetter + addToSentence;
    alert(finalOutput.split("").reverse().join(""));
};

// var midLetterToFront = function(midLetter) {
//   firstLast();
//   // var sentence = prompt("enter sentence");
//   var midletters = parseInt(sentence.length)/2;
//   var midLetter = sentence.slice(midletters, (midletters+ 1));
//   var finalOutput = midLetter + addToSentence;
//   alert(finalOutput);
// };
var result = firstLast();
var addToSentence = sentenceWithLetters(sentence, result);
var middleStuff = middleStuff(addToSentence);
middleStuff();
