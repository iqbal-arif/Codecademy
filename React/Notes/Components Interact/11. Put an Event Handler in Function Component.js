/*
Put an Event Handler in a Function Component

You can, and often will, pass functions as props. It is especially common to pass event handler functions.

In the next exercise, we will pass an event handler function as a prop. However, we have to define an event handler before we can pass one anywhere. In this exercise, we will define an event handler function.

How do we define an event handler in React?

We define an event handler as a method on the function component!

Take a look at the Example.js file in the code editor. On lines 4 through 8, an event handler method is defined. On line 10, that event handler method is attached to an event (a click event, in this case).

Instructions

1. Select Talker.js.

Here we have a function named talk() that alerts ten thousand “blah”s to your screen. You will eventually use talk() as an event handler.

There’s a problem: talk is defined outside of the Talker component.

Rewrite talk(), so that it is a method defined inside the Talker component. Look at Example.js if you get stuck!

Once you’re done, delete the original talk() function before clicking Run.
*/

/* Talker.js */
import React from "react";
import Button from "./Button";

function Talker() {
  function talk() {
    let speech = "";
    for (let i = 0; i < 10000; i++) {
      speech += "blah ";
    }
    alert(speech);
  }
  return <Button />;
}

export default Talker;

/* App */

import React from 'react';
import ReactDOM from 'react-dom';

import Talker from './Talker';

function App() {
  return <Talker />;
}

export default App;