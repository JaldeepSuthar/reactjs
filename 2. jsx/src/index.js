// 1) import react and reactDom libraries

import React from "react";
import ReactDOM from "react-dom/client";

// 2) get the reference to the div with ID root
const el = document.getElementById("root");
// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4) create a component
function App() {
  // const sum = 1 + 1;
  // return <h1>{sum}</h1>;
  // return <h1>{new Date().toLocaleTimeString()}</h1>
  return <textarea autoFocus={true} />;
}
// 5) Show the component on the screen
root.render(<App />);
