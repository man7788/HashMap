import HashMap from './hashMap.js';

const test = HashMap(0.75);

// Initial test entries
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Overwrite test entries
// test.set('apple', 'green');
// test.set('banana', 'brown');
// test.set('carrot', 'yellow');
// console.log(test.get('apple'));
// console.log(test.get('banana'));
// console.log(test.get('carrot'));

// Set new entry beyond load factor
// console.log(test.length());
// console.log(test.getCapacity());
// test.set('moon', 'silver');
// console.log(test.has('moon'));
// console.log(test.length());
// console.log(test.getCapacity());

// Overwrite test entries after growth
// test.set('apple', 'gold');
// test.set('banana', 'silver');
// test.set('carrot', 'bronze');
// console.log(test.get('apple'));
// console.log(test.get('banana'));
// console.log(test.get('carrot'));

// Test get method
// console.log(test.get('dog'));
// console.log(test.get('hat'));
// console.log(test.get('jacket'));
// console.log(test.get('tom'));
// console.log(test.get('brat'));
// console.log(test.get('johnny'));

// Test has method
// console.log(test.has('elephant'));
// console.log(test.has('frog'));
// console.log(test.has('grape'));
// console.log(test.has('tom'));
// console.log(test.has('brat'));
// console.log(test.has('johnny'));

// Test remove method
// console.log(test.remove('elephant'));
// console.log(test.remove('frog'));
// console.log(test.remove('grape'));
// console.log(test.remove('tom'));
// console.log(test.remove('brat'));
// console.log(test.remove('johnny'));

// Test length method
// console.log(test.length());

// Test clear method
// test.clear();
// console.log(test.length());

// Test keys method
// console.log(test.keys());

// Test values method
// console.log(test.values());

// Test entries method
// console.log(test.entries());
