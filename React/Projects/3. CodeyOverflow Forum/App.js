import React from "react";
import { comments } from "./commentData";
import Card from "./Card";

// import ReactDOM from 'react-dom';
  const commentList = comments.map((comment) => {comment}.comment);
function App(props) {
  return(
  <Card {commnetList}/>
  <p>This is Card</p>
  )
}

export default App;
