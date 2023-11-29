/*Q1: 
Create a Buffer object that has a size of ‘15’ and a fill of 'c'.
You got it!

*/

const newBuffer = Buffer.alloc(15, 'c');

/*Q2: How can the EventEmitter class be accessed?
A2: Using the require() statement for the event module.
👏
Correct!
*/

/*Q3: From which core module does the method .createWriteStream() come from?
A3: fs
👏
Perfect! Lets keep going!
*/

/*Q4: Which Node core module can be used to interact with the filesystem?
A4: The fs core module.
👏
Correct! The fs core module is an API for interacting with the file system
*/

/*Q5: What is the appropriate function that will be executed when the current poll phase has been completed?
A: setImmediate()
👏
Correct!

*/

/*Q6: Why is requiring the buffer module not necessary to use the Buffer object?
A6: Buffer is a global object.👏
Correct!

*/

/*Q7: What is a process in computer science?
A7: The instance of a computer program that is being executed.
👏
You’re doing amazing!
*/

/*Q8: Create a variable called bufferArray and initialize it to an array containing buffer1 and buffer2. Then, create another variable called bufferConcat and save it to a new Buffer object that is a combination of the objects in the bufferArray variable
 */
const buffer1 = Buffer.from('Welcome');
const buffer2 = Buffer.from('learner');

const bufferArray = [buffer1, buffer2];

const bufferConcat = Buffer.concat(bufferArray);

/*Q9: What is the purpose of process.env?

A9: process.env stores adn controls information about the environment in which the process is currently running.
👏
Good job! This property can be used to determine what task an application will do. 
*/

/*Q10: Fill in the following code so that the appropriate output prints based on whether the environment is in production or development.
 */
if (process.env.NODE_ENV === 'development') {
  console.log('Do not roll this out under any circumstances!');
} else if (process.env.NODE_ENV === 'prodution') {
  console.log('Release it to the public!');
}

/*Q11: True/False: NODE_ENV is a property that holds a string with the directory in which the current process is located.
A: False
👏
Amazing! You realized that PWD is the property that holds this information.
*/

/*Q12: What Node.js object has the event emitter stdin property?
A12: The process Object.
👏
Correct!
*/

/*Q13: Which Node.js core module provides runtime type checking?
A13: The util module.
*/

/*Q14: Use the appropriate function of the timers module to log 'Welcome learner!' once the current poll phase has been completed.
👏
You got it!
*/
setImmediate(() => {
  console.log('Welcome learner!');
});

/*Q15: When are the functions of the timers module processed?
A15: They are put into a queue that is processed at every iteration of the Node.js event loop.
👏
Correct!
*/

/*Q16: True/False: Core modules are located in the lib/ folder.
A16: True.
👏
Amazing! The core modules are defined within Node.js’s source and are located in the lib/ folder.
*/
