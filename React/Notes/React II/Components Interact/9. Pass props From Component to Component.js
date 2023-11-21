/*
. 1Pass props From Component To Component

You have learned how to pass a prop to a component:

<Greeting firstName="Esmerelda" />
 

You have also learned how to access and display a passed-in prop:

return <h1>{props.firstName}</h1>;
 

The most common use of props is to pass information to a component from a different component.

Props in React travel in a one-way direction, from the top to bottom, parent to child.

Let’s explore the parent-child relationship of passing props a bit further.
*/
function App() {
    return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}
 /*

In this example, App is the parent and Product is the child. App passes three props to Product (name, price, and rating), which can then be read inside the child component.

Props passed down are immutable, meaning they cannot be changed. If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.

Let’s practice this!
Instructions

1. Your mission is to pass a prop to Player from App.

Ensure that Player can accept props by changing the function definition to include props in the parameter.

2. Next, display the name of the song in the <h1></h1> tag by injecting the songName value from props.
3. Display the name of the artist in the <h2></h2> tag by injecting the artist value from props.
4. Since App is passing props to Player, App is the parent and Player is the child.

Inside of Player.js, export the component to be used in App.js.
5. Open App.js. Import the Player component in App.js.
6. In the App component, call the Player component with the attributes songName, giving it a string of your favorite song, and the artist of the song.
*/

/*Player.js*/
import React from "react";

function Player(props) {
  return (
    <>
      <h1>{props.songName}</h1>
      <h2>{props.artist}</h2>
    </>
  );
}

export default Player;


/* App.js*/
import React from 'react';
import Player from './Player'
function App() {
 return <Player songName="The Song" artist = "The Artist"/>
}

export default App;