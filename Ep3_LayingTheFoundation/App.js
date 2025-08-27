import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement("h1", { key: "h1" }, "Hi Namaste React"),
//     React.createElement("h2", { key: "h2" }, "This is Episode 3"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", { key: "h1" }, "Todays topic would be"),
//     React.createElement("h2", { key: "h2" }, "Laying the Foundation"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// React Element => Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

// JSX is not HTML inside JS
// IT is a HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => BABEL Transpiles it to React.createElement => ReactElement - JS object => HTMLElement(render)

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Element
const jsxHeading = <h1 id="heading">Namaste React Using JSX 🚀</h1>;

const elem = <span>React Element</span>

// React Component
const Title = () => (
    <h1 className="head" tabIndex="5">Namaste React in Component 🚀</h1>
)

const number = 10000;

// React Functional Component
// const HeadingComponent = () => <h1 className="heading">Namaste React Functional Component 🚀</h1>
const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component 🚀</h1>
    <h2>{number + 1}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
// root.render(<Title />);
root.render(<HeadingComponent />);
