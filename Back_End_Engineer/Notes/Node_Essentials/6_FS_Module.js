/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. The FS Module ** Import Required*/

/*
All of the data on a computer is organized and accessed through a filesystem.
Each method available through the fs module has 
    1_ a synchronous version and
    2_  an asynchronous version.
    One method available on the fs core module is the
    3_ .readFile() method
    which reads data from a provided file:
    */
const fs = require('fs');

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

fs.readFile('./file.txt', 'utf-8', readDataCallback);
/*
We invoked the .readFile() method with three arguments:

    1_ The first argument is a string that contains a path to the file file.txt.
    2_ The second argument is a string specifying the file’s character encoding (usually ‘utf-8’ for text files).
    3_ The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of file.txt into the provided callback as its second argument.
*/
