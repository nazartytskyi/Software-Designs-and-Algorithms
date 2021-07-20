export type graph = Array<number[]>;

export class DijkstraPathFinder {
  private graph: graph;
  constructor(graph: graph) {
    this.graph = graph;
  }

  findShortestPath( from: number, to: number): number {
    const visited: boolean[] = [];
    const distances: number[] = [];
    this.graph.forEach(() => distances.push(Number.POSITIVE_INFINITY));
    distances[from] = 0;

    while (true) {
      let shortestDistance = Number.POSITIVE_INFINITY;
      let shortestIndex = -1;

      for (let i = 0; i < this.graph.length; i++) {
        if (distances[i] < shortestDistance && !visited[i]) {
          shortestDistance = distances[i];
          shortestIndex = i;
        }
      }

      if (shortestIndex === -1) {
        return distances[to];
      }

      for (let i = 0; i < this.graph[shortestIndex].length; i++) {
        if (
          this.graph[shortestIndex][i] !== 0 &&
          distances[i] > distances[shortestIndex] + this.graph[shortestIndex][i]
        ) {
          distances[i] =
            distances[shortestIndex] + this.graph[shortestIndex][i];
        }
      }

      visited[shortestIndex] = true;
    }
  };
}
