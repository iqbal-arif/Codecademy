const { Console } = require('console');
const fs = require('fs');
// Below we create a function for reading files that returns a promise. We converted the fs.readfile() function which uses callbacks. Many of the asynchronous functions you'll encounter already return promises, so this extra step is seldom necessary.
const promisifiedReadfile = (file, encoding) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, text) => {
      if (err) {
        return reject(err.message);
      }
      resolve(text);
    });
  });

module.exports = promisifiedReadfile;

function asyncTask() {
  return new Promise((resolve) => {
    resolve('Task Done');
  });
}
console.log(asyncTask());
const taskOne = async () => {
  const task = await asyncTask();
  return 'Task:', task;
};
console.log(taskOne);
const taskTwo = async () => {
  const task = await asyncTask();
  console.log('Task:', task);
};
console.log(taskTwo);
async function matchPromises(taskOne, taskTwo) {
  console.log(taskOne);
  console.log(taskTwo);
  try {
    // taskOne !== taskTwo ? console.log('match') : console.log('no match');
    if (taskOne === taskTwo) {
      console.log('match');
    } else {
      console.log('no match');
    }
    //  ? console.log (true):console.log ;
  } catch (error) {
    console.log('error');
  }
}

matchPromises(taskOne, taskTwo).then((result) => console.log(result));
