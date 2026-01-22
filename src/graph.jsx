class Graph {
  constructor() {
    this.noOfVertices = 9;
    this.AdjList = new Map();

    for (let i = 0; i < this.noOfVertices; i++) {
      this.addVertex(i);
    }
  }

  addVertex(v) {
    if (!this.AdjList.has(v)) {
      this.AdjList.set(v, []);
    }
  }

  addEdge(v, w) {
    // Undirected graph
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    for (let [vertex, edges] of this.AdjList.entries()) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

export default Graph;