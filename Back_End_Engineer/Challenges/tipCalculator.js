/*

tipCalculator()
Instructions
1.

Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20
*/

// Write your function here:

const tipCalculator = (quality, total) => {
  switch (quality) {
    case 'excellent':
      return total * 0.3;
      break;
    case 'good':
      return total * 0.2;
      break;
    case 'ok':
      return total * 0.15;
      break;
    case 'bad':
      return total * 0.05;
      break;

    default:
      return total * 0.18;
  }
};

// Uncomment the line below when you're ready to try out your function
// console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
