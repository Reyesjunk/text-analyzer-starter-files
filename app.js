
function getTotalWordCount(texts){
  var wordCount = tokenizeText(texts).length;
  return (wordCount);
}

function getUniqueWordCount(texts) {
   var tokenText = tokenizeText(texts);
   var tokenArray = [];
   for(var item in tokenText) {
     if(tokenArray.indexOf(tokenText[item]) === -1){
       tokenArray.push(tokenText[item]);
     }
   }
   return tokenArray.length;
}

function getAverageWordLength(texts) {
  var averageLengthArray = tokenizeText(texts);
  var totalLengths = 0;
  for(var i = 0; i<averageLengthArray.length; i++) {
    totalLengths += averageLengthArray[i].length;
  }
  return totalLengths/averageLengthArray.length;
}

function getAverageSentenceLength(texts){
  // "use strict";
  var sentenceNumber = texts.match(/[.!?]+/g).length;
  console.log(sentenceNumber);
  var sentenceArray = texts.split(/[.!?]+/g);
  var totalSentenceLengths = 0;
  for(var i = 0; i < sentenceArray.length-1; i++){
    totalSentenceLengths+= sentenceArray[i].length;
  }
  return (totalSentenceLengths+sentenceArray.length)/sentenceNumber;
}

function tokenizeText(texts) {
  return texts.toLowerCase().match(/\b[^\s]+\b/g).sort();
}
function displayInfo(texts){
  var display = $('.js-text-form');
  var wordCount = getTotalWordCount(texts);
  var uniqueCount = getUniqueWordCount(texts);
  var averageWord = getAverageWordLength(texts);
  var averageSentence = getAverageSentenceLength(texts);

  display.find('.js-word-count').text(wordCount);
  display.find('.js-unique-word-count').text(uniqueCount);
  display.find('.js-average-word-length').text(averageWord + 'characters');
  display.find('.js-average-sentence-length').text(averageSentence + 'words');
}
function removeLineBreaks(texts){
  //I have no Idea what this means
  return texts.replace(/(\r\n|\n|\r)/gm,"");
}

$(document).ready(function(){
  $('.js-text-form').submit(function(event){
    event.preventDefault();
    var texts  = document.getElementById("user-text").value;
    $('.js-text-report').removeClass('hidden');
    displayInfo(removeLineBreaks(texts));

  });
});
