class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MyQueue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)

    if (!this.length) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    ++this.length
    return this
  }

  dequeue() {
    if (!this.length) return this

    if (!this.first.next) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }

    --this.length
    return this
  }
}

const myQueue = new MyQueue()
myQueue.enqueue(0)
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.dequeue()
const node = myQueue.peek()
// node = {value: 1, next: Node}
