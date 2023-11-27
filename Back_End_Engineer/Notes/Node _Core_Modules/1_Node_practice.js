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
