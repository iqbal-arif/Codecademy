/*
.map in JSX

The .map() array method comes up often in React. It’s good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then using .map() is often the most efficient way. It can look odd at first:

const strings = ['Home', 'Shop', 'About Me'];
 
const listItems = strings.map(string => <li>{string}</li>);
 
<ul>{listItems}</ul>

In the above example, we start out with an array of strings. We call .map() on this array of strings, and the .map() call returns a new array of <li>s.

On the last line of the example, note that {listItems} will evaluate to an array, because it’s the returned value of .map()! JSX <li>s don’t have to be in an array like this, but they can be.

// This is fine in JSX, not in an explicit array:
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
 
// This is also fine!
const liArray = [
  <li>item 1</li>, 
  <li>item 2</li>, 
  <li>item 3</li>
];
 
<ul>{liArray}</ul>

Instructions
1. You can see that a .map() call is partially set up.

On line 10, write an expression to complete the .map() call. This expression should consist of a <li> element containing the person variable.

Feel free to use the first example as a guide.
2. On line 14, call root.render().

For root.render()‘s argument, write a <ul> element. In between the <ul> tags, use curly braces to inject the peopleList variable.
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  <li>{person}</li>
);
// <ul>{peopleList}</ul>
// root.render goes here:
root.render(<ul>{peopleList}</ul>)