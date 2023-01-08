//using dfs iterative
const treeIncludes = (root, target) => {
  // todo
  if (root === null) return false;
  const stack = [root];
  while (stack.length !== 0) {
    const node = stack.pop();
    if (node.val === target) {
      return true;
    }
    node.right ? stack.push(node.right) : null;
    node.left ? stack.push(node.left) : null;
  }
  return false;
};

//bfs iterative
// const treeIncludes = (root, target) => {
//   if(root === null) return false;
//   const queue = [root];
//   while(queue.length !== 0){
//     const node = queue.shift();
//     if(node.val === target){
//       return true;
//     }
//     node.left ? queue.push(node.left): null;
//     node.right ? queue.push(node.right): null;
//   }
//   return false;
// }

//recursive dfs
// const treeIncludes = (root, target) => {
//   if(root === null) return false;
//   if(root.val === target) return true;

//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// }

module.exports = {
  treeIncludes,
};

