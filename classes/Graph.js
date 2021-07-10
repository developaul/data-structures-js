class MyGraph {
  constructor() {
    this.nodes = 0
    this.adjacentList = {}
  }

  addVertex(node) {
    this.adjacentList[node] = []
    ++this.nodes
  }

  addEdge(firstNode, secondNode) {
    this.adjacentList[firstNode].push(secondNode)
    this.adjacentList[secondNode].push(firstNode)
  }
}

const myGraph = new MyGraph()
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')

myGraph.addEdge('1', '2')
myGraph.addEdge('1', '5')
myGraph.addEdge('2', '3')
myGraph.addEdge('2', '5')
myGraph.addEdge('3', '4')
myGraph.addEdge('5', '4')
myGraph.addEdge('6', '4')
// myGraph = {nodes: 6, adjacentList: {…}}