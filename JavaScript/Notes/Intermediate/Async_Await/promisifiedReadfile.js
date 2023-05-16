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

const taskOne = async () => {
  const task = await asyncTask();
  console.log(task);
};
const taskTwo = async () => {
  const task = await asyncTask();
  console.log(task);
};
async function matchPromises() {
  try {
    if (taskOne === taskTwo) {
      console.log('match');
    } else {
      return 'no match';
    }
    //  ? console.log (true):console.log ;
  } catch (error) {
    console.log('error');
  }
}

matchPromises();
