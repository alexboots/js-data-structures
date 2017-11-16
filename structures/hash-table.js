// https://www.youtube.com/watch?v=shs0KM3wKv8

class HashTable {
  constructor(size) {
    this.values = {}
    this.numberOfValues = 0;
    this.size = size;
  }

  add(key, value) {
    const hash = this.calculateHash(key)
    if(!this.values.hasOwnProperty(hash)) {
      this.values[hash] = []
    }
    
    if(!this.values[hash].hasOwnProperty(key)) {
      this.numberOfValues++
    }

    this.values[hash][key] = value
  }

  remove(key) {
    const hash = this.calculateHash(key)
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      delete this.values[hash][key]
      this.numberOfValues--
    }
  }

  calculateHash(key) {
    // https://en.wikipedia.org/wiki/Hash_function
    // Hashing is the transformation of a string of characters into a 
    // usually shorter fixed-length value or key that represents the 
    // original string. Hashing is used to index and retrieve items 
    // in a database because it is faster to find the item using the 
    // shorter hashed key than to find it using the original value.
    // 
    // So, this is a crappy hash function
    const hash = key.toString().length % this.size;
    return hash
  }

  search(key) {
    const hash = this.calculateHash(key)
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash]
    } else { 
      return null
    }
  }

  length() {
    return this.numberOfValues;
  }

  printAll () {
    let string = ''
    for(const value in this.values) {
      // Becasue different values will have the same 
      //  key as our calculateHash function is bad
      for(const key in this.values[value]) {
        string += `${this.values[value][key]}, `
      }
    }
    console.log('Printing all in hash table: ', string.trim())
  }
}

export default HashTable 