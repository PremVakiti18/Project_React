{
  /* <div>
    <div>
        <h1>
            Hello from React.js!
        </h1>
    </div>
</div> */
}

const divChild = React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Hello from React file h1"),
      React.createElement("h2", {}, "Hello from React file h2")
    ]
  )

const divParent = React.createElement(
  "div",
  { id: "parent" },
  divChild
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!",
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divParent);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const content2 = React.createElement("h1",{id:"heading2"},"2 divs");
root2.render(content2);
