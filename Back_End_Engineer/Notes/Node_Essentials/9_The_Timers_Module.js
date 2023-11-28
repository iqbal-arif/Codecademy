/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. The Timers Streams ** Global Module*/
/*
There are times when we want some of our code to be executed at a specified point in time. This is what the timers module is used for.
The setImmediate() function is often compared with the setTimeout() function. When setImmediate() is called, it executes the specified callback function after the current (poll phase) is completed. The method accepts two parameters: the callback function (required) and arguments for the callback function (optional). If you instantiate multiple setImmediate() functions, they will be queued for execution in the order that they were created.
*/
setImmediate(() => {
  console.log('Hello! My name is Codey.');
});
