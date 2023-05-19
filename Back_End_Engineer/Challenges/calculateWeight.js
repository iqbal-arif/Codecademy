/*
calculateWeight()

**************************
*******Instructions*******
**************************

1.

Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

    1. have two parameters: earthWeight and planet
    2. expect earthWeight to be a number
    3. expect planet to be a string
    4. return a number representing what that Earth-weight would equate to on the planet passed in.

Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

*/
// Write your function here:

const calculateWeight = (earthWeight, planet) => {
  console.log(earthWeight);
  console.log(planet);
  if (
    planet === 'Mercury' ||
    planet === 'Venus' ||
    planet === 'Mars' ||
    planet === 'Jupiter' ||
    planet === 'Saturn'
  ) {
    let weight;
    switch (planet) {
      case 'Mercury':
        return earthWeight * 0.378;
        break;
      case 'Venus':
        return earthWeight * 0.907;
        break;
      case 'Mars':
        return earthWeight * 0.377;
        break;
      case 'Jupiter':
        return earthWeight * 2.36;
        break;
      case 'Saturn':
        return earthWeight * 0.916;
        break;
      default:
    }
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')); // Should print 236

// We encourage you to add more function calls of your own to test your code!
