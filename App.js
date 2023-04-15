const li1 = React.createElement(
  "li",

  {
    style: { backgroundColor: "red", color: "#fff" },
  },

  "Ram"
);
const li2 = React.createElement(
  "li",

  {
    style: { backgroundColor: "yellow", color: "#fff" },
  },

  "Shyam"
);
const li3 = React.createElement(
  "li",

  {
    style: { backgroundColor: "Orange", color: "#fff" },
  },

  "Mohan"
);

const ul = React.createElement(
  "ul",
  {
    className: "unorder",
  },
  [li1, li2, li3]
);

const element = React.createElement(
  "div",
  {
    className: "element",
  },
  [ul]
);

const wrapper = React.createElement(
  "div",
  {
    id: "wrapper",
  },
  [element]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(wrapper);
