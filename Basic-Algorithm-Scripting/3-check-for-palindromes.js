// [Check for Palindromes Complete   *]

// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward 
// and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
// and turn everything lower case in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.

// version 1
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[\W_]/g, '');
  
  if (str === str.split("").reverse().join("")) {  
    return true; 
  } else {
    return false;
  }
}
palindrome("not a palindrome");



// version 2  (using recursion)
function palindrome2(str) {
// make all letters lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z|0-9]/g, "");

  // if the length of the string is 0 then it is a palindrome
  if (str.length === 0){
    return true;
  }
  // if the first letter and the last letter of the string
  // do not equal each other, then it is not a palindrome
  if (str[0] !== str[str.length-1]){
    return false;
  }
  //Else, run the function without the first and last characters.
  else{
    return palindrome2(str.slice(1,str.length - 1));
  }
}
palindrome2("not a palindrome");

