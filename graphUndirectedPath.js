const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = build(edges);

};

//build graph helper function
const build = (edges) => {

  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(graph[a])) graph[a] = [];
    if (!(graph[b])) graph[b] = [];
    graph[a].push[b];
    graph[b].push[a];
  }

  return graph;
};

