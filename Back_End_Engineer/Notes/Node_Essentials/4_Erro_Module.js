/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. The Error Module ** Global Module*/

/*
The Node environment’s error module has all the standard JavaScript errors such as 
    1. EvalError,
    2. SyntaxError,
    3. RangeError,
    4. ReferenceError,
    5. TypeError, and
    6. URIError as well as
    7. the JavaScript Error class for creating new error instances. 

With synchronous code in Node, we can use error handling techniques such as
    8.  try...catch statements. 

Asynchronous Node APIs:
 Uses error-first callback functions—callback functions which have an error as the first expected argument and the data as the second argument.  
 Example 
 */
const errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
    // err was falsy
    console.log(`There was NO error. Event data: ${data}`);
  }
};
