/*** 1. Node Version */
node - v;

/*** 2. Node REPL */
node;

/*** 3. Node Global Object */
console.log(global);

/*** 4. Node Global Properties */
Object.keys(global);

/*** 5. Node Adding Property to Global Object */
global.cat = 'meow';
console.log(global.cat);
