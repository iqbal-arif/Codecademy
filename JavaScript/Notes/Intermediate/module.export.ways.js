/************************NAME EXPORT SYNTAX*******************************/

<html>
  <head>
    <title>Secret Image</title>
  </head>
  <body>
    <button id="secret-button"> Want to see something cool? </button>
    <img id="secret-img" src="imageURL.jpg" style="display: none">
    <script src="./secret-image.js"> </script>
  </body>
</html>

/* secret-image.js */
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
 
const toggleHiddenElement2 = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement2(imgElement);
});

/*
secret-image/
|-- secret-image.html
|-- secret-image.js
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
modules/
|-- dom-functions.js    <-- new module file
*/

/* dom-functions.js */
const toggleHiddenElement3 = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor3 = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
export { toggleHiddenElement3, changeToFunkyColor3 };
/*
Let’s briefly break down how this module works:

    1. The function toggleHiddenElement() is declared. It accepts a domElement as an input and either shows or hides that element depending on its current display style value.
    2. A new function changeToFunkyColor() is declared. It accepts a domElement as an input and then sets its background color to a random rgb() color value.
    3. The two functions are exported using the ES6 export statement.

These exported functions are now available to be imported and used by other files!

/************************NAME EXPORT SYNTAX*******************************/
/******export { toggleHiddenElement3, changeToFunkyColor3 };******/
/************************NAME EXPORT SYNTAX*******************************/


/************************NAME IMPORT SYNTAX*******************************/

/*
Let’s break down these changes:

    1. In secret-messages.js, the functions toggleHiddenElement() and changeToFunkyColor() are imported from the module ../modules/dom-functions.js. The ../ indicates that the modules/ folder is in the same folder as the parent folder, secret-messages/.
    2. When the button is clicked, the now imported toggleHiddenElement() function is called with pElement as an argument.
    3. In addition, changeToFunkyColor() is called with buttonElement as an argument, changing its background color to a random one!

    The change here is subtle, can you spot it? In secret-messages.html, the only thing that changes is the addition of the attribute type='module' to the <script> element. Failure to do so can cause some browsers to throw an error. For example, in Chrome you might see this error:

/************************************ES6 IMPORT SYNTAX**************************************/
/***import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js'***/
/***<script type="module" src="./secret-messages.js"> </script>'***/
/************************************ES6 IMPORT SYNTAX**************************************/


/***********************RENAMING IMPORT TO AVOID NAMING COLLISIONS**************************/
/*******import { area as squareArea } from 'square-area.js';
********import { area as circleArea } from 'circle-area.js';
/***<script type="module" src="./secret-messages.js"> </script>'***/
/***********************RENAMING IMPORT TO AVOID NAMING COLLISIONS**************************/
