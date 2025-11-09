const { StringUtils, ArrayUtils, NumberUtils, ObjectUtils } = require('../dist/index.js');

// Example usage of the utility library
console.log('=== String Utils Examples ===');
console.log('Capitalize "hello world":', StringUtils.capitalize('hello world'));
console.log('Convert to camelCase "hello world":', StringUtils.toCamelCase('hello world'));
console.log('Is "   " blank?', StringUtils.isBlank('   '));

console.log('\n=== Array Utils Examples ===');
console.log('Unique [1, 2, 2, 3, 3, 4]:', ArrayUtils.unique([1, 2, 2, 3, 3, 4]));
console.log('Chunk [1, 2, 3, 4, 5] by 2:', ArrayUtils.chunk([1, 2, 3, 4, 5], 2));
console.log('Flatten [[1, 2], [3, 4]]:', ArrayUtils.flatten([[1, 2], [3, 4]]));

console.log('\n=== Number Utils Examples ===');
console.log('Random between 1 and 10:', NumberUtils.randomBetween(1, 10));
console.log('Round 3.14159 to 2 decimals:', NumberUtils.roundTo(3.14159, 2));
console.log('Is 4 even?', NumberUtils.isEven(4));
console.log('Is 5 odd?', NumberUtils.isOdd(5));

console.log('\n=== Object Utils Examples ===');
const testObj = { a: { b: { c: 'nested value' } }, items: [1, 2, 3] };
console.log('Original object:', testObj);
console.log('Deep clone:', ObjectUtils.deepClone(testObj));
console.log('Get nested property "a.b.c":', ObjectUtils.getNestedProperty(testObj, 'a.b.c'));
console.log('Is {} empty?', ObjectUtils.isEmpty({}));