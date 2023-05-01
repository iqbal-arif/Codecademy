/*
******************************************
1. javascript passing objects as arguments
******************************************
*/
const origNum = 8;
const origObj = { color: 'blue' };

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed
// by reference and are therefore mutable.
console.log(origObj.color);
/*
When JavaScript objects are passed as arguments to functions or methods, they are passed by reference, not by value. This means that the object itself (not a copy) is accessible and mutable (can be changed) inside that function.
*/

/*
***********************************************
2. Accessing non-existent JavaScript properties
***********************************************
*/
