class MyHashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  hashMethod(key) {
    let hash = 0
    for (let i = 0; i < key.length; ++i)
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    return hash
  }

  set(key, value) {
    const address = this.hashMethod(key)
    if (!this.data[address]) this.data[address] = []
    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if (!currentBucket) return undefined
    for (let i = 0; i < currentBucket.length; ++i)
      if (currentBucket[i][0] === key) return currentBucket[i][1]
  }

  delete(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if (!currentBucket) return undefined
    for (let i = 0; i < currentBucket.length; ++i)
      if (currentBucket[i][0] === key) return currentBucket.splice(0, 1)
  }
}

const myHashTable = new MyHashTable(50)

myHashTable.set('Paul', 2001)
myHashTable.set('Diego', 1990) // collision
myHashTable.set('Mariana', 1998) // collision
myHashTable.set('Bigotes', 2000)

myHashTable.delete('Diego')
