/*
 1. Introduction to Objects
***************************
***********************
It’s time to learn more about the basic structure that permeates nearly every aspect of JavaScript programming: objects.

You’re probably already more comfortable with objects than you think, because JavaScript loves objects! Many components of the language are actually objects under the hood, and even the parts that aren’t— like strings or numbers— can still act like objects in some instances.

There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities. We can use JavaScript objects to model real-world things, like a basketball, or we can use objects to build the data structures that make the web possible.

At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice. You’ve been using the power of objects all along, but now it’s time to understand the mechanics of objects and start making your own!

*/

/*
2. Creating Object Literals
***************************
***************************

Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:
*/
let spaceship = {}; // spaceship is an empty object
/*
We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.

A key’s value can be of any data type in the language including functions or other objects.

We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:
*/
// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver',
};
/*
The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character. 
*/

/*
3. Accessing Properties
***********************
***********************
There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

You’ve used dot notation to access the properties and methods of built-in objects and data instances:
*/
'hello'.length; // Returns 5
/*
With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):
*/
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
/*
If we try to access a property that does not exist on that object, undefined will be returned.
*/
spaceship.favoriteIcecream; // Returns undefined
/*
Let’s get some more practice using dot notation on an object!
*/

/*
4. Bracket Notation
*******************
*******************
The second way to access a key’s value is by using bracket notation, [ ].

You’ve used bracket notation when indexing an array:
*/
['A', 'B', 'C'][0]; // Returns 'A'
/*
To use bracket notation to access an object’s property, we pass in the property name (key) as a string.

We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.
*/
let spaceship2 = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5,
};
spaceship2['Active Duty']; // Returns true
spaceship2['Fuel Type']; // Returns  'Turbo Fuel'
spaceship2['numCrew']; // Returns 5
spaceship2['!!!!!!!!!!!!!!!']; // Returns undefined
/*
With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:
*/
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
/*
If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter. v
*/

/*
5. Property Assignment
**********************
**********************

Once we’ve defined an object, we’re not stuck with all the properties we wrote. Objects are mutable meaning we can update them after we create them!

We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

diagram showing how an object followed by brackets ([]) with the property name as a string can be reassigned to a new value. This same idea applies for accessing a property using dot notation which has the object name, followed by a dot and the name of the property

One of two things can happen with property assignment:

    1. If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
    2. If there was no property with that name, a new property will be added to the object.

It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
*/
const spaceship3 = { type: 'shuttle' };
spaceship3 = { type: 'alien' }; // TypeError: Assignment to constant variable.
spaceship3.type = 'alien'; // Changes the value of the type property
spaceship3.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
/*
You can delete a property from an object with the delete operator.
*/
const spaceship4 = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe',
};

delete spaceship4.mission; // Removes the mission property

/***************************/
/**********Practice*********/
/**************************/
let spaceship5 = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.',
};

// Write your code below
spaceship5.color = 'glorious gold';

spaceship5.numEngines = 7;

delete spaceship5['Secret Mission'];

/*
6. Methods
**********
**********

When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global JavaScript object and .log() is a method on that object. Math is also a global JavaScript object and .floor() is a method on it.

We can include methods in our object literals by creating ordinary, colon-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.
*/
const alienShip = {
  invade: function () {
    console.log(
      'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
    );
  },
};
/*
With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
*/
const alienShip = {
  invade() {
    console.log(
      'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
    );
  },
};
/*
Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:
*/
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

/*
7. Nested Objects
*****************
*****************
In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!

In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique methods based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.
*/
const spaceship6 = {
  telescope: {
    yearBuilt: 2018,
    model: '91031-XLT',
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() {
        console.log('We got this!');
      },
    },
  },
  engine: {
    model: 'Nimbus2000',
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: 'HD',
    },
    'back-up': {
      battery: 'Lithium',
      terabytes: 50,
    },
  },
};
/*
We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.
*/
spaceship6.nanoelectronics['back-up'].battery; // Returns 'Lithium'
/*
In the preceding code:

    1. First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects.
    2. We accessed the back-up object by appending ['back-up'].
    3. The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'
*/
/***************************/
/**********Practice*********/
/**************************/

let spaceship7 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: '91031-XLT',
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() {
        console.log('We got this!');
      },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
    },
  },
  engine: {
    model: 'Nimbus2000',
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: 'HD',
    },
    'back-up': {
      battery: 'Lithium',
      terabytes: 50,
    },
  },
};

/*
  Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
  */
const capFave = spaceship7.crew.captain['favorite foods'][0];
/*
  Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it. 
  */
spaceship7.passengers = [{ hobbies: 'football' }];
/*
  Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)
  */
const firstPassenger = spaceship7.passengers[0];
