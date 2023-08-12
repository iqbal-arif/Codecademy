import React from "react";
import { comments } from "./commentData";

const commentsList = [];
for (const comment in comments) {
  commentsList.push(
    <img
      className="animal"
      src={comments[comment].profileImg}
      alt={comment}
      aria-label={comment}
    />
  );
}

console.log({ commentsList });

function Body(props) {
  return <p>{props.comment}</p>;
}

export default Body;
