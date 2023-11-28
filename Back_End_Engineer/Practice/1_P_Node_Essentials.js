/**** 1_The .toString() Method ***/

const bufferAlloc = Buffer.alloc(5, 'b');
console.log(bufferAlloc.toString()); // Ouptut: bbbbb
/*
A Buffer object can be translated into a human-readable string by chaining the .toString() method to a Buffer object. Optionally, encoding can be specified as the first argument, byte offset to begin translating can be provided as the second argument, and the byte offset to end translating as the third argument.
*/

/**** 2_The timers Module ****/
/*
The global timers module contains scheduling functions such as setTimeout(), setInterval(), and setImmediate(). These functions are put into a queue processed at every iteration of the Node.js event loop.
*/

/**** 3_The error Module ****/
/*
The asynchronous operations involving the Node.js APIs assume that the provided callback functions should have an error passed as the first parameter. If the asynchronous task results in an error, the error will be passed in as the first argument to the callback function. If no error was thrown, then the first argument will be undefined.
*/

/**** 4_Input/Output ****/

// Recieves an input
process.stdin.on();

// Gives an output
process.stdout.write();

/*
Input is data that is given to the computer, while output is any data or feedback that a computer provides. In Node, we can get input from a user using the stdin.on() method on the process object. We are able to use this because .on() is an instance of EventEmitter. To give an output, we can use the .stdout.write() method on the process object as well. This is because console.log() is a thin wrapper on .stdout.write().
*/

/**** 5_The .concat() Method ****/

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('World');
const bufferArray = [buffer1, buffer2];

const combinedBuffer = Buffer.concat(bufferArray);
console.log(combinedBuffer.toString()); // Logs 'HelloWorld'

/*
The .concat() method joins all Buffer objects in the specified array into one Buffer object. The length of the concatenated Buffer can be optionally provided as the second argument. This method is useful because a Buffer object can’t be resized.
*/

/**********************/
/**Practice Questions**/
/**********************/

/*Q1: Create a Buffer object from the string 'Practice makes perfect.' and then convert the object to a string.
You got it! 

*/
const stringBuffer = Buffer.from('Practice makes perfect.');
const bufferToString = stringBuffer.toString();

/*Q2 :When are the functions of the timers module processed?
A2: They are put into a queue that is processed at every iteration of the Node.js event loop.
👏
Correct! 
*/

/*Q3: What will be the outcome of the below code block if an error occurs?
 */
let errorResult = (err, key) => {
  if (err) {
    console.log('Something went wrong.');
  } else {
    console.log('We are all good here!');
  }
};
/*
A3: The error will be passed as the first argument to the callback function and 'Something went wrong.' will print.
*/

/*Q4: What Node.js object has the event emitter stdin property?
A:4: The process object.
👏
Correct!
*/

/*Q5: Join the two Buffer objects below together.
 */
const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');
const bufferConcat = { buffer1, buffer2 };

Buffer.concat(bufferConcat);
/*
To join Buffer objects, we first need to create an array of Buffer objects.
*/
