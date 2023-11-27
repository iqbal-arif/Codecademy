/*** 1. Core Modules */
/*
The core modules are defined within Node.js’s source code and are located in the lib/ folder. Core modules can be required by passing a string with the name of the module into the require() function:
*/
// Require in the 'events' core module:
const events = require('events');

/*** 2. Accessing Node Core Module list */
require('module').builtinModules;

/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. Console Module ***/
/*
Node.js, the built-in console module exports a global console object that gives the terminal similar functionality.
The console object provides many of the same familiar methods such as:

    1_ .log() — to print messages to the terminal.
    2_ .assert() — to print a message to the terminal if the value is falsy.
    3_ .table() — to print out a table in the terminal from an object or array.
Example
*/
const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray);

console.table(petsArray);

console.assert(petsArray.length > 5);

/*** 2. Process Module ***/
/*
The process.env property is an object which stores and controls information about the environment in which the process is currently running.

We could store this information on the process.env.

    One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.
*/
/*** i. process.env.NODE_ENV ***/

if (process.env.NODE_ENV === 'development') {
  console.log('Testing! Testing! Does everything work?');
}

/*** ii. process.memoryUsage() ***/
/*
The  returns information on the CPU demands of the current process.
*/

/*** iii. process.argv ***/
/*
The process.argv property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces
console.log(process.argv[3]);
*/

/*** iv. Example of process.argv ***/
/* 1.
We want the program in app.js to store the starting amount of memory used (heapUsed), perform an operation, and then compare the final amount of memory used to the original amount. Right now, the initialMemory variable is assigned to null. Change this line, so that initialMemory is instead assigned the value of the heapUsed property on the object returned from invoking the process.memoryUsage() method

2_
We want the user of the program to be able to fill in their own word when they run the program. Right now word is assigned to null. Change the program so that when a user initiates the program with an additional command line argument, word will be assigned that value. For example, running the program with the command: node app.js Codecademy would result in word being assigned the value 'Codecademy'

When we initiate the program with the command node app.js Codecademy, the first element in the process.argv array is the file path to Node, the second is the file path to the location program file, and the third is the string 'Codecademy'. In app.js, we’ll want to assign word to this third element in the array:

let word = process.argv[2];

3_
3.

Awesome! Now let’s run the program. Type node app.js followed by any word you like and then hit enter.

node app.js Codecademy
*/

heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`);

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
  wordArray.push(`${word} count: ${i}`);
}

console.log(
  `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
    process.memoryUsage().heapUsed
  }. \nAfter using the loop to add elements to the array, the process is using ${
    process.memoryUsage().heapUsed - initialMemory
  } more bytes of memory.`
);

/*** 3. OS Module ***/
/*
When developing or debugging an app, it can be helpful to have information about the computer, operating system, and network on which the program is running

Unlike process and console, the os module is not global and needs to be included into the file in order to gain access to its methods. You can include the os module into your file by typing:
*/
const os = require('os');
/*
With the os module saved to the os variable, you can call methods like:

    os.type() — to return the computer’s operating system.
    os.arch() — to return the operating system CPU architecture.
    os.networkInterfaces() — to return information about the network interfaces of the computer, such as IP and MAC address.
    os.homedir() — to return the current user’s home directory.
    os.hostname() — to return the hostname of the operating system.
    os.uptime() — to return the system uptime, in seconds.
Example
*/
const os = require('os');

const local = {
  'Home Directory': os.homedir(),
  'Operating System': os.type(),
  'Last Reboot': os.uptime(),
};

/*** 4. Util Module ***/
/*
Utility functions don’t necessarily create new functionality in a program, but you can think of them as internal tools used to maintain and debug your code. The Node.js util core module contains methods specifically designed for these purposes. The util module can be required into the file using:

const util = require('util');
*/
/*** i. Util Type checking ***/
const util = require('util');

const today = new Date();
const earthDay = 'April 22, 2022';

console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));
/*
The types.isDate() method checks for Date objects and returns a boolean value, giving us:

true
false

Since today is a Date object, it returns true, and since earthDay is a string, it returns false!
*/
/*** ii. Util Promisify ***/
/*
Another important util method is .promisify(), which turns callback functions into promises.
*/
//User ID Check with callback function
function getUser(id, callback) {
  return setTimeout(() => {
    if (id === 5) {
      callback(null, { nickname: 'Teddy' });
    } else {
      callback(new Error('User not found'));
    }
  }, 1000);
}

function callback(error, user) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  console.log(`User found! Their nickname is: ${user.nickname}`);
}

getUser(1, callback); // -> `User not found`
getUser(5, callback); // -> `User found! Their nickname is: Teddy`

// User ID Check with Util Promisify method

const getUserPromise = util.promisify(getUser);

getUserPromise(id)
  .then((user) => {
    console.log(`User found! Their nickname is: ${user.nickname}`);
  })
  .catch((error) => {
    console.log('User not found', error);
  });

getUser(1); // -> `User not found`
getUser(5); // -> `User found! Their nickname is: Teddy`

// Example 2 :  Callback to Promise conversion
/*
In app.js we’ve required in an object containing long distance hiking trails in the US. You can view that object by opening the trails.js file from the navigator.

Below that is a callback function, getTrailDistance, that’s ready to be converted using util.promisify().

Start by requiring the util module at the top of the app.js, and saving it to a util variable.

*/
// Require in trails module from trails.js
const trails = require('./trails.js');
// Require in util module here
const util = require('util');
// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {
      const foundTrail = trails[trail];
      callback(null, foundTrail);
    } else {
      callback(new Error('Trail not found!'));
    }
  }, 1000);
};

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  } else {
    const mi = trailData.miles;
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`);
  }
}

getTrailDistance('North Country', callback);

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise('North Country')
  .then((trailData) => {
    const mi = trailData.miles;
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`);
  })
  .catch((error) => {
    console.log('Trail not found!');
  });
