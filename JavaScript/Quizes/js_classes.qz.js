/*
Q1: How would you call the .randomBorough() method in the example below?
*/
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12;
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }

  static randomBorough() {
    const myBoroughs = [
      'Manhattan',
      'Brooklyn',
      'Queens',
      'The Bronx',
      'Staten Island',
    ];
    return myBoroughs[Math.floor(Math.random() * 5)];
  }
}

const myApartment = new Apartment('1234 W 54th', 22000, 3);

console.log(Apartment.randomBorough());
/*
A1: console.log(Apartment.randomBorough());
 
Nice job! You must access static methods from the class. You cannot call them on an instance of the class.
*/

/*
Q2: Define a class named Shape, and store a new instance of that class in a variable named triangle.
*/

class Shape {
  constructor(type) {
    this._type = type;
  }
}

const triangle = new Shape('triangle');

/*
Q3: Complete the Javascript object and class by using the appropriate syntax for completing and separating their properties and methods.
*/

let myDog = {
  _name: 'Spot',

  _age: 5,

  _breed: 'Beagle',

  get name() {
    return this._name;
  },

  bark() {
    console.log('Woof!');
  },
};

class Dog {
  constructor(name, age, breed) {
    this._name = name;

    this._age = age;

    this._breed = breed;
  }
  get name() {
    return this._name;
  }

  bark() {
    console.log('Woof!');
  }
}

/*
Q4: Create a child class of the Rectangle class named Square, and call the parent class’s constructor inside the Square class’s constructor. 
*/

class Rectangle {
  constructor(length, width) {
    this._length = length;
    this._width = width;
  }
  getArea() {
    return this._length * this._width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

/*
Q5: Inside the Car class, complete the constructor method so that it assigns its 3 parameters to properties of the class instance. 
*/

class Car {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }
}

/*
Q6: What is the purpose of the constructor() method?
A6: The constructor() is called when yo create a new instance of a class. It sets the property values for each instance.
Nice work! If the class inherits properties from a parent class, then it will call super to pass arguments to the parent’s constructor().
*/

/*
Q7: Define a class named Employee.

Your class should have a constructor function that takes in an employee’s name and hourlyWage and sets them as properties with those names. An hoursWorked property should be initialized to 0.

The Employee class should have a logHours() function that takes in a number of hours worked and increments the hoursWorked property by that amount.

The Employee class should have a generatePaycheck() function that logs to the console the hoursWorked multiplied by the hourlyWage. It should then set the hoursWorked to 0.
*/
class Employee {
  constructor(name, hourlyWage) {
    this._name = name;
    this._hourlyWage = hourlyWage;
    this._hoursWorked = 0;
  }
  get name() {
    return this._name;
  }

  get hoursWorked() {
    return this._hoursWorked;
  }

  get hourlyWage() {
    return this._hourlyWage;
  }

  logHours(hoursWorked) {
    return (this._hoursWorked = hoursWorked);
  }
  generatePaycheck() {
    console.log(this._hoursWorked * this._hourlyWage);
    this._hoursWorked = 0;
  }
}

const hanes = new Employee('hanes', 65);

console.log(hanes.name);

console.log(hanes._hoursWorked);

console.log(hanes.hourlyWage);

console.log(hanes.logHours(10));

hanes.generatePaycheck();
console.log(hanes);

/*
Q8: Declare a class Book that has a constructor setting the _title, _author, and _year properties to the constructor’s parameter values. Then, add a getter and setter method for the _title property named title. 
*/
class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }
}

/*
Q9: When you create a subclass using the extends keyword, what will the class inherit from its parent?
A9: The subclass inherits all of the parent's getters, setters, and methods. You can also use the super keyword to set properties in the parent class.

Nice! Although the subclass automatically inherits the parent methods, you need to use the super keyword to set the parent properties
*/

/*
Q10: Which of the following is the subclass in the example below?
*/
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12;
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }
}

/*
A10: Apartment
Nice work! The Apartment class extends the methods and properties in the RentalUnit class.
*/

/*
Q11: Which line of code is incorrect?
*/
class Calculator {
  constructor(model) {
    this._model = model;
  }

  static add(x, y) {
    return x + y;
  }
}

const myCalculator = new Calculator('basic');
myCalculator.add(2, 5);

/*
A11: myCalculator.add(2, 5);
Well done! .add() is a static method and is called on the class itself, not an instance of the class.
*/

/*
Q12: Spot the error in this code.
*/
class Animal {
  constructor(name, weight, family) {
    this._name = name;
    this._weight = weight;
    this._family = family;
    this._canMove = true;
  },
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  },
  get weight() {
    return this._weight;  
  }
}
/*
A12: In JavaScript class, commas between methods must be omitted.
*/

/*
Q13: Which of the following will create an instance of the RentalUnit class, and save it to a variable called myRental?
*/
class RentalUnit {
  constructor(address, cost) {
    this._address = address;
    this._cost = cost;
  }
 
  get address() {
    return this._address;
  }
 
  get cost() {
    return this._cost;
  }
 
  calculateMonthly() {
    return this.cost / 12; 
  }
}

const myRental = new RentalUnit("111 33rd St NE", 19000)
/*
A13: const myRental = new RentalUnit("111 33rd St NE", 19000)
*/


/*
Q14: Which of the following is a method of the RentalUnit class?
*/
class RentalUnit {
  constructor(address, cost) {
    this._address = address;
    this._cost = cost;
  }
 
  get address() {
    return this._address;
  }
 
  get cost() {
    return this._cost;
  }
 
  calculateMonthly() {
    return this.cost / 12; 
  }
}
/*
A14: calculateMonthly()
Nice! Including .calculateMonthly(), there are technically four methods in this example: the constructor(), the two getters, and .calculateMonthly(). 
*/