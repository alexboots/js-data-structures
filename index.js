// http://bigocheatsheet.com/

// Array
////////////////////////////////////////////////////
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

// Hash Table 
////////////////////////////////////////////////////
/* 

  Average      
  Access  Search  Insertion  Deletion
  -       O(1)    O(1)       O(1)
*/

// import HashTable from './structures/hash-table'
