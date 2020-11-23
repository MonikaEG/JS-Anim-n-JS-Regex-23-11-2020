'use strict';
let s = '';
let s1 = '';
let s2 = '';

let TextExample = 'Pigen var gået en tur og købte en flødeis.'; // Creates string.
let re0 = /æ/; // Checks for æ within the string.
let re1 = /ø/; // Checks for ø within the string.
let re2 = /å/; // Checks for å within the string.

// Check Æ
if (re0.test(TextExample)) { // The regular expression searches for æ in the URL string. Will return true in this case.
    s = `"${re0}" was found in the sentence: "${TextExample}"`; // Returns true
} else {
    s = `Error - could not find "${re0}".`; // If return false
}

// Check Ø
if (re1.test(TextExample)) { // The regular expression searches for ø in the URL string. Will return true in this case.
    s1 = `"${re1}" was found in the sentence: "${TextExample}"`; // Returns true
} else {
    s1 = `Error - could not find "${re1}".`; // If return false
}

// Check Å
if (re2.test(TextExample)) { // The regular expression searches for æ in the URL string. Will return true in this case.
    s2 = `"${re2}" was found in the sentence: "${TextExample}"`; // Returns true
} else {
    s2 = `Error - could not find "${re2}".`; // If return false
}

console.log(s);
console.log(s1);
console.log(s2);

/**  Conclusion: The special characters, æ, ø and å are not a part of the Regular Expression concept of word characters.
They are just ordinary letters. **/