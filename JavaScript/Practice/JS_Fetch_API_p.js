/*
***********************
1. The fetch() Function
***********************
*/
fetch('url').then(
  (response) => {
    console.log(response);
  },
  (rejection) => {
    console.error(rejection.message);
  }
);
/*
The JavaScript Fetch API is used to write HTTP requests using Promises. The main fetch() function accepts a URL parameter and returns a promise that resolves to a response object or rejects with an error message if a network error occurs.

The example code begins by calling the fetch() function. Then a then() method is chained to the end of the fetch(). It ends with the response callback to handle success and the rejection callback to handle failure.

*****************************
2. Customizing Fetch Requests
*****************************
*/
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({ id: '200' }),
})
  .then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },
    (networkError) => {
      console.log(networkError.message);
    }
  )
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
/*
The fetch() function accepts an optional second argument, an options object, used to customize the request. This can be used to change the request type, headers, specify a request body, and much more.

In the example code below, the fetch() function as a second argument—an object containing options for the fetch request specifying the method and the body.

********************
3. HTTP POST Request
********************
HTTP POST requests are made with the intention of sending new information to the source (server) that will receive it.

For a POST request, the new information is stored in the body of the request.

*******************
4. HTTP GET Request
*******************
HTTP GET requests are made with the intention of retrieving information or data from a source (server) over the web.

GET requests have no body, so the information that the source requires, in order to return the proper response, must be included in the request URL path or query string.

*******************************
5. Using async…await with Fetch
*******************************
*/
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, { cache: 'no-cache' });
    if (response.ok) {
      const jsonResponse = await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};
/*
The async…await syntax is used with the Fetch API to handle promises.

In the example code, the async keyword is used to make the getSuggestions() function an async function. This means that the function will return a promise. The await keyword used before the fetch() call makes the code wait until the promise is resolved.

*******************************
6. JSON-Formatted Response Body
*******************************
*/
fetch('url')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
/*
The .json() method will resolve a returned promise to a JSON object, parsing the body text as JSON.

In the example code, the .json() method is used on the response object which returns a promise to a JSON-formatted response body as jsonResponse.
 



**********************************
***********Instructions***********
**********************************

Q1: Choose the answer that best describes the below code block.
*/
fetch('url').then(
  (response) => {
    console.log(response);
  },
  (rejection) => {
    console.error(rejection.message);
  }
);
/*
This code shows a basic fetch() request that contains a success and failure promise handler function.

Q2: Complete the code to construct a Fetch API that specifies the following properties: method, headers, and body.
*/
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      apikey: apiKey,
    },
    body: data,
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      renderResponse(jsonResponse);
    });
};

/*
Q3: What is one major difference between GET and POST requests? 
A3: GET requests only request data from other websites whereas POST requests submit data to other sites.
Not quite. Both GET and POST requests send and receive objects.

Q4: Which of the following is the correct HTTP request method that can be used to retrieve information from a server?
A4: GET

Q5: What part of the program sends the fetch request?
*/
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};
/*
A5: const response = await fetch('https://api-to-call.com/endpoint');
*/
/*
Q6: Complete the code to handle the success and failure of the Fetch request. If successful, return the response parsed as a JSON object and if failed, log the error message to the console.
*/
fetch('url').then(
  (response) => {
    return response.json();
  },
  (networkError) => console.log(networkError.message)
);

/*
Q7: Complete the code to construct a POST request that contains an endpoint and information needed.
*/
fetch('https://api-to-call.com/endpoint', {
  method:"POST",
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok)~__{
    return response.json(); 
  }
    throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})