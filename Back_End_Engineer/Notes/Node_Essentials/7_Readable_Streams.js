/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. The Readable Streams ** Import Required*/
/*
Data that isn’t processed all at once but rather sequentially, piece by piece, in what is known as a stream.
*/
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt'),
});

myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});
/*
Let’s walk through the above code:

    1_ We require in the readline and fs core modules.

    2_ We assign to myInterface the returned value from invoking readline.createInterface() with an object containing our designated input.

    3_ We set our input to fs.createReadStream('text.txt') which will create a stream from the text.txt file.

    4_ Next we assign a listener callback to execute when line events are emitted. A 'line' event will be emitted after each line from the file is read.

    5_ Our listener callback will log to the console 'The line read: [fileLine]', where [fileLine] is the line just read.

*/

/****Shopping List Stream line Reading ***/

/* 1. 
You’re going to create a program that reads each item off of a shopping list (located in shoppingList.txt) and prints it to the console. Let’s take it one step at a time.

Create a myInterface variable. Assign myInterface the value returned from invoking readline.createInterface().

You’ll want to invoke readline.createInterface() with an object with a key of input and a value of fs.createReadStream(). Remember that fs.createReadStream() expects the file (as a string) from which it should read.

2.
Great work. Let’s create a listener callback function to use in the next step. Name this function printData. printData() should expect to receive some data (we named our parameter data) and it should log that data to the console in the format: Item: [data], where [data] is the argument passed into the function.

3.

We’re nearly there! Remember that a 'line' event will be emitted after each line from the file is read. Let’s assign our printData() function to execute whenever a 'line' event is emitted by using myInterface‘s .on() method.


*/

const readline = require('readline');
const fs = require('fs');

const myInterface2 = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt'),
});

const printData = (data) => {
  console.log(`Item: ${data}`);
};

myInterface2.on('line', printData);
