
//recursive
//consolidate all paths from root to end leaf in individual subarrays
const allTreePaths = (root) => {
  // todo
  if (root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]];

  let paths = [];

  const left = allTreePaths(root.left);
  for (let subLeft of left) {
    paths.push([root.val, ...subLeft]);
  }

  const right = allTreePaths(root.right);
  for (let subRight of right) {
    paths.push([root.val, ...subRight]);
  }

  return paths;
};

module.exports = {
  allTreePaths,
};