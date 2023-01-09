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

//bfs
// const treeValueCount = (root, target) => {
//     // todo
//   if(root === null) return 0;

//   let queue = [root];
//   let count = 0;

//   while(queue.length !== 0){
//     const node = queue.shift();
//     if(node.val === target){
//       count++;
//     }
//     if(node.left !== null) queue.push(node.left);
//     if(node.right !== null) queue.push(node.right);
//   }
//   return count;
// }

//dfs recursive
// const treeValueCount = (root, target) => {
//   if(root === null) return 0;

//   const match = root.val === target ? 1 : 0

//   return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
// }

module.exports = {
  treeValueCount,
};