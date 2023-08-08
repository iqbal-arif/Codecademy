/*
handleEvent, onEvent, and props.onEvent

Let’s talk about naming things.

When you pass an event handler as a prop, as you just did, there are two names that you have to choose. Both naming choices occur in the parent component, the component that defines the event handler and passes it.

The first name that you have to choose is the name of the event handler itself.

Look at Talker.js, lines 5 through 11. This is our event handler. We chose to name it talk.

The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as the attribute name.

For our prop name, we also chose talk, as shown on line 12:

return <Button talk={talk} />;
 

These two names can be whatever we want. However, there is a naming convention that is commonly used.

Here’s how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was “click”. If you are listening for a “click” event, then you name your event handler handleClick. If you are listening for a “hover” event, then you name your event handler handleHover:

function myClass() {
  function handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
 

Your prop name should be the word on, plus your event type. If you are listening for a “click” event, then you name your prop onClick. If you are listening for a “hover” event, then you name your prop onHover:

function myClass(){
  function handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }
   return <Child onHover={handleHover} />;
}
 

Instructions

1. In Talker.js, change the event handler’s name from talk to handleClick.
2. In Talker‘s return statement, change the prop‘s name from talk to onClick.

Change the prop’s value to the newly named event handler, handleClick.
3. Select Button.js.

Change Button‘s return statement so that it expects a prop named onClick instead of talk.
4. One major source of confusion is the fact that names like onClick have special meanings, but this is only if they’re used on HTML-like elements.

Look at Button.js. When you give the <button> element an attribute named onClick, then this onClick attribute has a special purpose. As you’ve learned, this special onClick attribute creates an event listener that listens for clicks on the <button> element:

// In Button.js: The onClick attribute creates an event listener:
<button onClick={props.onClick}>
  Click me!
</button>
 

Now, look at Talker.js. Here, the onClick attribute you gave to <Button /> does not create an event listener—it’s just a name of an attribute:

// In Talker.js: The onClick attribute is just a normal attribute name.
<Button onClick={handleClick} />
 

The reason for this is that <Button /> is not an HTML-like JSX element; it’s a component instance.

Names like onClick only create event listeners if they’re used on HTML-like JSX elements. Otherwise, they’re just ordinary prop names.

Run your program to ensure your button is working as intended.
