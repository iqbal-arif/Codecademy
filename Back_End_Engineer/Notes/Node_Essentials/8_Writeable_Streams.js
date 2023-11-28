/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. The Writeable Streams ** Import Required*/
/*
We can create a writeable stream to a file using the fs.createWriteStream() method:

Unlike a readable stream, which ends when it has no more data to read, a writable stream could remain open indefinitely. We can indicate the end of a writable stream with the .end() method. 
*/
const fs = require('fs');

const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!');
fileStream.write('This is the second line!');
fileStream.end();

/***** Writing Stream ***/
/*
1.

We’re going to create a writeable stream. We want to write to a file named shoppingResults.txt. Create a variable fileStream and assign as its value the writable stream.

2.

Great work. Let’s create a listener callback function to use in the next step. Name this function transformData. transformData should expect to receive some data (we named our parameter line) and it should write() to the writable stream (fileStream) in the format They were out of: [line]\n, where [line] is the argument passed into the function.

3.

We’re nearly there! Let’s assign our transformData function to execute whenever a 'line' event is emitted on the myInterface stream.

4.

Sweet! Let’s run the program in the terminal. Type node app.js in the terminal and press enter. If everything worked, you should be able to open the shoppingResults.txt file and see that it has the correct contents.
*/

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt'),
});

const fileStream2 = fs.createWriteStream('shoppingResults.txt');

let transformData = (line) => {
  fileStream2.write(`They were out of: ${line}\n`);
};

myInterface.on('line', transformData);
