/*
1. Access a Component's props

---

Every component has something called props.

A component’s props is an object. It holds information about that component.

You’ve seen this before, but you might not have realized it! Let’s take a look at the HTML button tag. There are several pieces of information we can pass to the button tag, such as the type of the button.

*/
<button type="submit" value="Submit"> Submit </button>
/*

In this example, we’ve passed two pieces of information to the button tag, a type and a value. Depending on what type attribute we give to the <button> element, it will treat the form differently. In the same way, we can pass information to our own components to specify how they behave!

Props serve the same purpose for components as arguments do for functions.

To access a component’s props object, you can reference the props object and the dot notation for its properties. Here’s an example:

*/
props.name
/*

This would retrieve the name property from the props object.

/-_-_-_-_-_-_-_-_-_/
/_-_Instructions_-_/
/-_-_-_-_-_-_-_-_-_/

1. Look at PropsDisplayer.js.

This component has props as a part of its parameter.

Inside the function body, there is a stringProps variable which contains the string data of props.

Let’s display it on the screen and see what’s inside by injecting the stringProps variable between the <h2></h2> tags.

2. Now that we’ve finished the PropsDisplayer component, let’s use it in our top-level component, App, and have it render to the screen.

Open up App.js. Take a look at the App component definition, and have it return the PropsDisplayer component.

As always, App is exported to index.js and rendered.

3. Click Run and think about what you see. If you’re seeing an empty object, you’re on the right track. The props object isn’t really empty. It has some properties that JSON.stringify() doesn’t detect. But even if you could see those properties, the props object still wouldn’t have much to show you right now.

Keep going and let’s see what else we need.
*/
/**PropsDisplays.js**/
import React from "react";

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{stringProps}</h2>
    </div>
  );
}

export default PropsDisplayer;

/**App**/
import React from "react";
import ReactDOM from "react-dom";

import PropsDisplayer from "./PropsDisplayer";

function App() {
  return <PropsDisplayer />;
}

export default App;
