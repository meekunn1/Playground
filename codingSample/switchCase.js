//sets value to be used.
let value = 1;

//use value in a switch case to populate constant
const returner = (value) => {
  return (
    {
      1: "One",
      2: "Two",
      3: "Three",
    }[value] ?? "Default"
  );
};

//simply console.log returner value
console.log(`straight from returner function: ${returner(value)}`);

//sets returner value into display
let display = returner(value);

//console.log display
console.log(`from display: ${display}`);
