'use strict';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var SuperArray = function () {
  function SuperArray() {
    classCallCheck(this, SuperArray);

    this.array = [];
  }

  createClass(SuperArray, [{
    key: 'add',
    value: function add(data) {
      this.array.push(data);
    }
  }, {
    key: 'remove',
    value: function remove(data) {
      this.array = this.array.filter(function (current) {
        return current !== data;
      });
    }
  }, {
    key: 'search',
    value: function search(data) {
      var foundData = this.array.indexOf(data);

      if (foundData) {
        return foundData;
      } else {
        return undefined;
      }
    }
  }, {
    key: 'print',
    value: function print() {
      return this.array.join('');
    }
  }]);
  return SuperArray;
}();

// https://www.youtube.com/watch?v=shs0KM3wKv8

var HashTable = function () {
  function HashTable(size) {
    classCallCheck(this, HashTable);

    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  createClass(HashTable, [{
    key: 'add',
    value: function add(key, value) {
      var hash = this.calculateHash(key);
      if (!this.values.hasOwnProperty(hash)) {
        this.values[hash] = [];
      }

      if (!this.values[hash].hasOwnProperty(key)) {
        this.numberOfValues++;
      }

      this.values[hash][key] = value;
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      var hash = this.calculateHash(key);
      if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        delete this.values[hash][key];
        this.numberOfValues--;
      }
    }
  }, {
    key: 'calculateHash',
    value: function calculateHash(key) {
      // https://en.wikipedia.org/wiki/Hash_function
      // Hashing is the transformation of a string of characters into a 
      // usually shorter fixed-length value or key that represents the 
      // original string. Hashing is used to index and retrieve items 
      // in a database because it is faster to find the item using the 
      // shorter hashed key than to find it using the original value.
      // 
      // So, this is a crappy hash function
      var hash = key.toString().length % this.size;
      return hash;
    }
  }, {
    key: 'search',
    value: function search(key) {
      var hash = this.calculateHash(key);
      if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        return this.values[hash];
      } else {
        return null;
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return this.numberOfValues;
    }
  }, {
    key: 'printAll',
    value: function printAll() {
      var string = '';
      for (var value in this.values) {
        // Becasue different values will have the same 
        //  key as our calculateHash function is bad
        for (var key in this.values[value]) {
          string += this.values[value][key] + ', ';
        }
      }
      console.log('Printing all in hash table: ', string.trim());
    }
  }]);
  return HashTable;
}();

// https://www.youtube.com/watch?v=njTh_OwMljA

function Node(data) {
  this.data = data;
  this.next = null;
}

var SinglyLinkedList = function () {
  function SinglyLinkedList() {
    classCallCheck(this, SinglyLinkedList);

    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }

  createClass(SinglyLinkedList, [{
    key: 'add',
    value: function add(data) {
      var node = new Node(data);

      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.numberOfValues++;
    }
  }, {
    key: 'remove',
    value: function remove(data) {
      var previous = this.head;
      var current = this.head;

      while (current) {
        if (current.data === data) {
          // If this is the data, overwrite all we need to 
          //  to get rid of current Node
          if (current === this.head) {
            this.head = this.head.next;
          }

          if (current === this.tail) {
            this.tail = previous;
          }

          previous.next = current.next;
          this.numberOfValues--;
        } else {
          // Otherwise keep cycling through
          previous = current;
        }
        // And onward we march
        // tail.next will always be null
        current = current.next;
      }
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(data, toNodeData) {
      var current = this.head;

      while (current) {
        if (current.data === toNodeData) {
          var node = new Node(data);
          if (current === this.tail) {
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
  }, {
    key: 'traverse',
    value: function traverse(fn) {
      var current = this.head;
      while (current) {
        if (fn) {
          fn(current);
        }
        current = current.next;
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return this.numberOfValues;
    }
  }, {
    key: 'printAll',
    value: function printAll() {
      var string = '';
      var current = this.head;

      // Example of whats going on:
      //  Say this.numberOfValues = 4
      //  (this.head.next.next.next === this.tail) // true

      while (current) {
        string += current.data + ' ';
        current = current.next;
      }

      console.log('All values in singly linked list: ', string.trim());
    }
  }]);
  return SinglyLinkedList;
}();

// http://bigocheatsheet.com/

console.log('//// Array');
console.log('////////////////////////////////////////////////////');
/* 
  Complexity

  Average      
  Access  Search  Insertion  Deletion
  O(1)    O(n)    O(1)       O(n)
*/
var superArray = new SuperArray();

console.log('Add to superArray (.add)');
superArray.add('a');
superArray.add('b');
superArray.add('c');
superArray.add('d');
superArray.add('e');
superArray.add('f');
superArray.add('g');
console.log(superArray.array);

console.log('\n\nRemove `b` (.remove)');

superArray.remove('b');

console.log(superArray.array);

// Get index of element at a position
console.log('\n\nFind element `e` (.search)');

var indexOfE = superArray.search('e');

console.log('superArray[indexOfE]', superArray.array[indexOfE]);
console.log('did we find e?', superArray.array[indexOfE] === 'e');

//  Print array
console.log('superArray.print(): ', superArray.print());

console.log('\n\n\n//// Hash Table');
console.log('////////////////////////////////////////////////////');
/* 

  Average      
  Access  Search  Insertion  Deletion
  -       O(1)    O(1)       O(1)
*/

var hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
console.log('hashTable.length()', hashTable.length());
hashTable.remove('second');
console.log("hashTable.search('fourth')", hashTable.search('fourth'));
hashTable.printAll();

console.log('\n\n\n//// Linked List');
console.log('////////////////////////////////////////////////////');

var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.printAll();
console.log('removed 2');
singlyLinkedList.remove(2);
singlyLinkedList.printAll();
console.log('put 2 back, but after 3');
singlyLinkedList.insertAfter(2, 3);
// So eveything branches off this.head with this.[node].next
//   console.log('singlyLinkedList', singlyLinkedList);
singlyLinkedList.printAll();

singlyLinkedList.traverse(function (node) {
  node.data = node.data + 10;
});
singlyLinkedList.printAll(); // => 12 13 14 15 16 17 18
singlyLinkedList.traverse(function (node) {
  console.log(node.data);
}); // => 12 13 14 15 16 17 18
console.log('length', singlyLinkedList.length());
