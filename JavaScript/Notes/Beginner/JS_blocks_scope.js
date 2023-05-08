// Block & Scope
const city = 'New York City';

function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

// Global Scope

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

// Block Scope
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);

// Scope Pollution

const satellite2 = 'The Moon';
const galaxy2 = 'The Milky Way';
const stars2 = 'North Star';

function callMyNightSky2() {
  stars2 = 'Sirius';
  return 'Night Sky: ' + satellite2 + ', ' + stars2 + ', and ' + galaxy2;
}

console.log(callMyNightSky2());
console.log(stars2);

/***********
 * 
 * Review: Scope

In this lesson, you learned about scope and how it impacts the accessibility of different variables.

Let’s review the following terms:

    1. Scope refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
    2. Blocks are statements that exist within curly braces {}.
    3. Global scope refers to the context within which variables are accessible to every part of the program.
    4. Global variables are variables that exist within global scope.
    5. Block scope refers to the context within which variables are accessible only within the block they are defined.
    6. Local variables are variables that exist within block scope.
    7. Global namespace is the space in our code that contains globally scoped information.
    8. Scope pollution is when too many variables exist in a namespace or variable names are reused.

 * 
 */
