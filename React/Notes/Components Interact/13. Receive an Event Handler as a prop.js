/*

Receive an Event Handler as a prop

Great! You just passed a function from <Talker /> to <Button />.

Take a look at Button.js in the code editor. Notice that Button returns a <button> element.

If a user clicks on this <button> element, you want your passed-in talk() function to get called. This means that you need to attach talk() to the <button> element as an event handler.

How do you do that? In the same way that you attach any event handler to a JSX element: you give that JSX element a special attribute. The attribute’s name should be an event name like onClick or onHover. The attribute’s value should be the event handler that you want to attach.

Instructions
1. In Button.js, add an onClick attribute to the <button> element in the return statement.

Remember that you named your prop talk previously. Use the talk property of props as the value of the onClick attribute.

Click Run. Once the browser refreshes, click on the button.
*/
/* index.html */
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);


/* App.js */
import React from 'react';
import ReactDOM from 'react-dom';

import Talker from './Talker';

function App() {
  return <Talker />;
}

export default App;

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

import React from "react";

function Button(props) {
  return <button onClick={props.talk}>Click me!</button>;
}

export default Button;
