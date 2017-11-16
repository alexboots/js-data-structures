class SuperArray {
  constructor() {
    this.array = []
  }

  add(data) {
    this.array.push(data)
  }

  remove(data) {
    this.array = this.array.filter(current => {
      return current !== data
    })
  }

  search(data) {
    const foundData = this.array.indexOf(data)

    if(foundData) {
      return foundData
    } else {
      return undefined
    }
  }

  print() {
    return this.array.join('')
  }
}

export default SuperArray