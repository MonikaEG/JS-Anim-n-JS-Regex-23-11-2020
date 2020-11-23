'use strict';
let s = '';
let URL = `http://www.example.com`; // Creates string.
let re0 = /www\./; // Reads and checks for www. within the string.
if (re0.test(URL)) { // The regular expression searches for 'www.' in the URL string. Will return true in this case.
    s = `Most URLs begin with "${re0}"`; // Returns true. USE BACKTICKS instead of apostrophes, so the function can be read.
} else {
    s = `Error - could not find "${re0}"`; // If return false
}

console.log(s);


// Notes to self:
// In this case, \ has to be used before every . \ + * ? [ ^ ] $ ( ) { } = ! < > | : /
// Example: /https\:\/\// would search for "https://" - / ends the search in the string.
// Example 2: /www\./ will search for "www."