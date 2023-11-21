/*******************************************/
/*Use a Conditional in a Function Component*/
/*******************************************/
/*
How might you use a conditional statement inside of a function component?

Select TodaysPlan.js to see one way of doing it.

Notice that the if statement is located inside of the function component, but before the return statement.

Instructions
1.Select TonightsPlan.js. You’ll see a variable named fiftyFifty. fiftyFifty will equal true half the time and false half the time.

Begin by writing the skeleton of a new function component named TonightsPlan.

2.At the bottom of TonightsPlan.js, default export your component to see your progress as you work.

3.Create your first condition.

If fiftyFifty is true, then TonightsPlan should return this element:

<h1>Tonight I'm going out WOOO</h1>


4.Create your second condition.

If fiftyFifty is false, then TonightsPlan should return this element:

<h1>Tonight I'm going to bed WOOO</h1>

5.Run your code and determine what tonight’s plan is.

*/

/***TodaysPlan****/

import React from 'react';

function TodaysPlan() {
    let task;
    let apocalypse = false;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }
    return <h1>Today I am going to {task}!</h1>;
}

export default TodaysPlan;

/****TonightsPlan****/
import React from "react";

// New function component starts here:

function TonightsPlan() {
  const fiftyFifty = Math.random() < 0.5;
  let para;
  if (fiftyFifty) {
    return <h1>Tonight I'm going out WOOO</h1>;
  } else {
    return <h1>Tonight I'm going to bed WOOO</h1>;
  }
  // fiftyFifty
  //   ? (para = `Tonight I'm going out WOOO`)
  //   : (para = `Tonight I'm going to bed WOOO`);
  return;
}

export default TonightsPlan;
