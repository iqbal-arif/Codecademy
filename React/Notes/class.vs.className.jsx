/*
1. class vs className

This lesson will cover more advanced JSX. You’ll learn some powerful tricks and some common errors to avoid.

Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. The most frequent of these involves the word class.

In HTML, it’s common to use class as an attribute name:
/************************ */
const h1 = (<h1 class="big">Title</h1>);
/************************ */
/*
In JSX, you can’t use the word class! You have to use className instead:

/************************ */
const h2 = (<h2 className="big">Title</h2>);
/************************ */
/*
This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
Instructions

1. On line 7, declare a new constant named myDiv. Set myDiv equal to a JSX <div> element.

In between the <div></div> tags, write the text I AM A BIG DIV.

Give your <div> element the following attribute:

className="big"

Checkpoint 2 Passed

2. Underneath your <div> element, call root.render() with myDiv as an argument.

If your rendered <div> element has a class of "big", then it should look big in the browser!
*/

import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myDiv = (
  <div className = "big">I AM A BIG DIV</div>
);

root.render(myDiv);