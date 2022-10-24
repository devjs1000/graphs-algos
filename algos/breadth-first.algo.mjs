import { a } from "../data/graph.data.mjs";

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

const hasPath = (graph, src, dest) => {
  if (src === dest) return true;
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

// console.log(hasPath(a, "a", "a"));

// breadthFirstPrint(a, "a");

export { breadthFirstPrint, hasPath };
