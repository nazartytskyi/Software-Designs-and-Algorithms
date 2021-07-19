export type graph = Array<number[]>;

export const findShortestPath = (
  graph: graph,
  from: number,
  to: number
): number => {
  const visited: boolean[] = [];
  const distances: number[] = [];
  graph.forEach(() => distances.push(Number.POSITIVE_INFINITY));
  distances[from] = 0;

  while (true) {
    let shortestDistance = Number.POSITIVE_INFINITY;
    let shortestIndex = -1;

    for (let i = 0; i < graph.length; i++) {
      if (distances[i] < shortestDistance && !visited[i]) {
        shortestDistance = distances[i];
        shortestIndex = i;
      }
    }

    if (shortestIndex === -1) {
      return distances[to];
    }

    for (let i = 0; i < graph[shortestIndex].length; i++) {
      if (
        graph[shortestIndex][i] !== 0 &&
        distances[i] > distances[shortestIndex] + graph[shortestIndex][i]
      ) {
        distances[i] = distances[shortestIndex] + graph[shortestIndex][i];
      }
    }

    visited[shortestIndex] = true;
  }
};
