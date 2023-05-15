/*
***************************
1. JavaScript Promise.all()
***************************
*/
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});
/*
The JavaScript Promise.all() method can be used to execute multiple promises in parallel. The function accepts an array of promises as an argument. If all of the promises in the argument are resolved, the promise returned from Promise.all() will resolve to an array containing the resolved values of all the promises in the order of the initial array. Any rejection from the list of promises will cause the greater promise to be rejected.

In the code block, 3 and 2 will be printed respectively even though promise1 will be resolved after promise2.
*/

/*
**********************************************
2. The .catch() method for handling rejection
**********************************************
*/
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise Rejected Unconditionally.'));
  }, 1000);
});

promise.then((res) => {
  console.log(value);
});

promise.catch((err) => {
  alert(err);
});
/*
The function passed as the second argument to a .then() method of a promise object is used when the promise is rejected. An alternative to this approach is to use the JavaScript .catch() method of the promise object. The information for the rejection is available to the handler supplied in the .catch() method.
*/

/*
*********************************
3. States of a JavaScript Promise
*********************************
*/
const promise4 = new Promise((resolve, reject) => {
  const res = true;
  // An asynchronous operation.
  if (res) {
    resolve('Resolved!');
  } else {
    reject(Error('Error'));
  }
});

promise.then(
  (res) => console.log(res),
  (err) => alert(err)
);
/*
A JavaScript Promise object can be in one of three states: pending, resolved, or rejected.

While the value is not yet available, the Promise stays in the pending state. Afterwards, it transitions to one of the two states: resolved or rejected.

A resolved promise stands for a successful completion. Due to errors, the promise may go in the rejected state.

In the example code block, if the Promise is on resolved state, the first parameter holding a callback function of the .then() method will print the resolved value. Otherwise, an alert will be shown.
*/

/*
**************************************
4.Creating a Javascript Promise object
**************************************
*/
const executorFn = (resolve, reject) => {
  console.log('The executor function of the promise!');
};

const promise5 = new Promise(executorFn);
/*
An instance of a JavaScript Promise object is created using the new keyword.

The constructor of the Promise object takes a function, known as the executor function, as the argument. This function is responsible for resolving or rejecting the promise.
*/

/**********************************************
5..then() method of a JavaScript Promise object
**********************************************/
const promise = new Promise((resolve, reject) => {    
  setTimeout(() => {
    resolve('Result');
  }, 200);
});
 
promise.then((res) => {
  console.log(res);
}, (err) => {
  alert(err);
});
/*
The .then() method of a JavaScript Promise object can be used to get the eventual result (or error) of the asynchronous operation.

.then() accepts two function arguments. The first handler supplied to it will be called if the promise is resolved. The second one will be called if the promise is rejected.
*/

/**************
6.setTimeout()
***************/
const loginAlert = () =>{
  alert('Login');
};
 
setTimeout(loginAlert, 6000);
/*
setTimeout() is an asynchronous JavaScript function that executes a code block or evaluates an expression through a callback function after a delay set in milliseconds.
*/

/***********************************
7. Chaining multiple .then() methods
************************************/
const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));
 
promise.then(res => {
  return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
}).then((res) => {
  console.log(res)
}, (err) => {
  alert(err)
});
/*
The .then() method returns a Promise, even if one or both of the handler functions are absent. Because of this, multiple .then() methods can be chained together. This is known as composition.

In the code block, a couple of .then() methods are chained together. Each method deals with the resolved value of their respective promises.
 * /

/*
*************************************************
8. Executor function of JavaScript Promise object
*************************************************
*/
const executorFn = (resolve, reject) => {
  resolve('Resolved!');
};
 
const promise = new Promise(executorFn);
/*
A JavaScript promise’s executor function takes two functions as its arguments. The first parameter represents the function that should be called to resolve the promise and the other one is used when the promise should be rejected. A Promise object may use any one or both of them inside its executor function.

In the given example, the promise is always resolved unconditionally by the resolve function. The reject function could be used for a rejection.

*/

/*
*********************
9. The Promise Object
*********************
A Promise is an object that can be used to get the outcome of an asynchronous operation when that result is not instantly available.

Since JavaScript code runs in a non-blocking manner, promises become essential when we have to wait for some asynchronous operation without holding back the execution of the rest of the code.
*/

/*************************************************/
/********************Practice*********************/
/*************************************************/

/*
Q1:Select the correct option that creates an instance of the JavaScript Promise object.*/

const promise = new Promise((resolve, reject) => {
  const num = 5;
  if (num > 10) {
    resolve('Success!');
  } else {
    reject(Error('Failed'));
  }
});

