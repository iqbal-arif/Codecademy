import React from "react";
import { comments } from "./commentData";
import Card from "./Card";

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
  const commentList = comments.map((comment) => comment[comment].comment);
function App(props) {
  return(
  <Card {commnetList}/>
  <p>This is Card</p>
  )
}

export default App;
