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


depthFirstPrint(a, "a");

export { depthFirstPrint};
