/*
/**************************************************/
/*Event Listener and Event Handlers in a Component*/
/**************************************************/
/*
Your function components can include event handlers. With event handlers, we can run some code in response to interactions with the interface, such as clicking.
*/
function MyComponent(){
  function handleHover() {
    alert('Stop it.  Stop hovering.');
  }
  return <div onHover={handleHover}></div>;
}
/*
In the above example, the event handler is handleHover(). It is passed as a prop to the JSX element <div>. We’ll discuss more on props in a later lesson, but for now, understand that props are information passed to a JSX tag.

The logic for what should happen when the <div> is hovered on is contained inside the handleHover() function. The function is then passed to the <div> element.

Event handler functions are defined inside the function component and, by convention, start with the word “handle” followed by the type of event it is handling.

There’s a small quirk you should watch out for. Take a look at this line again:

return <div onHover={handleHover}></div>

The handleHover() function is passed without the parentheses we would typically see when calling a function. This is because passing it as handleHover indicates it should only be called once the event has happened. Passing it as handleHover() would trigger the function immediately, so be careful!
Instructions
1. In Button.js, find the <button></button> tags inside of the return statement.

Give this <button> element an onClick attribute. The attribute’s value should be the handleClick function.

*/
/***Button.js****/
import React from "react";

function SubmitButton() {
  function handleClick() {
    alert("Submission Successful.");
  }
  return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;


/***App.js****/
import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button'

function App() {
  return <Button />;
}

export default App;