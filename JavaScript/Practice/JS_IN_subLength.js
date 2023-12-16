/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

*/

const subLength = (aString, aChar) => {
  console.log(aString);
  charIdentified = aChar;
  charCount = 0;
  for (let i = 0; i < aString.length; i++) {
    if (aString.charAt(i) === charIdentified) {
      charCount++;
    }
  }
  console.log('charCount End', charCount);
  if (charCount >= 3) {
    return 0;
  } else {
    for (let char of aString) {
      if (char === aChar) {
        const firstCharIndex = aString.indexOf(char);
        const lastCharIndex = aString.lastIndexOf(char);
        const charSpan = lastCharIndex - firstCharIndex;
        if (charSpan === 0) {
          return 0;
        }

        if (charSpan === 1 || charSpan > 2) {
          return charSpan + 1;
        }
      }
    }
  }
};
console.log(subLength('cheesecake', 'k'));
/*
subLength(); // returns 6
subLength(); // returns 2
subLength(); // returns 0
subLength(); // returns 0
*/
