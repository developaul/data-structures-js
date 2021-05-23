class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  // Add an item to the end
  push(item) {
    this.data[this.length] = item
    ++this.length
    return this.data
  }

  // Remove an item from the end
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    --this.length
    return lastItem
  }

  // Add an item to the beginning
  unShift(item) {
    this.unShiftIndex(item, 0)
    return this.data
  }

  // Remove an item from the beginning
  shift() {
    const firstItem = this.data[0]
    this.shiftIndex(0)
    return firstItem
  }

  // Add an element in a position
  add(item, index) {
    this.unShiftIndex(item, index)
    return this.data
  }

  // Remove an element in a position
  delete(index) {
    const item = this.data[index]
    this.shiftIndex(index)
    return item
  }

  unShiftIndex(item, index) {
    const savedData = { ...this.data }

    for (let i = index; i < this.length; ++i)
      this.data[i + 1] = savedData[i]

    this.data[index] = item
    ++this.length
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; ++i)
      this.data[i] = this.data[i + 1]

    delete this.data[this.length - 1]
    --this.length
  }
}

const myArray = new MyArray()
myArray.push(20)
myArray.push(50)
myArray.push(80)
myArray.push(100)
myArray.pop()
myArray.unShift(10)
myArray.shift()
myArray.add(60, 2)
myArray.delete(2)
// data = { 0: 20, 1: 50, 2: 80 }