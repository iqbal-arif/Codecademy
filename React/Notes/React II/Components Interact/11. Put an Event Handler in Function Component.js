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

/* index.js */
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);


/* index.html */

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <main id="app">
  </main>
	<script src="https://content.codecademy.com/courses/React/react-18-course-bundle.min.js"></script>
  <script src="/index.compiled.js"></script>
</body>
</html>

/* style.css */
html, body {
  margin: 0;
  height: 100%;
}

body {
  background-color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}

#app {
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 10px;
}

#app div {
  width: 100%;
}

#app div div {
  height: 100%;
}

#app div div div {
  position: relative;
  height: auto;
}

h1, h2 {
  margin-left: 5%;
  margin-right: 5%;
}

ul {
  list-style-type: none;
  padding: 0;
}

label {
  display: block;
  margin: 20px;
  font-size: 30px;
  font-weight: bold;
}

nav a {
  margin:12px;
  text-transform: uppercase;
  font-size: 10px;
}

button {
  -webkit-transition-duration: 0.1s; /* Safari */
  transition-duration: 0.1s;
  background-color: #F4595B;
  border-radius: 8px;
  border-bottom: 4px solid #C24648;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Oxygen', sans-serif;
  letter-spacing: 2px;
}

button:hover {
  background-color: #FF7375;
  border: none;
  border-radius: 8px;
  border-bottom: 4px solid #C24648;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Oxygen', sans-serif;
  letter-spacing: 2px;
}

button:active {
  background-color: #C24648;
  border: none;
  border-radius: 8px;
  border-bottom: 4px solid #C24648;
  color: #CCC;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Oxygen', sans-serif;
  letter-spacing: 2px;
}
