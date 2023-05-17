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
Instructions

Move on to the next exercise when you’re ready!


************************
2. Making a POST Request
************************
In the previous exercise, we walked through the boilerplate code for making a POST request using fetch() and .then(). In this exercise, we’re going to use that boilerplate code to shorten a URL using the Rebrandly URL Shortener API.

We will need a Rebrandly API key. To do this, read through the Rebrandly sign up guide to set up your API.

Keep in mind, while it’s ok to use your API key in these exercises, you should not share your key with anyone (not even to ask a question in the forums)! Also, if you reset the exercise at any point, you will have to paste in your API key again at the top.
Instructions
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

*/
