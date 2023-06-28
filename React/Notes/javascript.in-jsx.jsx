/*
1. JavaScript In Your JSX In Your JavaScript

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

/*
2. 20 Digits of Pi in JSX

You can now inject regular JavaScript into JSX expressions! This will be extremely useful.

In the code editor, you can see a JSX expression that displays the first twenty digits of pi.

Study the expression and notice the following:

    1. The code is written in a JavaScript file. By default, it will all be treated as regular JavaScript.
    2. Find <div> on line 5. From there, up through </div>, the code will be treated as JSX.
    3. Find Math. From there, up through (20), the code will be treated as regular JavaScript again.
    4. The curly braces themselves won’t be treated as JSX or as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

*/
import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);

/*
Instructions:
1. Open app.js.

Declare a new variable named math. Set math equal to a JSX <h1> element.

Put the following expression inside of the <h1>:

2 + 3 = 2 + 3

2. At the bottom of the file, call root.render().

For root.render()‘s argument, pass in math.
Checkpoint 3 Passed

3. As you probably expected, the equation was displayed as a string.

Insert a pair of curly braces inside the <h1></h1> tags, so that the browser displays 2 + 3 = 5.
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container2 = document.getElementById('app');
const root2 = createRoot(container2);
// Write code here:
const math = (<h1>2+3={2+3}</h1>);

root2.render(math);