Q1: What is a globally scoped variable?
A1: A variable that is accessible to any part of the program.

Q2: Which variables possess block scope?

```
const input = 8;
const controlVal = input / 2 + 3;

const multiplier = (number, phase) => {
  const val = number * controlVal + phase;
  console.log(val);
};
```

A2: number,phase,val
Correct! Parameters and const and let variables defined within a function have block scope.

Q3: What is preferable: defining variables in the global scope or defining variables in the block scope?

A3: Defining variables in the block scope. Variables defined in the global scope can cause unexpected behavior in our code.

Correct! Global scope can make things like variable collision (using the same variable for two different purposes) more common.

Q4: Which best defines a variable with block scope?
A4: A variable that is defined within a block and only available inside a block.

Q5: How many global variables are there in the following block of code?

```
const input = 8;
const controlVal = input / 2 + 3;

const multiplier = (number, phase) => {
  const val = number * controlVal + phase;
  console.log(val);
};
```

A5: There are three: input, controlVal, and multiplier

Q6: What will be the output of this code?

```
const roadTrip = () => {
  const destination = 'Crater Lake, Oregon';
  const snacks = 'trail mix';
  const supplies = 'sleeping bags';
};

console.log(`Next stop: ${destination}`);
```

A6: Uncaught ReferenceError: destination is not defined.
Correct! Since destination is declared in the function, it is not available in the global scope.

Q7: What will be the output of this code?

```
let sayHello = 'Hi there';
const sayGoodbye = 'Goodbye';

const speakItalian = () => {
  sayHello = 'Ciao!';
  console.log(sayHello);
  console.log(sayGoodbye);
};

speakItalian();
```

A: Ciao!
Goodbye
You got it! The value of sayHello is changed to 'Ciao!' within the function.
