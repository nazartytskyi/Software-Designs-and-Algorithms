import { findShortestPath, graph } from "./DijkstraPathFinder";

const graph1: graph = [
  [0, 5, 6, 0],
  [5, 0, 0, 0],
  [6, 0, 0, 3],
  [0, 0, 3, 0],
];

const graph2: graph = [
  [0, 2, 6, 0, 20],
  [2, 0, 3, 0, 0],
  [6, 3, 0, 3, 0],
  [0, 0, 3, 0, 10],
  [20, 0, 0, 10, 0],
];

console.log(findShortestPath(graph1, 0, 3));
console.log(findShortestPath(graph2, 0, 4));
