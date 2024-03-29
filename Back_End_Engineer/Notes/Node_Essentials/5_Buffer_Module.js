/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. The Buffer Module ** Global Module*/

/*
In Node.js, the Buffer module is used to handle binary data. 

A Buffer object represents a fixed amount of memory that can’t be resized. Buffer objects are similar to an array of integers where each element in the array represents a byte of data. The buffer object will have a range of integers from 0 to 255 inclusive.

The Buffer module provides a variety of methods to handle the binary data such as 
    1_ .alloc(),
    2_ .toString(),
    3_ .from(), and
    4_ .concat(). 
*/
/*
/*** 1_ .alloc()
    The .alloc() method creates a new Buffer object with the size specified as the first parameter. .alloc() accepts three arguments:

        1_ Size: Required. The size of the buffer
        2_ Fill: Optional. A value to fill the buffer with. Default is 0.
        3_Encoding: Optional. Default is UTF-8.
*/
const buffer = Buffer.alloc(5);
console.log(buffer); // Ouput: [0, 0, 0, 0, 0]
/*
/*** 2_ .toString()
The .toString() method translates the Buffer object into a human-readable string. It accepts three optional arguments:

        1_ Encoding: Default is UTF-8.
        2_ Start: The byte offset to begin translating in the Buffer object. Default is 0.
        3_ End: The byte offset to end translating in the Buffer object. Default is the length of the buffer. The start and end of the buffer are similar to the start and end of an array, where the first element is 0 and increments upwards.
*/
const buffer1 = Buffer.alloc(5, 'a');
console.log(buffer1.toString()); // Output: aaaaa
/*
/***3_ .from()
The .from() method is provided to create a new Buffer object from the specified string, array, or buffer. The method accepts two arguments:

        1_ Object: Required. An object to fill the buffer with.
        2_ Encoding: Optional. Default is UTF-8.
*/
const buffer2 = Buffer.from('hello');
console.log(buffer2); // Output: [104, 101, 108, 108, 111]
/*
4_ .concat()
The .concat() method joins all buffer objects passed in an array into one Buffer object. .concat() comes in handy because a Buffer object can’t be resized. This method accepts two arguments:

        1_ Array: Required. An array containing Buffer objects.
        2_ Length: Optional. Specifies the length of the concatenated buffer.
*/
const bufferA = Buffer.from('hello'); // Output: [104, 101, 108, 108, 111]
const bufferB = Buffer.from('world'); // Output:[119, 111, 114, 108, 100]
const array = [bufferA, bufferB];
const bufferConcat = Buffer.concat(array);

console.log(bufferConcat); // Output: [104, 101, 108, 108, 111, 119, 111, 114, 108, 100]

/*Example*/

// Allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, 'b');

// Create buffer1 with 'hello' and buffer2 with 'world'
const bufferE1 = Buffer.from('hello');
const bufferE2 = Buffer.from('world');

// Combine buffer1 and buffer2

const bufferArray = [bufferE1, bufferE2];
const bufferConcatE = Buffer.concat(bufferArray);
// Translate buffer to string

const bufferString = bufferConcat.toString();
// Uncomment the appropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2);
console.log(bufferConcatE);
console.log(bufferString);
