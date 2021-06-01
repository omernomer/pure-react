import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "some breed",
    }),
    React.createElement(Pet, {
      name: "Cat",
      animal: "Cat",
      breed: "some cat breed",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
