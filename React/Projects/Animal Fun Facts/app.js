import { animals } from "./animals";

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const title = " ";
const background = (
  <img className="background" src="./images/ocean.jpg" alt="ocean" />
);
const images = [];
for (const animal in animals) {
  images.push(
    <img
      onClick={displayFact}
      key={animal}
      className="animal"
      src={animals[animal].image}
      alt={animal}
      aria-label={animal}
      role="button"
    />
  );
}

const displayFact = (e) => {
  const clickedAnimal = e.target.alt;
  const randomFacts = Math.floor(Math.random() * clickedAnimal.fact.length);
  const p = document.getElementById("fact")
  return p.innerHTML=(randomFacts);
};

const animalFacts = (
    <div>
      <div>
        <h1>{title === " " ? "Click an animal for a fun fact !" : title}</h1>;
        <img className="background" alt="ocean" src="/images/ocean.jpg" />
      </div>
      <div className="animals">{images}</div>
      <p id="fact"></p>
    </div>
  );
  root.render(animalFacts);
