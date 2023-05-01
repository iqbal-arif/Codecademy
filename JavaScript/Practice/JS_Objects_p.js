/*
******************************************
1. javascript passing objects as arguments
******************************************
*/
const origNum = 8;
const origObj = { color: 'blue' };

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed
// by reference and are therefore mutable.
console.log(origObj.color);
/*
When JavaScript objects are passed as arguments to functions or methods, they are passed by reference, not by value. This means that the object itself (not a copy) is accessible and mutable (can be changed) inside that function.
*/

/*
***********************************************
2. Accessing non-existent JavaScript properties
***********************************************
*/
const classElection = {
  date: 'January 12',
};

console.log(classElection.place); // undefined
/*
  When trying to access a JavaScript object property that has not been defined yet, the value of undefined will be returned by default.
  */

/*
*******************************
3. javascript factory functions
*******************************
*/
// A factory function that accepts 'name',
// 'age', and 'breed' parameters to return
// a customized dog object.
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');
    },
  };
};
/*
  A JavaScript function that returns an object is known as a factory function. Factory functions often accept parameters in order to customize the returned object.
  */

/*
******************
4. Delete operator
******************
*/
