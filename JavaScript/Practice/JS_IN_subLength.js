/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

*/

const subLength = (aString, aChar) => {
  //   console.log(aString, aChar);
  //   const strLength = aString.length;
  console.log(aString);
  let charCount = 0;
  for (let char of aString) {
    if (char === aChar) {
      const firstCharIndex = aString.indexOf(char);
      const lastCharIndex = aString.lastIndexOf(char);
      const charSpan = lastCharIndex - firstCharIndex;
      if (charSpan === 0) {
        return 0;
      }
      console.log(firstCharIndex);
      console.log(lastCharIndex);
      if (charSpan === 1 || charSpan > 2) {
        return charSpan + 1;
      }
      //   if (charSpan) {
      //   }
      //   return charSpan === 0 || charSpan === 1
      //     ? charSpan
      //     : (charSpan = charSpan + 1);
      //   return charSpan;
    }
    // if (charSpan >= 3 || charCount < 2) {
    //   //   charCount++;
    // } else {
    //   return;
    // }
    // return charSpan;
    // }
    //   console.log(charSpan);
    //   console.log(charCount);
  }
};

console.log(subLength('digitize', 'i'));
// subLength('summer', 'm');
