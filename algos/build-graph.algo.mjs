import { undirectedGraph } from "../data/graph.data.mjs";

const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
      const [a, b] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
  
      graph[a].push(b);
      graph[b].push(a);
    }
  
    return graph;
  };

  
  console.log(buildGraph(undirectedGraph));

  export {
    buildGraph
  }