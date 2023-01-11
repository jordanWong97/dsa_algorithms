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

//bfs iterative
// const hasPath = (graph, src, dst) => {

//   let queue = [src];

//   while(queue.length !== 0){
//     const current = queue.shift();
//     if(current === dst) return true;

//     //pushing from values in object
//     for(let neighbor of graph[current]){
//       queue.push(neighbor);
//     }
//   }
//   return false;
// }



module.exports = {
  hasPath,
};

