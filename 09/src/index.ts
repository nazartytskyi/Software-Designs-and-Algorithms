import { DijkstraPathFinder, graph } from "./DijkstraPathFinder";

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

const pathFinder1 = new DijkstraPathFinder(graph1);

const pathFinder2 = new DijkstraPathFinder(graph2);

console.log(pathFinder1.findShortestPath(0, 3));
console.log(pathFinder2.findShortestPath(0, 4));
