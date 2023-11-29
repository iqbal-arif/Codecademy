/*Q1: Which of the following is the valid syntax in Node to import a module called robot.js from the same directory?
A1: const Robot = require('./robot.js')
👏
Correct!
*/

/*Q2: Which of the following is NOT true of JavaScript modules?
A2: Creating modules makes it harder to find relevant code and makes debugging harder.
👏
Correct! In fact, modules can make it easier to find and debug code.
*/

/*Q3: Which of the following is the valid syntax to export this module in Node?
 */
let Robot = {};
Robot.name = 'Johnny';
Robot.sayName = (name) => {
  console.log(`My name is ${name}`);
};

module.exports = Robots;
