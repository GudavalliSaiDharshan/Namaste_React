{
  /* 
    

// LVL1
    
<div id='parent'>
    <div id='child'>
        <h1>I am an h1 tag</h1>
    </div>
</div> 


// LVL2

<div id='parent'>
    <div id='child'>
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>


// LVL3

<div id='parent'>
    <div id='child'>
        <h1 id='child1'>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>

    <div id='child2'>
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div> 

*/
}

// const headingReact = React.createElement(
//   "h1",
//   { id: "headingReact", xyz: "abc" },
//   "Hello World from React!"
// );

// console.log(headingReact);

// const rootReact = ReactDOM.createRoot(document.getElementById("rootReact"));
// rootReact.render(headingReact);

// LVL1

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hi I am an h1 tag")
//   )
// );

// LVL2

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi I am an h1 tag"),
//     React.createElement("h2", {}, "Hi I am sibling h2 tag"),
//   ])
// );

// LVL3

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi I am an h1 tag"),
    React.createElement("h2", {}, "Hi I am sibling h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I am an h1 tag"),
    React.createElement("h2", {}, "Hi I am sibling h2 tag"),
  ]),
]);

console.log(parent);

const rootReact = ReactDOM.createRoot(document.getElementById("rootReact"));

rootReact.render(parent);


