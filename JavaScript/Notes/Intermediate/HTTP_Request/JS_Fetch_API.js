/*
************************************
1. Introduction to Requests with ES6
************************************
Have you ever wondered what happens after you click a “Submit” button on a web page? For instance, if you are submitting information, where does the information go? How is the information processed? The answer to the previous questions revolves around HTTP requests.

There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE. In this lesson, we’ll cover GET and POST requests.

With a GET request, we’re retrieving, or getting, information from some source (usually a website). For a POST request, we’re posting information to a source that will process the information and send it back.

JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We will go into event loops in more detail in the Concurrency Model and Event Loop in JavaScript article.

To make asynchronous event handling easier, promises were introduced in ES6 JavaScript.

In this lesson, we will explain how to use fetch() and promises to handle requests. Then, we will simplify requests using async and await.
Instructions

Click the button on the web page to see what the code in main.js does. Notice the usage of fetch(), async, and await.

We’ll also be working with JSON, so study the structure of the response on the web page!

Go to the next exercise to learn more about requests.

************************************
2. Intro to GET Requests using Fetch
************************************
The first type of requests we’re going to tackle is GET requests using fetch().

The fetch() function:

   1. Creates a request object that contains relevant information that an API needs.
   2. Sends that request object to the API endpoint provided.
   3. Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

Let’s walk through the boilerplate code to the right for using fetch() to create a GET request step by step.

First, call the fetch() function and pass it a URL as a string for the first argument, determining the endpoint of the request.
*/
fetch('https://api-to-call.com/endpoint')
/*
The.then() method is chained at the end of the fetch() function and in its first argument, the response of the GET request is passed to the callback arrow function. The .then() method will fire only after the promise status of fetch() has been resolved.

Inside the callback function, the ok property of the response object returns a Boolean value. If there are no errors, response.ok will be true and the code will return response.json().

If response.ok is a falsy value, our code will throw an error.
*/
throw new Error('Request failed!');
/*
A second argument passed to .then() will be another arrow function that will be triggered when the promise is rejected. It takes a single parameter, networkError. This object logs the networkError if we could not reach the endpoint at all (e.g., the server is down).

A second .then() method will run after the previous .then() method has finished running without error. It takes jsonResponse, which contains the returned response.json() object from the previous .then() method, as its parameter and can now be handled, however we may choose.

*******************************
*********Instructions**********
*******************************
In the next exercise, we will apply what we have learned to making a GET request using fetch() and .then(). Move on to the next exercise when you’re ready!
