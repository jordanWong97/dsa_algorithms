//dfs recursive
//checks for a directed path, anything that ends up on call stack should
//have a directed path towards it
const hasPath = (graph, src, dst) => {
  // todo
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};

module.exports = {
  hasPath,
};

