/*
1. Pass `props` to a Component

To take advantage of props, we need to pass information to a React component. In the previous exercise, we rendered an empty props object because we did not pass any props to our PropsDisplayer component.

How do we pass props? By giving the component an attribute:

<Greeting name="Jamel" />
 

Let’s say that you want to pass a component the message, "We're great!". Here’s how you can do it:

<SloganDisplay message="We're great!" />
 

As you can see, to pass information to a component, you need a name for the information that you want to pass.

In the above example, we used the name message. You can use any name you want.

If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:

<Greeting myInfo={["Astronaut", "Narek", "43"]} />
 

In this next example, we pass several pieces of information to <Greeting />. The values that aren’t strings are wrapped in curly braces:

<Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />
 

/-_-_-_-_-_-_-_-_-_/
/_-_Instructions_-_/
/-_-_-_-_-_-_-_-_-_/

1. Inside the App top-level component, find the line where we call the PropsDisplayer component.

Modify this line so that PropsDisplayer is called with a prop named myProp and the string value "Hello".

/*App*/
import React from "react";
import ReactDOM from "react-dom";

import PropsDisplayer from "./PropsDisplayer";

function App() {
  return <PropsDisplayer myProp="Hello" />;
}

export default App;

/*PropsDisplays.js*/
import React from 'react';

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