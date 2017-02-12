// One of the simplest and most widely known ciphers is a Caesar cipher, also known 
// as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
 // but do pass them on.

// rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
// rot13("SERR YBIR?") should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

function rot13(str) { // LBH QVQ VG!
  
// ASCII Character code  
// 65	66	67	68	69	70	71	72	73	74	75	76	77
// A	B	C	D	E	F	G	H	I	J	K	L	M
// N	O	P	Q	R	S	T	U	V	W	X	Y	Z
// 78	79	80	81	82	83	84	85	86	87	88	89	90
  
  var decodedEncodedStr = [];
  
  for (var i = 0; i < str.length; i++){    
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90){
      decodedEncodedStr.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77){
      decodedEncodedStr.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      decodedEncodedStr.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }       
  }
  return decodedEncodedStr.join("");
}

// Change the inputs below to test
rot13("FREE PIZZA");
