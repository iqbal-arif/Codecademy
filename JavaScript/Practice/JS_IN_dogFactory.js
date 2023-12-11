/*

1. dogFactory()

Write a function, dogFactory(). It should:

    have 3 parameters: name, breed, and weight (in that order)
    expect name and breed to be strings
    expect weight to be a number
    return an object
    have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
*/
// Write your code here:

class DogFactory {
  constructor(name, breed, weight) {
    (this.name = name), (this.breed = breed), (this.weight = weight);
  }
  get newName() {
    return (this._name = this.name);
  }
  get newBreed() {
    return (this._breed = this.breed);
  }
  get newWeight() {
    return (this._weight = this.weight);
  }
}

const dogFactory = new DogFactory('Joe', 'Pug', 27);
console.log(dogFactory);

console.log(dogFactory.newName);
