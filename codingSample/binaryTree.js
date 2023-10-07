// source: https://www.youtube.com/watch?v=fAAZixBzIAI&t=2162s

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//node is key:value pair, where node key = a have val = a in this setup.
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

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
const depthFirstLeftValues = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstLeftValues(root.left);
  return [root.val, ...leftValues];
};

const list = depthFirstValues(a);
console.log(`depth first valuese: [${list}]`);

const leftValues = depthFirstLeftValues(a);
console.log(`depth first left only values: [${leftValues}]`);

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
