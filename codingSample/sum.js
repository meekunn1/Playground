//function to create random numbers for array
const makeARandomNumber = () => {
  return Math.floor(Math.random() * 9);
};

//generate an array of random numbers
const randoms = Array(10).fill(0).map(makeARandomNumber);
console.log(`base array would be [${randoms}]`);

//generate a random target number
const target = Math.floor(Math.random() * 12) + 2;
console.log(`target sum would be ${target}`);

//function to search for first pair in array to add up to target
const sumFinder = (array, target) => {
  let goal = false;
  let product = [];
  let i = 0;
  let j = 1;
  while (!goal) {
    goal = true;
    if (array[i] + array[j] === target) {
      goal = true;
    } else if (j == array.length) {
      i = i + 1;
      j = i + 1;
      goal = false;
    } else if (i === array.length) {
      return (product = ["None", "Existant"]);
    } else {
      j = j + 1;
      goal = false;
    }
  }
  return (product = [i, j]);
};

//runs the function to populate answer array to display result
const answer = sumFinder(randoms, target);
console.log(`answer would be [${answer[0]},${answer[1]}]`);
