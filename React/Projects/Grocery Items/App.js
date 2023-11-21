import React from "react";
import ReactDOM from "react-dom";
import GroceryItem from "./GroceryItem";

import React from "react";
import GroceryItem from "./GroceryItem";

function App() {
  return (
    <div>
      <GroceryItem item="Eggs" />
      <GroceryItem item="Banana" />
      <GroceryItem item="Strawberry" />
      <GroceryItem item="Bread" />
      <GroceryItem />;<p>This is Grocery List</p>
    </div>
  );
}

export default App;
