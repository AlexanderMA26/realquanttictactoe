import Graph from './graph';

function createGraph(){

const g = new Graph;

g.addEdge(0, 1);
g.addEdge(1, 2);
return g.printGraph();
}

export default createGraph;
