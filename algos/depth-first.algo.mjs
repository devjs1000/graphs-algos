import { a } from "../data/graph.data.mjs";

const depthFirstPrint = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const hasPath = (graph, src, dest) => {
  if (src === dest) return true;
  const allNeighbors = graph[src];
  for (let neighbor of allNeighbors) {
    const res = hasPath(graph, neighbor, dest);
    if (res) return true;
  }
};

depthFirstPrint(a, "a");

export { depthFirstPrint, hasPath };
