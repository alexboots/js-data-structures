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


