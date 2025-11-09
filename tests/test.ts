import { StringUtils, ArrayUtils, NumberUtils, ObjectUtils } from '../src/index';

// TypeScript test file with proper type checking
function runTests(): void {
  console.log('🧪 Running TypeScript Tests...\n');

  // Test StringUtils
  console.log('=== String Utils Tests ===');
  const capitalizedResult: string = StringUtils.capitalize('hello world');
  console.log('✓ Capitalize "hello world":', capitalizedResult);
  
  const camelCaseResult: string = StringUtils.toCamelCase('hello world test');
  console.log('✓ CamelCase "hello world test":', camelCaseResult);
  
  const isBlankResult: boolean = StringUtils.isBlank('   ');
  console.log('✓ Is "   " blank?', isBlankResult);

  // Test ArrayUtils
  console.log('\n=== Array Utils Tests ===');
  const numbers: number[] = [1, 2, 2, 3, 3, 4];
  const uniqueResult: number[] = ArrayUtils.unique(numbers);
  console.log('✓ Unique [1, 2, 2, 3, 3, 4]:', uniqueResult);
  
  const chunkResult: number[][] = ArrayUtils.chunk([1, 2, 3, 4, 5], 2);
  console.log('✓ Chunk [1, 2, 3, 4, 5] by 2:', chunkResult);
  
  const flattenResult: number[] = ArrayUtils.flatten([[1, 2], [3, 4]]);
  console.log('✓ Flatten [[1, 2], [3, 4]]:', flattenResult);

  // Test NumberUtils
  console.log('\n=== Number Utils Tests ===');
  const randomResult: number = NumberUtils.randomBetween(1, 10);
  console.log('✓ Random between 1 and 10:', randomResult);
  
  const roundedResult: number = NumberUtils.roundTo(3.14159, 2);
  console.log('✓ Round 3.14159 to 2 decimals:', roundedResult);
  
  const isEvenResult: boolean = NumberUtils.isEven(4);
  console.log('✓ Is 4 even?', isEvenResult);
  
  const isOddResult: boolean = NumberUtils.isOdd(5);
  console.log('✓ Is 5 odd?', isOddResult);

  // Test ObjectUtils with proper types
  console.log('\n=== Object Utils Tests ===');
  interface TestObject {
    a: {
      b: {
        c: string;
      };
    };
    items: number[];
  }
  
  const testObj: TestObject = { 
    a: { b: { c: 'nested value' } }, 
    items: [1, 2, 3] 
  };
  
  const clonedObj: TestObject = ObjectUtils.deepClone(testObj);
  console.log('✓ Original object:', testObj);
  console.log('✓ Deep clone:', clonedObj);
  
  const nestedValue: any = ObjectUtils.getNestedProperty(testObj, 'a.b.c');
  console.log('✓ Get nested property "a.b.c":', nestedValue);
  
  const isEmptyResult: boolean = ObjectUtils.isEmpty({});
  console.log('✓ Is {} empty?', isEmptyResult);

  // Type safety demonstrations
  console.log('\n=== TypeScript Type Safety Demo ===');
  
  // This would cause a TypeScript error if uncommented:
  // const badResult: string = NumberUtils.randomBetween('1', '10'); // Error: string not assignable to number
  
  // Generic type inference works correctly
  const stringArray: string[] = ArrayUtils.unique(['a', 'b', 'b', 'c']);
  console.log('✓ Generic type inference with strings:', stringArray);
  
  console.log('\n✅ All TypeScript tests completed successfully!');
}

// Run the tests
runTests();