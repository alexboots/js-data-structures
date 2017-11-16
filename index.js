// http://bigocheatsheet.com/

console.log('//// Array');
console.log('////////////////////////////////////////////////////');
/* 
  Complexity

  Average      
  Access  Search  Insertion  Deletion
  O(1)    O(n)    O(1)       O(n)
*/
import SuperArray from './structures/array'

let superArray = new SuperArray()

console.log('Add to superArray (.add)');
superArray.add('a')
superArray.add('b')
superArray.add('c')
superArray.add('d')
superArray.add('e')
superArray.add('f')
superArray.add('g')
console.log(superArray.array);

console.log('\n\nRemove `b` (.remove)');

superArray.remove('b')

console.log(superArray.array);


// Get index of element at a position
console.log('\n\nFind element `e` (.search)')

let indexOfE = superArray.search('e')

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

import HashTable from './structures/hash-table'

const hashTable = new HashTable(3)
hashTable.add('first', 1)
hashTable.add('second', 2)
hashTable.add('third', 3)
hashTable.add('fourth', 4)
hashTable.add('fifth', 5)
console.log('hashTable.length()', hashTable.length());
hashTable.remove('second')
console.log("hashTable.search('fourth')", hashTable.search('fourth'));
hashTable.printAll()


console.log('\n\n\n//// Linked List');
console.log('////////////////////////////////////////////////////');

import SinglyLinkedList from './structures/singly-linked-list'
const singlyLinkedList =  new SinglyLinkedList()

singlyLinkedList.add(1)
singlyLinkedList.add(2)
singlyLinkedList.add(3)
singlyLinkedList.add(4)
singlyLinkedList.printAll()
console.log('removed 2');
singlyLinkedList.remove(2)
singlyLinkedList.printAll()
console.log('put 2 back, but after 3');
singlyLinkedList.insertAfter(2, 3);
// So eveything branches off this.head with this.[node].next
//   console.log('singlyLinkedList', singlyLinkedList);
singlyLinkedList.printAll()

singlyLinkedList.traverse(node => { node.data = node.data + 10; });
singlyLinkedList.printAll(); // => 12 13 14 15 16 17 18
singlyLinkedList.traverse(node => { console.log(node.data); }); // => 12 13 14 15 16 17 18
console.log('length', singlyLinkedList.length())



