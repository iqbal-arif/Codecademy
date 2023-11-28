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
