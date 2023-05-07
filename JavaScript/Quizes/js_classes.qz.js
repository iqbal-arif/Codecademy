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
