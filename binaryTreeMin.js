//bfs
const treeMinValue = (root) => {
  let min = Infinity;
  const queue = [root];
  while (queue.length !== 0) {
    const node = queue.shift();
    if (node.val < min) {
      min = node.val;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return min;
};

//dfs
// const treeMinValue = (root) => {
//   let stack = [root];

//   let min = Infinity;

//   while(stack.length !== 0){
//     const current = stack.pop();
//     if(current.val < min){
//       min = current.val;
//     }

//     if(current.right !== null) stack.push(current.right);
//     if(current.left !== null) stack.push(current.left);
//   }

//   return min;
// }

//dfs recursive
// const treeMinValue = (root) => {
//   if(root === null) return Infinity;

//   const minLeft = treeMinValue(root.left);
//   const minRight = treeMinValue(root.right);

//   return Math.min(root.val, minLeft, minRight);
// }

module.exports = {
  treeMinValue,
};

