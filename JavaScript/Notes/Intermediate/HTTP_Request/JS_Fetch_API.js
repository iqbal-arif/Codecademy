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


************************
3. Making a GET Request
************************
In the previous exercise, we went over the boilerplate code for a GET request using fetch() and .then(). In this exercise, we’re going to apply that code to access the Datamuse API and render the fetched information in the browser.

The Datamuse API is a word-finding query engine for developers. It can be used in apps to find words that match a given set of constraints that are likely in a given context.

If the request is successful, we’ll get back an array of words that sound like the word we typed into the input field.

We may get some errors as we complete each step. This is because sometimes we’ve split a single step into one or more steps to make it easier to follow. By the end, we should be getting no errors.

*******************************
*********Instructions**********
*******************************
1.

At the top of main.js, create a const variable called url. Assign url to the following URL as a string:

https://api.datamuse.com/words?sl=

The ?sl= portion of the string will be the start of your query string, which will be used to pass parameters to the Datamuse API. The query string will be used by the engine to narrow the search to words that sound like your word.
2.

Inside the getSuggestions() function, create a const variable called wordQuery and assign it inputField.value.

We’ll need wordQuery to store the value of what is being typed into the input field.

Create another const variable called endpoint and assign it the value of a string that is url, and wordQuery concatenated in that order.

We will be working inside getSuggestions() function for the remainder of this exercise.
3.

Inside the getSuggestions() function, call the fetch() function and pass in endpoint as an argument. For this API to work within the Codecademy browser, add {cache: 'no-cache'} as the second argument.
4.

Chain a .then() method to the fetch() function. Pass an arrow callback function as its argument. The callback function should take response as its single parameter.
5.

Inside the success callback function, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

If so, return response.json().

By returning response.json(), the next .then() method chained to it will receive a Promise with JSON data.
6.

Below the condition’s code block, throw an Error stating 'Request failed!' to raise an exception if the request failed.
7.

Next, we will add a second argument to the .then() method to add another callback function to handle errors. Create an arrow function that takes one parameter, networkError.

In the code block of the arrow function, log networkError.message to the console.

Note that we will continue to add to this code in the next exercise to manipulate the webpage to see the word suggestions from Datamuse. The submit button will not return anything yet.
