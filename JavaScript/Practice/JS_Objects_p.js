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
const person = {
  firstName: 'Matilda',
  age: 27,
  hobby: 'knitting',
  goal: 'learning JavaScript',
};

delete person.hobby; // or delete person[hobby];

console.log(person);
/*
  {
    firstName: "Matilda"
    age: 27
    goal: "learning JavaScript"
  }
  */

/*
  Once an object is created in JavaScript, it is possible to remove properties from the object using the delete operator. The delete keyword deletes both the value of the property and the property itself from the object. The delete operator only works on properties, not on variables or functions.
  */

/*
*********************************
5. JavaScript Objects are Mutable
*********************************
  */
const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
};

console.log(student);
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score;
student.grade = 'F';
console.log(student);
// { name: 'Sheldon', grade: 'F' }

student = {};
// TypeError: Assignment to constant variable.
/*
  JavaScript objects are mutable, meaning their contents can be changed, even when they are declared as const. New properties can be added, and existing property values can be changed or deleted.

It is the reference to the object, bound to the variable, that cannot be changed.
*/

/*************************************************/
/********************Practice*********************/
/*************************************************/

/*
Q1: Complete the JavaScript code block that mutates the object locationOfLondon inside a function.
*/
locationOfLondon = {
  latitude: 51.5074,
  longitude: 0.1278,
};

function changeProp(loc) {
  loc.longitude += 0.001;
}

changeProp(locationOfLondon);

/*
Q2: Access a property of the myDog object so that undefined will be printed out to the console.
*/
const myDog = {
  name: 'Snowflake',
  age: 7,
};

console.log(myDog.color);

/*
Q3: Complete the JavaScript code block which implements a factory function.
*/
const objFactory = (name, description) => {
  return {
    name,
    description,
    printHello() {
      console.log('Hello!');
    },
  };
};
