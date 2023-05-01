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

/*
Q4: Fill in the blanks to demonstrate two ways to delete properties from a JavaScript object.
*/
const bag = {
  price: 20,
  pockets: 2,
  'fabric-material': {
    front: {
      fabric: 'Leather',
    },
    back: {
      fabric: 'Nylon',
    },
  },
};

delete bag.price;
delete bag['fabric-material'];

/*
Q5: Change the type property of the shoes object from 'sneakers' to 'boots'.
*/
const shoes = {
  color: 'black',
  type: 'sneakers',
};

shoes.type = 'boots';


/*
************************************************
6. getters and setters intercept property access
************************************************
*/
const myCat = {
  _name: 'Snickers',
  get name(){
    return this._name
  },
  set name(newName){
    //Verify that newName is a non-empty string before setting as name property
    if (typeof newName === 'string' && newName.length > 0){
      this._name = newName; 
    } else {
      console.log("ERROR: name must be a non-empty string"); 
    }
  }
}
/*
JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, and allow for additional actions to be performed before these changes go into effect.
*/

/*
*****************************************************
7. shorthand property name syntax for object creation
*****************************************************
*/
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }
/*
The shorthand property name syntax in JavaScript allows creating objects without explicitly specifying the property names (ie. explicitly declaring the value after the key). In this process, an object is created where the property names of that object match variables which already exist in that context. Shorthand property names populate an object with a key matching the identifier and a value matching the identifier’s value.
*/

/*
************************************
8. Restrictions in Naming Properties
************************************
*/
// Example of invalid key names
const trainSchedule = {
    platform num: 10, // Invalid because of the space between words.
    40 - 10 + 2: 30, // Expressions cannot be keys.
    +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.
  }
  /*
  JavaScript object key names must adhere to some restrictions to be valid. Key names must either be strings or valid identifier or variable names (i.e. special characters such as - are not allowed in key names that are not strings).
  */

/*
****************************
9. javascript function this
****************************
*/
const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object
    // and it's used to access its properties
    return this.seatCapacity - this.numCustomers;
  }
}
/*
Every JavaScript function or method has a this context. For a function defined inside of an object, this will refer to that object itself. For a function defined outside of an object, this will refer to the global object (window in a browser, global in Node.js).
*/

/*
********************************************************
10. JavaScript destructuring assignment shorthand syntax
********************************************************
*/
const rubiksCubeFacts = {
    possiblePermutations: '43,252,003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
  };
  const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
  console.log(possiblePermutations); // '43,252,003,274,489,856,000'
  console.log(invented); // '1974'
  console.log(largestCube); // '17x17x17'
  /*
  The JavaScript destructuring assignment is a shorthand syntax that allows object properties to be extracted into specific variable values.
  
  It uses a pair of curly braces ({}) with property names on the left-hand side of an assignment to extract values from objects. The number of variables can be less than the total properties of an object.
  */


/*************************************************/
/********************Practice*********************/
/*************************************************/

/*
Q1: Which of the following is true about JavaScript getters and setters?
A1: They allow for additional actions to be performed before property access and assignment go into effect.
*/

/*
Q2: Select the correct option that creates a JavaScript object using the shorthand property name syntax.
A2:*/
const score  = 10;
const team2 = {score};
/*
Great job! Shorthand property names populate an object with a key matching the identifier and a value matching the identifier’s value.
*/
/*
Q3: Select the invalid JavaScript object key name.
A3: random key
*/

/*
Q4: What does the this keyword refer to in the .totalCost() function?
A4: The pizzaOrder Object.
*/
const pizzaOrder = {
  numPizzas: 3,
  pizzaPrice: 10,
  totalCost() {
    return this.numPizzas * this.pizzaPrice;  
  }
}

/*
Q5: Select the correct option that uses the JavaScript destructuring assignment to assign a property value of the given object to a variable.
*/
const summerSeason = {
  'duration': '6 months',
  'maxTemp': '42 Degrees C',
  'nextSeason': 'Autumn'  
};

const {duration} = summerSeason;

/*
Correct! JavaScript destructuring assignment is a shorthand syntax that allows object properties to be unpacked into specific variable values.
*/

/*
*********************************************
11. javascript getters and setters restricted
*********************************************
*/

const myCat2 = {
    _name: 'Dottie',
    get name() {
      return this._name;  
    },
    set name(newName) {
      this._name = newName;  
    }
  };
   
  // Reference invokes the getter
  console.log(myCat2.name);
   
  // Assignment invokes the setter
  myCat2.name = 'Yankee';
  /*
  JavaScript object properties are not private or protected. Since JavaScript objects are passed by reference, there is no way to fully prevent incorrect interactions with object properties.
  
  One way to implement more restricted interactions with object properties is to use getter and setter methods.
  
  Typically, the internal value is stored as a property with an identifier that matches the getter and setter method names, but begins with an underscore (_).
  */

/*
************************************************
12. Dot Notation for Accessing Object Properties
************************************************
*/
const apple = { 
  color: 'Green',
  price: {
    bulk: '$3/kg',
    smallQty: '$4/kg'
  }
};
console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'
/*
Properties of a JavaScript object can be accessed using the dot notation in this manner: object.propertyName. Nested properties of an object can be accessed by chaining key names in the correct order.
*/

/*
***********
13. Objects
***********

An object is a built-in data type for storing key-value pairs. Data inside objects are unordered, and the values can be of any type.
*/

/*
*************************************************
14. getters and setters intercept property access
*************************************************
*/
const myCat3 = {
  _name: 'Snickers',
  get name(){
    return this._name
  },
  set name(newName){
    //Verify that newName is a non-empty string before setting as name property
    if (typeof newName === 'string' && newName.length > 0){
      this._name = newName; 
    } else {
      console.log("ERROR: name must be a non-empty string"); 
    }
  }
}
/*
JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, and allow for additional actions to be performed before these changes go into effect.
*/

/*
****************************
15. javascript function this
****************************
*/
const restaurant2 = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object
    // and it's used to access its properties
    return this.seatCapacity - this.numCustomers;
  }
}
/*
 Every JavaScript function or method has a this context. For a function defined inside of an object, this will refer to that object itself. For a function defined outside of an object, this will refer to the global object (window in a browser, global in Node.js).
*/


/*************************************************/
/********************Practice*********************/
/*************************************************/

/*
Q1: Which of the following lines of code is a more restricted way of accessing an object property?

*/
const coat = {
  _pockets: 5,
  get pockets() {
    return this._pockets;
  },
  set pockets(newPockets){
    this._pockets = newPockets;
  }
};
// A1: Accessing Property
coat.pockets;
// Correct! This is using the getter method to access the pockets property of the coat object, which is a more restricted interaction.