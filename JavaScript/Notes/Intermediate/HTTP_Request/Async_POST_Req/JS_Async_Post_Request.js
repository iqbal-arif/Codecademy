/*
********************************
1. Intro to async POST Requests
********************************
Now that you’ve made an async GET request, let’s start getting familiar with the async POST request.

As we’ve seen before, a POST request requires more information. Take a look at the diagram to the right.

We still have the same structure of using try and catch as the async GET request we just learned about. But, in the fetch() call, we now have to include an additional argument that contains more information like method and body.

The method property value is set to 'POST' to specify the type of request we are making. Then we have to include a body property with the value of JSON.stringify({id: 200}).

**********************************
***********Instructions***********
**********************************

Move on to the next exercise when you’re ready!

*******************************
2. Making an async POST Request
*******************************
Since we’ve reviewed the boilerplate code for an async POST request, the next step is to incorporate that logic into making a real request.

In this exercise, we’ll need to retrieve our Rebrandly API key to access the Rebrandly API.

We will then pass in the endpoint and the request object into the fetch() method to make our POST request.

If you reset the exercise at any point, you will have to paste in your API key again at the top!

**********************************
***********Instructions***********
**********************************
1.

At the top of main.js, assign apiKey to your Rebrandly API key.
2.

The fetch() function should be inside the try{} statement, which should be inside the shortenUrl() function. In the fetch() function, pass in url as the first argument and an empty object as the second argument.

In that empty object you just created, add the following three properties:

    method with a value of 'POST'
    body with a value of data
    headers with a value of the object below:

{
  'Content-type': 'application/json',
  'apikey': apiKey
}

Run the code. Then paste in the URL again and click the shorten button.

Great job using Rebrandly to shorten your URL!

*/
