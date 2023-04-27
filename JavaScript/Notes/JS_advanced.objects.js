/*
*******************
1. The this Keyword
*******************
Objects are collections of related data and functionality. We store that functionality in methods on our objects:
*/
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
};
/*
In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.
*/
goat.makeSound(); // Prints baaa
/*
Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType?
*/
const goat1 = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  },
};
goat1.diet();
// Output will be "ReferenceError: dietType is not defined"
/*
That’s strange, why is dietType not defined even though it’s a property of goat? That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.

Here’s where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :
*/
const goat2 = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  },
};

goat2.diet();
// Output: herbivore
/*
The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation. 
*/
/*****Drill*****/
/*
1.

Let’s create a new object to practice using this.

In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

2.

Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:

I am MODEL and my current energy level is ENERGYLEVEL.  

Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!

3.

Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.

*/
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo());

/*
***************************
2. Arrow Functions and this
***************************
We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the this keyword in a method then the value of this is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods. Take a look at the example below:
*/
const goat3 = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  },
};

goat3.diet(); // Prints undefined
/*
In the comment, you can see that goat.diet() would log undefined. So what happened? Notice that the .diet() method is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

To read more about either arrow functions or the global object check out the MDN documentation of the global object and arrow functions.
*/

/*
***********
3. Privacy
***********

Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.
*/
const bankAccount = {
  _amount: 1000,
};
/*
In the example above, the _amount is not intended to be directly manipulated.

Even so, it is still possible to reassign _amount:
*/
bankAccount._amount = 1000000;
/*
In later exercises, we’ll cover the use of methods called getters and setters. Both methods are used to respect the intention of properties prepended, or began, with _. Getters can return the value of internal properties and setters can safely reassign property values. For now, let’s see what happens if we can change properties that don’t have setters or getters.


*/
const robot2 = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot2._energyLevel = 'high';

robot2.recharge(); //Recharged! Energy is currently at high30%.

/*
Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.

What will happen now that _energyLevel isn’t a number?

Call .recharge() on robot to find out.

Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties.

*/
