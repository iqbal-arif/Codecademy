/*
Keys

When you make a list in JSX, sometimes your list will need to include something called keys:

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.

keys don’t do anything visible! React uses them internally to keep track of lists. If you don’t use keys when you’re supposed to, React might accidentally scramble your list items into the wrong order.

Not all lists need to have keys. A list needs keys if either of the following is true:

    The list items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
    A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

If neither of these conditions is true, then you don’t have to worry about keys. If you aren’t sure, then it never hurts to use them!
Instructions
1.

On line 10, give the <li> element a key attribute.

What should key's value be?

Each key must be a unique string that React can use to correctly pair each rendered element with its corresponding item in the array.

So, for each element in people, we must generate a unique value. How can you get .map() to produce unique keys?

First, add an i parameter to .map()'s inner function so that you can access each person’s unique index:

const peopleList = people.map((person, i) =>

Now, you can get a unique key on each loop by adding the following attribute to the <li> element:

key={'person_' + i}
*/

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  <li key={"person_"+i}>{person}</li>
);
// <ul>{peopleList}</ul>
// root.render goes here:
root.render(<ul>{peopleList}</ul>)