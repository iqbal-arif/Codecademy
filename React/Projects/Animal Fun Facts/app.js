import { animals } from "./animals";

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const title = " ";

const background = (
  <img className="background" src="./images/ocean.jpg" alt="ocean" />
);

function displayFact(e) {
  const clickedAnimal = e.target.alt;
  const randomIndex = Math.floor(
    Math.random() * animals[clickedAnimal].facts.length
  );
  const animalFunFacts = animals[clickedAnimal].facts[randomIndex];
  const p = document.getElementById("fact");
  p.innerHTML = animalFunFacts;
}

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      src={animals[animal].image}
      alt={animal}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const showBackground = " ";

const animalFacts = (
  <div>
    <h1>{title === " " ? "Click an animal for a fun fact !" : title}</h1>
    {background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

root.render(animalFacts);
