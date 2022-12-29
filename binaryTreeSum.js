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

//recursive dfs sum
//do not need to worry about whether or not left or right is null because
//if side is null, counts as 0 from initial if statement

// const treeSum = (root) => {
//   if(root === null) return 0;
//   return root.val + treeSum(root.left) + treeSum(root.right);
// }

module.exports = {
  treeSum,
};