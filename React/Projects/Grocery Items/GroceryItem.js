import React from "react";

function GroceryItem({ item }) {
  function handleClick() {
    alert(`${item} added to the cart!`);
  }
  return <button onClick={handleClick}>{item}</button>;
}
export default GroceryItem;
