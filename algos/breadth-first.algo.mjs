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

const breadthFirstPrintRecursive = (graph, source) => {
  const current = graph[source];
  console.log(source);
  if (current.length > 0) {
    current.forEach((a) => {
      breadthFirstPrintRecursive(graph, a)
    });
  }
};

// breadthFirstPrint(a, "a");
// breadthFirstPrintRecursive(a, "a");

export { breadthFirstPrint };
