/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. Essentials ***/
/*
Node.js modules such as events, error, buffer, fs, and timer modules. We will also learn how to get user input and output and create readable and writable streams. 


    1_ The events module provides EventEmitter objects used to assign listener functions triggered on specified events.

    2_ The buffer module is used to handle binary data. In app.js, a Buffer object is being created and then converted to a string.

    3_ The fs module is used to interact with the user’s filesystem. In app.js, a statement is logged that verifies that a file was provided in a callback function.
    
    4_ The timer module provides the setImmediate() function which runs immediately after the current poll phase is completed. Take note of when 'Welcome to Node.js' is logged to the terminal.

*/
const events = require('events');
const fs = require('fs');

// EventEmitter object is used to assign listener functions triggered on specific events
let myEmitter = new events.EventEmitter();

let newWelcomeMessage = (data) => {
  console.log(`Welcome to Nodejs, what's your name? ${data}.`);
};

myEmitter.on('welcome', newWelcomeMessage);
myEmitter.emit('welcome', 'Codey');

// Buffer objects are used to handle binary data
const buffer = Buffer.from('Hello World');
console.log(buffer);
console.log(buffer.toString());

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

// file.txt file is loaded using the readFile method of the fs module
fs.readFile('./file.txt', 'utf-8', readDataCallback);

// setImmediate function runs immediately after the current poll phase is completed
setImmediate(() => {
  console.log('Welcome to Node.js');
});
