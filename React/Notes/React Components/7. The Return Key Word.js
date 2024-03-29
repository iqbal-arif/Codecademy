/*
The Return Keyword in Functional Components

When we define a functional component, we essentially define a factory that can build the appropriate combination of elements every time we reference its name. It builds it by consulting a set of instructions that you must provide.

If you’re thinking, “That sounds just like what a regular Javascript function is for”, then you’re right! Functional components can be thought of in a very similar vein to regular Javascript functions, except that their job is to assemble a portion of the interface based on instructions given!

Let’s talk a bit more about these instructions.

For starters, these instructions should take the form of a function declaration body. That means that they will be delimited by curly braces, like this:

function Button() {
  // Instructions go here, between the curly braces.
}

Our instructions can include a combination of markup, CSS, and JavaScript to produce the desired result. The one thing we must always include is a return statement.

The function is expected to produce JSX code that can be used to render something onto the browser screen. Thus, when we define functional components, we must return a JSX element.
*/
function BackButton() {
  return <button>Back To Home</button>;
}
/*
Of course, this doesn’t quite make <button>Back To Home</button> render onto the browser screen yet. We’ve only defined our component.

Let’s keep going so we can see how to render it and why the return statement was necessary!
Instructions
1.

Time to complete the component we’ve been working on.

In the body of your component definition, write return.
Checkpoint 2 Passed
2.

Now let’s fill out that line.

Have the return statement return the JSX expression <h1>Hello world</h1>.

*/
import React from "react";

function MyComponent() {
  return <h1>Hello world</h1>;
}
