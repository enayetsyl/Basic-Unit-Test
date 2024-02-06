const reverseString = require('./reverseString')

function isPalindrome(word) {
  // Check if the word is the same forwards and backwards

  return word.toLowerCase() === reverseString(word).toLowerCase();
}

module.exports = isPalindrome;