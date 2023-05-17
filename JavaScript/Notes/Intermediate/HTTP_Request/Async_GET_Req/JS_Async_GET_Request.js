/*
******************************
1. Intro to async GET Requests
******************************
In the following exercises, we’re going to take what we’ve learned about chaining Promises and make it simpler using functionality introduced in ES8: async and await. You read that right, you did the hard part already. Now it’s time to make it easier.

The structure for this request will be slightly different. We will use the new keywords async and await, as well as the try and catch statements.

Take a look at the diagram on the right.

Here are some key points to keep in mind as we walk through the code:

    1. The async keyword is used to declare an async function that returns a promise.
    2. The await keyword can only be used within an async function. await suspends the program while waiting for a promise to resolve.
    3. In a try...catch statement, code in the try block will be run and in the event of an exception, the code in the catch statement will run.

Study the async getData() function to the right to see how the request can be written using async and await.

*/
