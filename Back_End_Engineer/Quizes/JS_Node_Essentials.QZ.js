/*Q1: Create a Buffer object that has a size of ‘15’ and a fill of 'c'.
 */
const newBuffer = Buffer.alloc(15, 'c');
/*
👏
You got it!
*/

/*Q2: Create a Buffer object from the string 'I am a string' and then convert the object to a string.
👏
You got it!
*/
const stringBuffer = Buffer.from('I am a string');
stringBuffer.toString();

/*Q3: What common method is actually a thin wrapper on the process.stdout.write() method?

A3: console.log()
👏
Correct! process.stdout.write() (and console.log()) provide output to the terminal.
*/

/*Q4: What is it called when we process data sequentially, piece by piece?
A4: A stream.
👏
Right!
*/

/*Q5: Which Node core module can be used to interact with the filesystem?
A5: The fs core module.
👏
Correct! The fs core module is an API for interacting with the file system
*/

/*Q6: My Home
Quiz: Node.js Essentials

What callback style should be provided for many of Node’s asynchronous APIs in order to handle errors thrown during asynchronous operations?

A6: An error-first callback function.
👏
Right! These callback functions are passed an error as their first argument if the asynchronous task results in an error. Otherwise, the first argument will be undefined.
*/

/*Q7: What does the Node EventEmitter class’s .on() method do?

A7: The .on() method assigns a listener callback function to a named event.
*/

/*Q8: What is a Buffer?

A8: A global object that is used to represent a fixed amount of memory that can't be resized.
👏
Correct!
*/

/*Q9: When are the functions of the timers module processed?

A9: They are put into a queue that is processed at every iteration of the Node.js event loop.
👏
Correct!
*/

/*Q10: Join the two Buffer objects below together.
👏
You got it!
*/
const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');
const bufferConcat = [buffer1, buffer2];

Buffer.concat(bufferConcat);

/*Q11: Use the proper timer module function to log the statement below as soon as the current poll phase is completed.

👏
You got it!
*/
setImmediate(() => {
  console.log('Hello world!');
});