/*
Q2: Which option can be used in place of the handler for the rejected promise in the .then() method?*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise Rejected'));
  }, 1000);
});

promise.then(
  (res) => {
    console.log(value);
  },
  (err) => {
    alert(err);
  }
);

promise.catch((err) => {
  alert(err);
});
/*Precisely! The JavaScript .catch() method can be used to handle a rejected promise.*/
/*
Q3: Complete the JavaScript code block that imitates the use of a Promise object and prints the data when it is available.
*/
const promiseSample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolving data after 2 seconds.');
  }, 2000);
});

promiseSample.then((asyncMessage) => {
  console.log(asyncMessage);
});

/*
Q4: Fill in the blanks to compose a JavaScript promise with a couple of then() methods for evaluating the type of a number, and printing it to the console.*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(47);
  }, 1000);
});

promise.then((val) => {
  // checks if the number is even.
  return val % 2 == 0 ? true : false;
});

console.log(`The number is even: $:{bool}`);

/*
Q5: Select the correct signature for the executor function of a JavaScript Promise object.*/

(resolve,reject) =>{
    //Some async operation
    if (response.result){
        resolve(response.result);
    }else{
        reject(Error("Failed!");)
    }
}
/*Precisely! The function has two parameters that can be used to resolve or reject the promise.*/

/*
Q6: What is the fulfilled value of Promise.all()?
A6: An array
Correct! The Promise.all() method runs many promises in parallel, waits for all of them to resolve, and returns an array of results as its fulfilled value.
*/


/*
Q7: Write a function resolveWithValue() that has two parameters:

    The first parameter is a function that returns a promise.
    The second parameter is a string value.

When called, resolveWithValue() should invoke the function argument with the string argument and then log the resultant promise’s resolve value or reject reason to the console.
*/

// Define your function below:

// Define your function below:

const resolveWithValue = () =>{
    return new Promise((resolve,reject) =>{
      resolve("It is resolved")
    })
  }
  
   
  
  // Consider testing your function yourself:
  
  // testerFunc() takes in a string and returns a promise
  let testerFunc = (str) => {
    if (Math.random() < .5){
      return Promise.resolve(`Resolved with: ${str}`)
    } else {
      return Promise.reject(`Rejected with: ${str}`)
    }
  }

  /*
  Q8: Which of the following is NOT a state of a Promise?
  A8: Returned
  */

  /*
  Q9: Complete the JavaScript code block that will change the value of the variable winner after 5 seconds.*/

let winner = 'John';
console.log(winner);

setTimeout(() => {
  
winter= 'Clara';
  console.log(winner);
}, 5000

);

/*
Q10: What will be printed to the console after running the code provided?
*/
let link = state => {
  return new Promise(function(resolve, reject) {
    if (state) { 
      resolve('success'); 
    } else { 
      reject('error');
    }
  });
}
 
let promiseChain = link(true);
 
promiseChain
.then( data => {  
   console.log(data + " 1");
   return link(true);
})
.then( data => {
   console.log(data+ " 2");
   return link(true);
})

/*
success 1
success 2
Correct. Asynchronous operations are chained by explicitly returning promises within .then()‘s executed in the correct order. 
*/

/*
Q11: Complete the JavaScript code block that will show an alert message if the Promise is rejected.
*/
const promise = new Promise ((resolve, reject) => {    
  setTimeout(() => {
    const resultOfAnAsyncOperation = true;
    if(resultOfAnAsyncOperation) {
      resolve('Operation Successful!');
    } else {
      reject(Error('Promise Rejected'));
    }    
  }, 1000);
});
 promise.then((res) => {
  console.log(res);
}, (err) => {
  alert('Operation Failed!');
})

/*
Q12: Fill in the blanks in order to display a concatenated string of the values resolved from the two provided promises in JavaScript.
*/
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sunny');
  }, 100);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Day');
  }, 100);
});
 
Promise.all([ promise1, promise2]).then((values) => {
  console.log(`${values[0]} ${values[1]}`);
});

/*
Q13: Which of the executor function’s parameters is called if the asynchronous task completes successfully?
A13: function1
Correct! The first of these functions (function1) is called when the asynchronous task completes successfully.
*/
const example = new Promise( (function1, function2) => { . . . } );

/*
Q14: What state will this promise be in after 0 seconds?
*/
const examplePromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout( () => resolve('success'), 3000);
    } else {
      setTimeout( () => resolve('failed'), 5000);
    }
  });
};
/*
A14: Pending */
