const { a, b, c, d, e, f } = require("./nodes.js");

//Depth First Data structure uses stack
const depthFirstValues = (root) => {
  //handle empty tree case
  if (root === null) {
    return [];
  }
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
};
//recursive function: function that calls itself until it can not. will use stack
const depthFirstRecursive = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstRecursive(root.left);
  const rigtValues = depthFirstRecursive(root.right);

  return [root.val, ...leftValues, ...rigtValues];
};

const depthList = depthFirstValues(a);
console.log(`depth first values: [${depthList}]`);

const depthListRecursive = depthFirstRecursive(a);
console.log(`depth first values recursively: [${depthListRecursive}]`);

//Breath First data structure uses Queue. need to use iterative code because uses queue
const breadthFirstValues = (root) => {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return result;
};
const breadthFirstResult = breadthFirstValues(a);
console.log(`breadth first values: [${breadthFirstResult}]`);
