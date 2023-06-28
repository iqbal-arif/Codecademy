/*
JavaScript In Your JSX In Your JavaScript

So far, we’ve focused on writing JSX expressions. It’s similar to writing bits of HTML, but inside of a JavaScript file.

In this lesson, we’re going to add something new: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.
Instructions
1.

Starting on line 7, carefully write the following code.

root.render(<h1>2 + 3</h1>);

What do you think will appear in the browser?
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>{2 + 3}</h1>);