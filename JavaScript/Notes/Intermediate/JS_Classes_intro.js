/*
**************************
1. Introduction to Classes
**************************
JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.

Take, for example, an object representing a dog named halley. This dog’s name (a key) is "Halley" (a value) and has a behavior (another key) of 0 (another value). We create the halley object below:
*/
let halley3 = {
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

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

/*
***********
3.Instance
***********
Now, we’re ready to create class instances. An instance is an object that contains the property names and methods of a class, but with unique property values. Let’s look at our Dog class example.
*/
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}

const halley2 = new Dog('Halley'); // Create new Dog instance
console.log(halley2.name); // Log the name value saved to halley
// Output: 'Halley'
/*
Below our Dog class, we use the new keyword to create an instance of our Dog class. Let’s consider the line of code step-by-step.

    We create a new variable named halley that will store an instance of our Dog class.
    We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
    We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
    Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.

Now you know how to create instances. In the next exercise, you will learn how to add getters, setters, and methods.
*/

/************************************/
/**************Practice**************/
/************************************/
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

/*
**********
4. Methods
**********
At this point, we have a Dog class that spins up objects with name and behavior properties. Below, we will add getters and a method to bring our class to life.

Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
*/
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
/*
In the example above, we add getter methods for name and behavior. Notice, we also prepended our property names with underscores (_name and _behavior), which indicate these properties should not be accessed directly. Under the getters, we add a method named .incrementBehavior(). When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. Between each of our methods, we did not include commas.
*/

/************************************/
/**************Practice**************/
/************************************/
/*
1.

In the Surgeon constructor, prepend the name and department properties with an underscore (_).
Checkpoint 2 Passed
2.

Inside of the constructor(), add a property named _remainingVacationDays and set it equal to 20.
Checkpoint 3 Passed
3.

Under the constructor(), create a getter called name that returns the value saved to _name.
Checkpoint 4 Passed
4.

Under the name getter, create a getter called department that returns the value saved to _department.
Checkpoint 5 Passed
5.

Under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays.
Checkpoint 6 Passed
6.

Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.

Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.
*/
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
    return this._department;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    return this._remainingVacationDays - daysOff;
  }
}

const surgeonRomero2 = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson2 = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.takeVacationDays(5));
