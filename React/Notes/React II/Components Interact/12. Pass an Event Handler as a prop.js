/*
Pass an Event Handler as a prop

Good! You’ve defined a new method inside the Talker component. Now you’re ready to pass that function to another component.

You can pass a method in the exact same way that you pass any other data—using curly braces.

Instructions
1.Select Talker.js.

You want to pass talk() from here to <Button />. To pass a prop, you need to give <Button /> an attribute. Let’s start there.

Inside Talker‘s return statement, give <Button /> the following attribute:

foo="bar"
 

During the next two checkpoints, you’ll replace those values with the values that you need! Keep them as foo and "bar" for now.
Checkpoint 2 Passed

Give the <Button /> a new prop: foo="bar".

2. Your goal is to pass talk() from <Talker /> to <Button />.

What prop name should you choose?

It doesn’t really matter! prop attributes will work with just about any name, so long as the name follows the JavaScript identifier rules.

Since you’re going to pass a function named talk(), you might as well use talk as your name. Inside the return statement, change your attribute name from foo to talk.

3. What should your prop value be?

Your prop value should be the information that you want to pass! In this case, you want to pass the method named talk().

Inside the return statement, change your attribute’s value to talk. Remember to use curly braces to pass in talk as Javascript!
*/
/* Talker.js */
import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>;
}

export default Talker;

/* Button.js */
import React from 'react';
import Talker from './Talker'
function Button() {
    return (
      <button >
        Click me!
      </button>
    );
}

export default Button;