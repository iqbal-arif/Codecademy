/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

*/

const subLength = (aString, aChar) => {
  console.log('includes', aString.includes(aChar));
  console.log(aString);
  const charCheck = aString.includes(aChar);
  if (charCheck) {
    charIdentified = aChar;
    charCount = 0;
    for (let i = 0; i < aString.length; i++) {
      if (aString.charAt(i) === charIdentified) {
        charCount++;
        console.log('charCount', charCount, aString.charAt(i));
      }
    }
    console.log('charCount start', charCount);
    if (charCount >= 3) {
      return 0;
    } else {
      console.log(aString);
      for (let char of aString) {
        //   if (char !== aChar) {
        //     return 0;
        //   }
        if (char === aChar) {
          console.log('block', char);
          const firstCharIndex = aString.indexOf(char);
          const lastCharIndex = aString.lastIndexOf(char);
          const charSpan = lastCharIndex - firstCharIndex;
          console.log('charSpan block', charSpan);
          if (charSpan === 0) {
            return 0;
          } else if (charSpan === 1 || charSpan > 2) {
            return charSpan + 1;
          }
        }
      }
    }
    return;
  } else {
    return 0;
  }
};
console.log(subLength('funny', 'n'));

// subLength('Saturday', 'a'); // returns 6
// subLength('summer', 'm'); // returns 2
// subLength('digitize', 'i'); // returns 0
// subLength('cheesecake', 'k'); // returns 0

/*
if (charSpan === 0) {
        return 0;
      } else if (charSpan === 1 || charSpan === 2 || charSpan > 2) {
        return charSpan + 1;
      } else {
        return 0;
      }
      */
