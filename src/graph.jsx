
class Graph {

    constructor() {
        this.noOfVertices = 9;
        this.AdjList = new Map();

        for (let i = 0; i < 9; i++) {
            this.addVertex(i);
        }
    }

    addVertex(v) {
        if (!this.AdjList.has(v)) {
            this.AdjList.set(v, []);
        }
    }
   //chat 
   printGraph() {
        for (let [vertex, edges] of this.AdjList) {
            let graphDesc = (`${vertex} -> ${edges.join(', ')}`);
            console.log(graphDesc);
        }
        
    }

// add edge to the graph
addEdge(v, w)
{
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
}

}


export default Graph;