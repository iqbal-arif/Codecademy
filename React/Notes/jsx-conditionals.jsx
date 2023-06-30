/*
JSX Conditionals: If Statements That Do Work

How can you write a conditional if you can’t inject an if statement into JSX?

One option is to write an if statement and not inject it into JSX.

Look at if.js. Follow the if statement, all the way from line 8 down to line 20.

if.js works because the words if and else are not injected in between JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.

This is a common way to express conditionals in JSX.
Instructions
1.

Open app.js.

Starting on line 18, write an if/else statement, using if.js as a guide.

If coinToss() is equal to 'heads', execute img = <img src={pics.kitty} />.

Inside of the else clause, execute img = <img src={pics.doggy} />.

In other words, if the coin lands heads, then you should get a picture of a kitty, and if the coin lands tails, then you should get a picture of a doggy.
2.

At the bottom of the file, call root.render().

For root.render()‘s argument, pass in img.

Click Run. Refresh the browser several times. Does the picture change?

*/

/************/
/* if.js*/
/************/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

root.render(message);

/***********/
/*  app.js  */

import React from 'react';
import { createRoot } from 'react-dom/client';

const container2 = document.getElementById('app');
const root2 = createRoot(container2);
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:

// if/else statement begins here:

if (coinToss() === "heads") {
    img = <img src={pics.kitty} />
  } else {
    img = <img src={pics.doggy} />
  }
  
  root.render(img);