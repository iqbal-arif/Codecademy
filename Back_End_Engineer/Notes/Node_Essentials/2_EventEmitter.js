/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. EventEmitter ***/

/*
Node provides an EventEmitter class which we can access by requiring in the events core module:
*/
// Require in the 'events' core module
let events = require('events');

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
/*
    1_ .on() : Each event emitter instance has an .on() method which assigns a listener callback function to a named event.
        The .on() method takes as its first argument the name of the event as a string and, as its second argument, the listener callback function.

    1_ .emit() : Each event emitter instance also has an .emit() method which announces a named event has occurred. The .emit() method takes as its first argument the name of the event as a string and, as its second argument, the data that should be passed into the listener callback function.
Example: 
*/
let newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};

// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener);

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad'); //newUserListener will be invoked with 'Lily Pad'
