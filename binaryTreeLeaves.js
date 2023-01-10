//recursive
// const leafList = (root) => {
//   // todo
//   const leaves = [];
//   fillLeaves(root, leaves);
//   return leaves;
// };

//recursive helper
// const fillLeaves = (root, leaves) => {
//   if(root === null) return;
//   if(root.left === null && root.right === null){
//     leaves.push(root.val);
//   }
//   fillLeaves(root.left, leaves);
//   fillLeaves(root.right, leaves);
// }

module.exports = {
  leafList,
};

