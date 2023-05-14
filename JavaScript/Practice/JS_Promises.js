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