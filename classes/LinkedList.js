class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    ++this.length
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    ++this.length
    return this
  }

  getNodeByIndex(index) {
    let currentNode = this.head
    for (let counter = 0; counter !== index; ++counter)
      currentNode = currentNode.next
    return currentNode
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value)
    const newNode = new Node(value)
    const firstPointer = this.getNodeByIndex(--index)
    newNode.next = firstPointer.next
    firstPointer.next = newNode
    ++this.length
    return this
  }

  search(index) {
    return this.getNodeByIndex(index)
  }

  delete(index) {
    if (index === 0) this.head = this.head.next
    else {
      const firstPointer = this.getNodeByIndex(--index)
      firstPointer.next = firstPointer.next.next
    }
    --this.length
    return this
  }
}

const mySinglyLinkedList = new MySinglyLinkedList(1)
mySinglyLinkedList.append(2)
mySinglyLinkedList.append(3)
mySinglyLinkedList.append(4)
mySinglyLinkedList.append(5)
mySinglyLinkedList.prepend(0)
mySinglyLinkedList.insert(2, 1.5)
const node = mySinglyLinkedList.search(3)
// node = { value: 2,next: Node }
