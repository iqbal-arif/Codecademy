/*
Q1: For the following block of code, how many times does the if (word.includes(vowel)) test execute, and how many lines are output to the console?
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];
let words = ['oak', 'sycamore', 'birch', 'sequoia'];

for (let w = 0; w < words.length; w += 1) {
  let word = words[w];
  let count = 0;
  for (let v = 0; v < vowels.length; v += 1) {
    let vowel = vowels[v];
    if (word.includes(vowel)) {
      count += 1;
    }
  }
  console.log(`"${word}" contains ${count} vowels.`);
}

/*
20 Test; 4 Lines
Each vowel is tested against each word: 5 * 4 = 20. The outer loop generates one line per iteration: 4.
*/

/*
Q2: Determine the option that best describes the JavaScript break keyword.
A2: It jumps out of a loop when a specific condition in the loop iteration is met.
*/

/*
Q3: Which of the following for loop definitions will result in the word 'loop' being extracted from the phrase 'proof of lag' ?
*/
const phrase = 'proof of lag';

result = '';
// for (let i = ____ ; i ____ ; i ____ ) {
for (let i = phrase.length - 3; i >= 0; i -= 3) {
  result += phrase[i];
}
console.log(result);

/*
Q4: Fill in the missing code to log the even numbers between 1 and 100 (inclusive) to the console.
*/
let i = 0;

do {
  i++;
  if (i % 2 == 0) {
    console.log(i);
  }
} while (i < 100);

/*
Q5: What is the general purpose of a loop?
A5: Loops automatically iterate a block of code based on conditions.
Correct, loops automate repetition!
*/

/*
Q6: What do nested for loops do?
A6: Nested for loops allow us to run multiple for loops at once.
*/

/*
Q7: What will be the result of the code block?
*/
let socialMedia = ['Instagram', 'Facebook', 'Twitter'];

for (
  let socialMediaIndex = 0;
  socialMediaIndex < socialMedia.length;
  socialMediaIndex++
) {
  console.log(socialMedia[socialMediaIndex]);
}

/*
'Instagram', 'Facebook', 'Twitter'
*/

/*
Q8: What would the output of this block of code be?
*/
const animal = 'cat';

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}
/*
c 1 2 3 a 1 2 3 t 1 2 3
*/
