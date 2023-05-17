/*
Q1: Which of the following is NOT true about the JavaScript Fetch API?
A1: The Fetch API is powered by a XMLHttpRequest and used heavily in AJAX programming.
Correct! The JavaScript Fetch API is an alternative to the XMLHttpRequest and they are not used simultaneously.
1. The Fetch API uses promises to handle asynchronous data.
2. The fetch() function accepts a URL parameter.
3. The Fetch API returns a promise that resolves to a response object or rejects with an error.

Q2: Which of the following is NOT used to create a request using fetch()? 
A2: .this()
1. JSON.stringify()
2. .json()
3. .then()

Q3: What is wrong with the following code?
*/
async function getData() {
  try {
    let response = await fetch(
      'https://api-to-call.com/endpoint',
      'POST',
      JSON.stringify({ id: 200 }),
      'json'
    );
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}
/*
A3: The settings for the fetch() function call need to be inside of an object adn part of property/value pairs.
*/

/*
Q4: Complete the code to construct a GET request using the Fetch API that will return a promise using the async…await syntax.
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
Q5: What is the difference between GET and POST requests? 
A5: GET requests only request data from other websites whereas POST requests submit data to other sites.
*/
