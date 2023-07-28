/*
Review

---

In this lesson, you’ve learned about a foundational React concept: components.

Before you go, here’s a recap:

    1. React applications are made up of components.
    2. Components are responsible for rendering pieces of the user interface.
    3. To create components and render them, react and reactDOM must be imported.
    4. React components can be defined with Javascript functions to make function components.
    5. Function component names must start with a capitalized letter, and Pascal case is the adopted naming convention.
    6. Function components must return some React elements in JSX syntax.
    7. React components can be exported and imported from file to file.
    8. A React component can be used by calling the component name in an HTML-like self-closing tag syntax.
    9. Rendering a React component requires using .createRoot() to specify a root container and calling the .render() method on it.

Phew! That was a lot, but components are at the core of React and they’re one of the reasons why React is such a powerful tool!
*/

/*
App.js.
*/
import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}

export default MyComponent;

/*
index.js
*/
import React from "react";
import ReactDOM from "react-dom/client";

import MyComponent from "./App";
import TextComponent from "./text";

ReactDOM.createRoot(document.getElementById("app")).render(
  <div>
    <MyComponent />
    <TextComponent />
  </div>
);

/*
index.html
*/
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

/*
text.js
*/

function TextComponent(){
  return <p>This is my first React Component Writing</p>;
}

export default TextComponent;

