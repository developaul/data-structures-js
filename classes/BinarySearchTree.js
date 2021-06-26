class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class MyBinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let currentNode = this.root

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this
        }

        currentNode = currentNode.left
        continue
      }

      if (!currentNode.right) {
        currentNode.right = newNode
        return this
      }

      currentNode = currentNode.right
    }
  }

  search(value) {
    let currentNode = this.root

    while (!!currentNode) {
      if (currentNode.value === value) return currentNode
      if (value < currentNode.value) currentNode = currentNode.left
      else currentNode = currentNode.right
    }

    return 'Node not found :(..'
  }
}

const myBinarySearchTree = new MyBinarySearchTree()
myBinarySearchTree.insert(10)
myBinarySearchTree.insert(4)
myBinarySearchTree.insert(20)
myBinarySearchTree.insert(2)
myBinarySearchTree.insert(8)
myBinarySearchTree.insert(17)
myBinarySearchTree.insert(170)
const node = myBinarySearchTree.search(20)
// node = {left: Node, right: Node, value: 20}
