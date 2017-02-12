// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.

// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".

function repeatStringNumTimes(str, num) {
	
  // version 1
  
//   var newString = "";
//   for (var i = 0; i < num; i++){
//     newString += str;
//   }
//   return newString;
  
// version with recursion

  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
  
}

repeatStringNumTimes("abc", 3);
