import HashSet from './hashSet.js';

const test = new HashSet(0.75);

// Initial test entries
test.set('apple');
test.set('banana');
test.set('carrot');
test.set('dog');
test.set('elephant');
test.set('frog');
test.set('grape');
test.set('hat');
test.set('ice cream');
test.set('jacket');
test.set('kite');
test.set('lion');

// Overwrite test entries
// test.set('apple');
// test.set('banana');
// test.set('carrot');
// console.log(test.get('apple'));
// console.log(test.get('banana'));
// console.log(test.get('carrot'));

// Set new entry beyond load factor
console.log(test.length());
console.log(test.getCapacity());
test.set('moon', 'silver');
console.log(test.has('moon'));
console.log(test.length());
console.log(test.getCapacity());

// Overwrite test entries after growth
// test.set('apple');
// test.set('banana');
// test.set('carrot');
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
