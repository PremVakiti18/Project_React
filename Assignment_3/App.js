import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const headingJSX = (
  <div id  = "heading"> 
    <h1> Hello from JSX</h1>
    <h2 className = "Test"> This is a subheading </h2>
  </div>
);


root.render(headingJSX);

// Functional Component


// We can declare in same way as below

// const HeadingComponent = () => {
//   return <h1> This is a functional Component</h1>
// };

// const HeadingComponent = () => <h1> This is a functional Component</h1>;

const HeadingComponent = () => (
  <div id = "parent">
   <h1> This is a functional Component</h1>
   <h2> This is for multiple Texts</h2>
  </div>
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<HeadingComponent/>);


// we can also keep one component inside another component. This is called composition of components.

const ChildComponent = () =>   <h2> This is a child component</h2>;

const ParentComponent = () => (
  <div id = "parent">
    <h1> This is a parent component</h1>
    <ChildComponent/> 
  </div>
);

root2.render(<ParentComponent/>);
