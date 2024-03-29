/*
props.children

Every component’s props object has a property named children.

props.children will return everything in between a component’s opening and closing JSX tags.

So far, all of the components that you’ve seen have been self-closing tags, such as <MyFunctionComponent />. They don’t have to be! You could write <MyFunctionComponent></MyFunctionComponent>, and it would still work.

props.children would return everything in between <MyFunctionComponent> and </MyFunctionComponent>.

By using props.children, we can separate the outer component, MyFunctionComponent in this case, from the content, which makes it flexible and reusable.

Look at BigButton.js.

    In Example 1, <BigButton>‘s props.children would equal the text, “I am a child of BigButton.”
    In Example 2, <BigButton>‘s props.children would equal a <LilButton /> component.
    In Example 3, <BigButton>‘s props.children would equal undefined.

If a component has more than one child between its JSX tags, then props.children will return those children in an array. However, if a component has only one child, then props.children will return the single child, not wrapped in an array.

Instructions

1. Select App.js.

Notice that App renders two <List> instances, and that each <List> has at least one <li> child.

Now open List.js, and take a look at the List component.

Think about the fact that each List instance is going to be rendered with two JSX tags:

<List>  // opening tag
</List> // closing tag
 

…and that there will be at least one <li></li> child in between those tags:

<List>  // opening tag
  <li></li> // child
</List> // closing tag
 

Click Run.

2. You can see two list titles in the browser, but no list items! How can you make the list items appear?

Open List.js. In the return statement of the List component, in between <ul></ul> tags, add {props.children}.

3. Optional Task: Each <List></List> instance is passed a singular title: “Living Musician” and “Living Cat Musician,” respectively. Somehow, each <List></List> counts its list items and automatically adds an “s” to the end of its title if the count is greater than one. We could add a second piano cat, and the second list title would automatically pluralize.

See if you can figure out how the instances of the List component class are automatically pluralizing their titles!
*/
/* BigButton.js */
import React from 'react';
import LilButton  from './LilButton';

function BigButton(props) {
  console.log(props.children);
  return <button>I am a Big Button.</button>;
}

export default BigButton;

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton />

/* Index.js */

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);


/* App */

import React from 'react';
import List from './List';

function App() {
  return (
    <div>
      <List type='Living Musician'>
        <li>Sachiko M</li>
        <li>Harvey Sid Fisher</li>
      </List>
      <List type='Living Cat Musician'>
        <li>Nora the Piano Cat</li>
      </List>
    </div>
  );
}

export default App;

/* List.js */
import React from "react";

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array && props.children > 1) {
    titleText += "s";
  }
  return (
    <div>
      <h1>{titleText}</h1>
      <ul>{props.children}</ul>
    </div>
  );
}

export default List;

/* Index.html */

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
  padding-top: 15px;
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

h1 {
  margin-left: 4%;
  margin-right: 4%;
}

ul {
  list-style-type: none;
  padding: 0;
}

img {
  max-width: 90%;
  max-height: 390px;
  top: 5%;
  left: 5%;
}

/* button */
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
