import { animals } from "./animals";

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const title = " ";
const background = (
  <img className="background" src="./images/ocean.jpg" alt="ocean" />
);
const animalFacts = (
  <div>
    <h1>{title === " " ? "Click an animal for a fun fact !" : title}</h1>;
    <div>{background}</div>
  </div>
);
root.render(animalFacts);