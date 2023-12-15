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
  const strLength = aString.length;
  console.log(aString);
  const strIndex = aString.indexOf('a');
  let charCount = 0;
  for (let char of aString) {
    if (char === aChar) {
      //   charCount = charCount + 1;
      const firstCharIndex = aString.indexOf(char);
      const lastCharIndex = aString.lastIndexOf(char);
      const charSpan = lastCharIndex - firstCharIndex + 1;
      charCount++;
      console.log(charSpan);
    }
  }
  console.log(charCount);
  //   console.log(strIndex);
  //   return aString.includes('a');
};

console.log(subLength('digitize', 'i'));
