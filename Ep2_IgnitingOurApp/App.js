import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: 'child1' }, [
    React.createElement("h1", {key: 'h1'}, "This is Namaste React 🚀"),
    React.createElement("h2", {key: 'h2'}, "by Akshay Saini"),
  ]),
  React.createElement("div", { id: "child2", key: 'child2' }, [
    React.createElement("h1", {key: 'h1'}, "Hi I am an h1 tag"),
    React.createElement("h2", {key: 'h2'}, "Hi I am sibling h2 tag"),
  ]),
]);

console.log(parent);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

rootReact.render(parent);


