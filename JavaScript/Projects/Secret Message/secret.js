let secretMessage = [
  'Learning',
  'is',
  'not',
  'about',
  'what',
  'you',
  'get',
  'easily',
  'the',
  'first',
  'time,',
  'it',
  'is',
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'JavaScript',
];

/*
1.Use an array method to remove the last string of the array secretMessage. 
*/
const removedMessage = secretMessage.pop();

/*
2.Great! You can check your work by logging the .length of the array.

At this point, the length should be 1 less than the original length.
*/
console.log(secretMessage.length);

/*
3.Use an array method to add the words to and Program as separate strings to the end of the secretMessage array. 
*/
secretMessage.push('to', 'Program');

/*
4.Change the word easily to the word right by accessing the index and replacing it. 
*/
secretMessage[7] = 'right';

/*
5.Use an array method to remove the first string of the array.
*/
secretMessage.shift();

/*
6.Use an array method to add the string Programming to the beginning of the array. 
*/
secretMessage.unshift('Programming');
