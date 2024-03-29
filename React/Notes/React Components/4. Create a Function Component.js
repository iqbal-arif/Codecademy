/*
Create a Function Component

You’ve learned that a React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML and re-rendering it whenever some data changes.

It’s useful to think of components as smaller pieces of our interface. Combined, they are the building blocks that make up a React application. In a website, we can create a component for the search bar, another component for the navigation bar, and another component for the dashboard content itself.

Here’s another fact about components: we can use JavaScript functions to define a new React component. This is called a function component.

In the past, React components were defined using Javascript classes. But since the introduction of Hooks (something we’ll discuss later), function components have become the standard in modern React applications.

After we define our functional component, we can use it to create as many instances of that component as we want.

Let’s take a look at the example from the first exercise:
*/
import React from 'react';
 
function MyComponent() {
  return <h1>Hello, I'm a functional React Component!</h1>;
}
 
export default MyComponent;
/*
On the third line, a function is defined with the name MyComponent. Inside, the function returns a React element in JSX syntax:

return <h1>Hello, I'm a functional React Component!</h1>;

Combined, this makes a basic React functional component.

On the last line of the above code block, MyComponent is exported so it can be used later.

A lot of it is still unfamiliar, but you can understand more than you could before! Let’s keep going!

Instructions

1. In line 4 of App.js, declare a new function component. You can call this whatever you’d like.

Don’t put anything between the curly braces just yet!

*/
import React from 'react';

// Declare a new function component
function compFunction() {
}