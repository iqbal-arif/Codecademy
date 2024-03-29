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

Making an async GET Request

In the previous exercise, we walked through the boilerplate code for making a GET request using async and await.

In this exercise, we’re going to apply the code to get nouns that describe the inputted word using the Datamuse API.

**********************************
***********Instructions***********
**********************************
1.

Under the comment “Asynchronous function”, create a const variable called getSuggestions and set it to a new arrow function using the async keyword.

You’ll be coding inside the getSuggestions() function for the remainder of this exercise.
2.

Inside the getSuggestions() function, create a const variable named wordQuery and assign it inputField.value.
3.

Create another const variable called endpoint and assign it the value of a string that is url, queryParams, and wordQuery concatenated in that order.
4.

Add a try statement with an empty code block. Outside the code block for try, add a catch(error) statement with a code block that logs error to the console.
5.

Inside the try code block, create a const variable named response and assign it to await the result of calling fetch() with endpoint as the first argument. For this API to work within the Codecademy browser, add {cache: 'no-cache'} as the second argument.
6.

Below the response variable declaration from the previous step, create a conditional statement that checks if the ok property of the response evaluates to a truthy value.

Inside the code block of the conditional statement, await response.json() and save it to a new const variable called jsonResponse.
7.

Still inside the conditional statement, call the function renderResponse() and pass in jsonResponse. Then, run the code.

In the input field, type in a word and click the submit button on the web page.

Great, now we have an organized list of words from the GET request!

The declaration of the renderResponse() function can be found at public/helperFunctions.js.

*/
