/*## Comparison Operators

Here is a list of some handy comparison operators and their syntax:

    Less than: <
    Greater than: >
    Less than or equal to: <=
    Greater than or equal to: >=
    Is equal to: ===
    Is not equal to: !==

Comparison operators compare the value on the left with the value on the right.

```
'apples' === 'oranges' // false
```

In the example above, we’re using the identity operator (===) to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false.

All comparison statements evaluate to either true or false and are made up of:

    Two values that will be compared.
    An operator that separates the values and compares them accordingly (>, <, <=,>=,===,!==).
*/

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
