// [ Find the Longest Word in a String ]

// Return the length of the longest word in the provided sentence.
// Your response should be a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.


function findLongestWord(str) {
  str = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i].length > maxLength) {
      maxLength = str[i].length;
    }
  }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
