/***toEmoticon()**/
/*
Instructions

    Checkpoint 1 Passed

    1.

    Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

    'shrug' should return '|_{"}_|'
    'smiley face' should return ':)'
    'frowny face' should return':('
    'winky face' should return ';)'
    'heart' should return '<3'
    any other input should return '|_(* ~ *)_|'
*/

// Write your function here:

const toEmoticon = (stringEmoticon) => {
  switch (stringEmoticon) {
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break;
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;

    default:
      return '|_(* ~ *)_|';
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon('whatever'));
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
console.log(toEmoticon('shrug'));
console.log(toEmoticon('smiley face'));
console.log(toEmoticon('frowny face'));
console.log(toEmoticon('winky face'));
console.log(toEmoticon('heart'));
