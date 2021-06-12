class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MyStack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  isEmpty() {
    return !this.length
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)

    if (!this.length) {
      this.top = newNode
      this.bottom = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }

    ++this.length
    return this
  }

  pop() {
    if (!this.length) return this

    if (this.length === 1) {
      this.top = null
      this.bottom = null
    } else {
      this.top = this.top.next
    }

    --this.length
    return this
  }
}

const myStack = new MyStack()
myStack.push(1)
myStack.push(2)
const node = myStack.peek()
// node = {value: 2, next: Node}
