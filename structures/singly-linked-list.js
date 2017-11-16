// https://www.youtube.com/watch?v=njTh_OwMljA

function Node(data) {
  this.data = data
  this.next = null
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.numberOfValues = 0
  }

  add(data) {
    const node = new Node(data)

    if(!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.numberOfValues++
  }

  remove(data) {
    let previous = this.head
    let current = this.head

    while(current) {
      if(current.data === data) {
        // If this is the data, overwrite all we need to 
        //  to get rid of current Node
        if(current === this.head) {
          this.head = this.head.next
        }

        if(current === this.tail) {
          this.tail = previous
        }

        previous.next = current.next
        this.numberOfValues--
      } else {
        // Otherwise keep cycling through
        previous = current
      }
      // And onward we march
      // tail.next will always be null
      current = current.next
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;

    while(current) {
      if(current.data === toNodeData) {
        const node = new Node(data);
        if(current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
        }
        this.numberOfValues++;
      }
      current = current.next;
    }
  }
  
  traverse(fn) {
    let current = this.head;
    while(current) {
      if(fn) {
        fn(current);
      }
      current = current.next;
    }
  }

  length() {
    return this.numberOfValues;
  }

  printAll() {
    let string = '';
    let current = this.head

    // Example of whats going on:
    //  Say this.numberOfValues = 4
    //  (this.head.next.next.next === this.tail) // true

    while(current) {
      string += `${current.data} `
      current = current.next
    }

    console.log('All values in singly linked list: ', string.trim());
  }
}

export default SinglyLinkedList