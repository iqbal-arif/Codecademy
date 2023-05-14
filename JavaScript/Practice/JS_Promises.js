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
