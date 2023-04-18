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
