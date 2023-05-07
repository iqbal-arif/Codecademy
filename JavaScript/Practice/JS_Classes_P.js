/*
******************
1. Static Methods
******************
*/
class Dog {
  constructor(name) {
    this._name = name;
  }

  introduce() {
    console.log('This is ' + this._name + ' !');
  }

  // A static method
  static bark() {
    console.log('Woof!');
  }
}

const myDog = new Dog('Buster');
myDog.introduce();

// Calling the static method
Dog.bark();
/*
Within a JavaScript class, the static keyword defines a static method for a class. Static methods are not called on individual instances of the class, but are called on the class itself. Therefore, they tend to be general (utility) methods.

*/

/*
*********
2. Class
*********
*/
class Song {
  constructor() {
    this.title;
    this.author;
  }

  play() {
    console.log('Song playing!');
  }
}

const mySong = new Song();
mySong.play();
/*
JavaScript supports the concept of classes as a syntax for creating objects. Classes specify the shared properties and methods that objects produced from the class will have.

When an object is created based on the class, the new object is referred to as an instance of the class. New instances are created using the new keyword.

The code sample shows a class that represents a Song. A new object called mySong is created underneath and the .play() method on the class is called. The result would be the text Song playing! printed in the console.
*/
