/*
Variable Attributes in JSX

When writing JSX, it’s common to use variables to set attributes.

Here’s an example of how that might work:

// Use a variable to set the `height` and `width` attributes:
/***************************/ 
const sideLength = "200px";

const panda = (
    <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
    );
/***************************/ 
/*
Notice how in this example, the <img />‘s attributes each get their own line. This can make your code more readable if you have a lot of attributes for one element.

Object properties are also often used to set attributes:
*/
/***************************/ 
const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
}; 

const panda2 = (
    <img 
    src={pics.panda2} 
    alt="Lazy Panda" />
    );
    
    const owl = (
        <img 
        src={pics.owl} 
        alt="Unimpressed Owl" />
        );
        
        const owlCat = (
            <img 
            src={pics.owlCat} 
            alt="Ghastly Abomination" />
            ); 
            
/***************************/ 
/*
Instructions
1. On line 9, declare a new variable named gooseImg. Set its value equal to a JSX <img /> element.

Give the <img /> an attribute with a name of src. Set the attribute’s value equal to the variable goose.
Checkpoint 2 Passed
2. Use root.render() to render gooseImg.
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = (
  <img
  src={goose}/>
);

root.render(gooseImg);