import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";

function App() {
  return <HelloWorld />;
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
