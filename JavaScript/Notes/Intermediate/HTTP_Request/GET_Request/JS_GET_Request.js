/*
***********************
1. Making a GET Request
***********************
In the previous exercise, we went over the boilerplate code for a GET request using fetch() and .then(). In this exercise, we’re going to apply that code to access the Datamuse API and render the fetched information in the browser.

The Datamuse API is a word-finding query engine for developers. It can be used in apps to find words that match a given set of constraints that are likely in a given context.

If the request is successful, we’ll get back an array of words that sound like the word we typed into the input field.

We may get some errors as we complete each step. This is because sometimes we’ve split a single step into one or more steps to make it easier to follow. By the end, we should be getting no errors.

**********************************
***********Instructions***********
**********************************
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

*************************
2. Handling a GET Request
*************************
Great job making it this far!

In the previous exercise, we called the fetch() function to make a GET request to the Datamuse API endpoint. Then, you chained a .then() method and passed two callback functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

In this exercise, we will chain another .then() method, which will allow us to take the information that was returned with the promise and manipulate the webpage! Note that if there is an error returned in the first .then() method, the second .then() method will not execute.

**********************************
***********Instructions***********
**********************************
1.

At the end of the .then() method, chain another .then() method.

As the first argument of our second .then() method, pass an anonymous arrow callback function that takes jsonResponse as its single parameter.
2.

Inside the callback function we just created, call the renderRawResponse() function and pass in jsonResponse as its argument. Run the code.

In the input field, type in a word and click the submit button.

If all went well, we should see an array of words that the Datamuse API responded with!

Note that you can find the renderRawResponse() function declaration in public/helperFunctions.js.
3.

Let’s format our response from the Datamuse API to look presentable on the webpage. To do this, we will use the renderResponse() function that’s been defined in public/helperFunctions.js.

Comment out renderRawResponse(jsonResponse). Then below, call renderResponse(jsonResponse).

Run your code.

Try the webpage again with another word!

*/
