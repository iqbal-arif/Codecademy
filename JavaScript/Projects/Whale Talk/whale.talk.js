/*
*********************Whale Talk*********************

Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

    1. There are no consonants. Only vowels excluding “y”.
    2. The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!
*/

let input = 'Vowel Conversion';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

let i = 0;
while (i < input.length) {
  let j = 0;
  while (j < vowels.length) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      console.log(resultArray);
    }
    console.log(j);
    j++;
  }
  console.log(i + ' ' + input[i]);
  // console.log(i)
  i++;
}
// for (let i = 0; i<input.length; i++){
//   console.log(input[i]);
// }
