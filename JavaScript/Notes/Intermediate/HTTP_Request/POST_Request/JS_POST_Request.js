/*
*************************************
1. Intro to POST Requests using Fetch
*************************************
In the previous exercise, we successfully wrote a GET request using the fetch API and handled Promises to get word suggestions from Datamuse. Give yourself a pat on the back (or two to treat yourself)!

Now, we’re going to learn how to use fetch() to construct POST requests!

Take a look at the diagram to the right. It has the boilerplate code for a POST request using fetch().

Notice that the fetch() call takes two arguments: an endpoint and an object that contains information needed for the POST request.

The object passed to the fetch() function as its second argument contains two properties: method, with a value of 'POST', and body, with a value of JSON.stringify({id: '200'});. This second argument determines that this request is a POST request and what information will be sent to the API.

A successful POST request will return a response body, which will vary depending on how the API is set up.

The rest of the request is identical to the GET request. A .then() method is chained to the fetch() function to check and return the response as well as throw an exception when a network error is encountered. A second .then() method is added on so that we can use the response however we may choose.

**********************************
***********Instructions***********
**********************************

Move on to the next exercise when you’re ready!


************************
2. Making a POST Request
************************
In the previous exercise, we walked through the boilerplate code for making a POST request using fetch() and .then(). In this exercise, we’re going to use that boilerplate code to shorten a URL using the Rebrandly URL Shortener API.

We will need a Rebrandly API key. To do this, read through the Rebrandly sign up guide to set up your API.

Keep in mind, while it’s ok to use your API key in these exercises, you should not share your key with anyone (not even to ask a question in the forums)! Also, if you reset the exercise at any point, you will have to paste in your API key again at the top.

**********************************
***********Instructions***********
**********************************
1.

Set the value of the apiKey variable to your Rebrandly API key as a string.

If a correct key is not assigned, proper results will not be seen in the steps afterwards.
2.

We will make our POST request inside the shortenUrl() function. Inside the code block of shortenUrl(), create a const variable named urlToShorten and assign it inputField.value. urlToShorten will keep the value of what is being typed into the input field.

Note that we will be working inside shortenUrl() for the remainder of this exercise.
3.

Underneath the urlToShorten declaration, create another const variable named data and assign it to the stringified version of {destination: urlToShorten}. We can use the JSON.stringify() method to do this.

The data variable will be used to send the information, which needs to be in string format, to the request body.
4.

Below our data variable declaration, call the fetch() function. Pass url as its first argument and an empty object as its second argument.
5.

Now it’s time to add some properties to the empty object that you just created. Add a property with the key method and the value 'POST'.
6.

In the same object, add another property. The key for this property is headers and the value will be the following object:

{
  'Content-type': 'application/json',
  'apikey': apiKey
}

We will use this to connect to the API.
7.

In that same object that has the properties method and headers, add another property. The key is named body and the value will be data.

We’ve now created an object containing all the information we need for our POST request!

**************************
3. Handling a POST Request
**************************
In the previous exercise, we set up the POST request by providing the endpoint and the object containing all the necessary information. In this exercise, we’ll handle the response.

The request returns a Promise which will either be resolved or rejected. If the promise resolves, we can check and return that response. We will chain another .then() method and handle the returned JSON object and display the information to our webpage.

Let’s implement this knowledge into our code!

Remember that if you reset the exercise at any point, you will have to paste in your API key again at the top!

**********************************
***********Instructions***********
**********************************
1.

Chain a .then() method at the end of the fetch() function we wrote in the previous exercise. As its first argument, pass an arrow function as a callback that takes response as its single parameter.
2.

Inside the callback function of the .then() method, use a conditional statement to check the value of the ok property of response. If it evaluates to a truthy value, return response.json().

Run the code.
3.

Below the curly braces of the conditional statement, throw a new Error in case response.ok is falsy.

The error message should be 'Request failed!'.
4.

As the second argument of the .then() method, add another arrow callback function that takes networkError as a single parameter.

Log the networkError.message inside of the callback function.

By adding this second callback, you’re safeguarding yourself in the rare event that the network returns an error!
5.

Chain another .then() method to the end of the previous .then() method.
6.

Pass in an anonymous arrow function as an argument for our second .then(). This callback function will take jsonResponse as its single parameter.

Inside the callback function, call renderResponse() and pass in jsonResponse.

The renderResponse() helper function can be viewed at public/helperFunctions.js.

Run the code.

Put in any URL in the text field, and then click the shorten button on the webpage. Make sure you include the entire link, including 'http://' or 'https://'.

*/
