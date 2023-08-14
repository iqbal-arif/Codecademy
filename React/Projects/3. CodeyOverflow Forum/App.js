import React from "react";
import Card from "./Card";
import { comments } from "./commentData";

// const images = [];
// for (const animal in animals) {
//   images.push(
//     <img
//       key={animal}
//       className="animal"
//       src={animals[animal].image}
//       alt={animal}
//       aria-label={animal}
//       role="button"
//       onClick={displayFact}
//     />
//   );
// }
function App() {
  return comments.map((comment) => <Card commnetObject={comment} />);
}

// import React from 'react';
// import {comments} from './commentData';

// import Card from './Card';

// function App () {
//   return (
//     comments.map(comment => <Card commentObject={comment} />)
//   )
// }
// export default App;

export default App;
