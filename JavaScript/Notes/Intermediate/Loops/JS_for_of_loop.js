// Here is an example of iterating over each element in an array using a traditional for loop with an index variable:

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}

// And here is an example of iterating through the same array using a for...of loop:

const hobbies2 = ['singing', 'eating', 'quidditch', 'writing'];

for (const hobby of hobbies2) {
  console.log(`I enjoy ${hobby}.`);
}
