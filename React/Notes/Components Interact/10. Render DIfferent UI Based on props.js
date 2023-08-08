/*
Render Different UI Based on props

You can do more with props than just display them. You can also use props to make decisions.
*/
function LoginMsg(props) {
  if (props.password === 'a-tough-password') {
    return <h2>Sign In Successful.</h2>
  } else {
    return <h2>Sign In Failed..</h2>
  }
}
 /*

In this example, we use the props passed in to make a decision rather than rendering the value to the screen.

If the password received is equal to 'a-tough-password', the resulting message in <h2></h2> will be different!

The passed-in password is not displayed in either case! The prop is used to decide what will be displayed. This is a common technique.

Instructions
1. Select Greeting.js.

Look in the function component definition. You can see that Greeting now expects two props: name and signedIn.

Notice that props.signedIn is not located inside of a return statement. This means that Greeting will never display the value of signedIn. But Greeting will use that value to decide which message to display.

Look at Greeting until you feel like you understand how it works, and then open App.js.

Give the Greeting component an additional attribute of signedIn with the value of false.

2. In App.js, change the value of signedIn to make <Greeting /> display a friendly greeting again.
*/

/* Greeting.js */
import React from 'react';

function Greeting(props) {
  if (props.signedIn == false) {
    return <h1>Please login.</h1>;
  } else {
    return (
      <>
        <h1>Welcome back, {props.name}!</h1>
        <article>
          Latest Movie: A Computer Bug's Life
        </article>
      </>
    )
  }
}

export default Greeting;

/* App */

import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>
        MovieFlix
      </h1>
      <Greeting name="Alison" signedIn={true}/>
    </div>
  );
}

export default App;