/*
**************************
1. Introduction to Classes
**************************
JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.

Take, for example, an object representing a dog named halley. This dog’s name (a key) is "Halley" (a value) and has a behavior (another key) of 0 (another value). We create the halley object below:
*/
let halley = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  },
};
/*
Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template for creating new Dog objects. For each new dog, you can provide a value for their name.

As you can see, classes are a great way to reduce duplicate code and debugging time.

After we lay the foundation for classes in the first few exercises, we will introduce inheritance and static methods — two features that will make your code more efficient and meaningful.
*/

/************************************/
/**************Practice**************/
/************************************/

/*
1.

In the next exercise, you will learn about classes in greater detail. Before you do, take a moment to study the class in main.js.

Spend some time identifying the similarities and differences between the Dog class in main.js and the code we used to create our halley object in the instructions above.
Checkpoint 2 Passed
2.

Copy the class instantiation, method call, and console.log() statements below into main.js.
*/
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
/*
What do you expect to see when you run this code?
*/

/*
***************
2. Constructor
***************
In the last exercise, you created a class called Dog, and used it to produce a Dog object.

Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
*/
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
/*
    1. Dog is the name of our class. By convention, we capitalize and PascalCase class names.
    2. JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
    3. This constructor() method accepts one argument, name.
    4. Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument.
    5. Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.

In the next exercise, you will learn how to create Dog instances.
*/

/************************************/
/**************Practice**************/
/************************************/

/*
1.
Create an empty class named Surgeon.
*/

class Surgeon {}
