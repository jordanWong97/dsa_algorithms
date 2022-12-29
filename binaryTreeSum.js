// DFS iterative
const treeSum = (root) => {
  // todo

  //dfs
  if (root === null) return 0;

  let sum = 0;
  let stack = [root];

  while (stack.length !== 0) {
    const node = stack.pop();
    sum += node.val;
    node.right ? stack.push(node.right) : null;
    node.left ? stack.push(node.left) : null;
  }

  return sum;
};

module.exports = {
  treeSum,
};