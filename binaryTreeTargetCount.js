//dfs
const treeValueCount = (root, target) => {
  // todo
  if (root === null) return 0;

  let stack = [root];
  let count = 0;

  while (stack.length !== 0) {
    const node = stack.pop();
    if (node.val === target) {
      count++;
    }
    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }
  return count;
};

module.exports = {
  treeValueCount,
};