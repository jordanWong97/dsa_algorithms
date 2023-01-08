//dfs recursive
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  return root.val + Math.max(maxPathSum(root.left), Math.max(maxPathSum(root.right)));
};

module.exports = {
  maxPathSum,
};

