/*Q1: What are the states of REPL in order?
A1: Read-Eval-Print
👏
Perfect! REPL loops through these states repeatedly in that order.
*/
/*Q2: Fill in the code to get the heap used for this process.
A2:
*/
let amountUsed = process.memoryUsage().heapUsed;

console.log(`Total heap used is ${amountUsed}`);

/*Q3: We wrote a JavaScript program in a file named helloWorld.js. Which is the correct terminal command to run this program from the terminal?
A3: node helloWorld.js
👏
Right! This will execute the JavaScript file helloWorld.js.
*/

/*Q4:Which of the following is not a default key of the global object?
A4: require
*/

/*Q5: Which of the following code snippet is the correct way to print out the file path that’s in the following command-line?

$ node webScrapper.js testing phase five
A5:
*/
console.log(process.argv[1]);

/*Q6: What is the primary purpose of the Node.js os module?
A6: To get information about the computer and operating system on which a program is running.
*/

/*Q7:True/False: Core modules are located in the lib/ folder.
A7: TRUE
👏
Amazing! The core modules are defined within Node.js’s source and are located in the lib/ folder.
*/

/*Q8: What is modularity? 
A8: A software design technique where one program has distinct parts each providing a single piece of the overall functionality.
👏
Good job! Modularity is essential for creating scalable programs.
*/

/*Q9: Create a const variable called coreModules. Initialize coreModules to the builtinModules property of the module module.

Lastly, list all the core Node.js modules to the terminal by logging the coreModules variable.
A9:
*/
const coreModules = require('module').builtinModules;
console.log(coreModules);

/*Q10: Fill in the following code so that the appropriate output prints based on whether the environment is in production or development.
A10:
*/
if (process.env.NODE_ENV === 'development') {
  console.log('Do not roll this out under any circumstances!');
} else if (process.env.NODE_ENV === 'prodution') {
  console.log('Release it to the public!');
}

/*Q11: The Node.js util module contains utility functions. What purpose does this type of function serve?
A11: Utility functions are used to maintain and debug code.
👏
You got it!
*/

/*Q12: Which of the following is NOT true of the console.log() method in Node.js?
A12: It outputs messages to the browser condole.
👏
Correct! This statement is not true. Although console.log() in Node.js is functionally similar to its browser counterpart, it does NOT output to the browser console.
*/

/*Q13: Which array of command-line values is correctly being separated? 
A13: node webApplication.js trial phase four
👏
Perfect! You’re getting the hang of Node.js. 
*/

/*Q14: Fill in the code so that a property named color with the value white is added to the global object.
A14:
*/
$ node

> global.color = 'white'
//'white'
> console.log(global.color)
//white


/*Q15: Why will the following code not add flower as a property to the global object?

> global.flower = "roses"

> console.log(global.flower)
A15: REPL is not running, node needs to be entered in the terminal before anything.
Perfect! REPL needs to be running in order for us to do anything with the global object. 
*/

/*Q116: True/False: The first element in a command-line array is the path to the file that’s running.
A16: False
👏
Good Job! The first element is always the absolute path to the Node.