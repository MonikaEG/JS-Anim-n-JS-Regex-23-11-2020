'use strict';

let wordArr = 'word one, word two, word three, word four';
let howMany = ['']; // Make this count the words?
let matches = wordArr.match(howMany);
console.log(`There are ${matches[1]} words in this array.`);

// Should display how many words that are in wordArr.