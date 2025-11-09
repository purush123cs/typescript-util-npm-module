# My TypeScript Utility Library

A modular collection of useful TypeScript utility functions for common programming tasks. Each utility category is organized in separate files for better maintainability and tree-shaking optimization.

## Features

✨ **Modular Design** - Each utility class in its own file  
🌳 **Tree-shakable** - Import only what you need  
📘 **Full TypeScript Support** - Complete type definitions included  
🧪 **Well Tested** - Comprehensive test coverage  
📦 **Multiple Import Patterns** - Flexible usage options  

## Installation

```bash
npm install typescript-util-npm-module
```

## Usage

### ES6 Modules (Recommended)

```typescript
// Import all utilities
import { StringUtils, ArrayUtils, NumberUtils, ObjectUtils } from 'typescript-util-npm-module';

// Import only specific utilities for better tree-shaking
import { StringUtils, ArrayUtils } from 'typescript-util-npm-module';

// Import types
import { ApiResponse, DeepPartial, Callback } from 'typescript-util-npm-module';

// Usage examples
const capitalized = StringUtils.capitalize('hello world'); // "Hello world"
const uniqueArray = ArrayUtils.unique([1, 2, 2, 3, 3, 4]); // [1, 2, 3, 4]
```

### CommonJS

```javascript
// Import all utilities
const { StringUtils, ArrayUtils, NumberUtils, ObjectUtils } = require('typescript-util-npm-module');

// Import specific utilities
const { StringUtils } = require('typescript-util-npm-module');

const camelCase = StringUtils.toCamelCase('hello world'); // "helloWorld"
```

## API Reference

### StringUtils

- `capitalize(str: string): string` - Capitalizes the first letter of a string
- `toCamelCase(str: string): string` - Converts a string to camelCase
- `isBlank(str: string): boolean` - Checks if a string is empty or contains only whitespace

### ArrayUtils

- `unique<T>(array: T[]): T[]` - Removes duplicate values from an array
- `chunk<T>(array: T[], size: number): T[][]` - Chunks an array into smaller arrays
- `flatten<T>(array: T[][]): T[]` - Flattens a nested array by one level

### NumberUtils

- `randomBetween(min: number, max: number): number` - Generates a random number between min and max
- `roundTo(num: number, decimals: number): number` - Rounds a number to specified decimal places
- `isEven(num: number): boolean` - Checks if a number is even
- `isOdd(num: number): boolean` - Checks if a number is odd

### ObjectUtils

- `deepClone<T>(obj: T): T` - Deep clones an object
- `isEmpty(obj: object): boolean` - Checks if an object is empty
- `getNestedProperty(obj: any, path: string): any` - Gets nested property value safely

## Examples

```typescript
import { StringUtils, ArrayUtils, NumberUtils, ObjectUtils } from 'typescript-util-npm-module';

// String utilities
console.log(StringUtils.capitalize('hello')); // "Hello"
console.log(StringUtils.toCamelCase('hello world')); // "helloWorld"
console.log(StringUtils.isBlank('   ')); // true

// Array utilities
console.log(ArrayUtils.unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(ArrayUtils.chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(ArrayUtils.flatten([[1, 2], [3, 4]])); // [1, 2, 3, 4]

// Number utilities
console.log(NumberUtils.randomBetween(1, 10)); // Random number between 1 and 10
console.log(NumberUtils.roundTo(3.14159, 2)); // 3.14
console.log(NumberUtils.isEven(4)); // true

// Object utilities
const obj = { a: { b: { c: 'value' } } };
console.log(ObjectUtils.getNestedProperty(obj, 'a.b.c')); // "value"
console.log(ObjectUtils.isEmpty({})); // true
```

## TypeScript Support

This library is written in TypeScript with a **modular architecture**:

```
src/
├── StringUtils.ts    # String manipulation utilities
├── ArrayUtils.ts     # Array processing utilities  
├── NumberUtils.ts    # Number utility functions
├── ObjectUtils.ts    # Object manipulation utilities
├── types.ts          # Shared type definitions
└── index.ts          # Main entry point (re-exports)
```

**Benefits:**
- 🎯 **Excellent IntelliSense** - Full type checking and autocomplete
- 🌳 **Better Tree-shaking** - Bundlers can eliminate unused utilities
- 🔧 **Easy Maintenance** - Each utility category in separate files
- 📈 **Scalable** - Easy to add new utilities or extend existing ones

### Available Types

```typescript
import { ApiResponse, DeepPartial, Callback } from 'typescript-util-npm-module';

// Generic API response interface
const response: ApiResponse<string[]> = {
  data: ['item1', 'item2'],
  success: true,
  timestamp: Date.now()
};

// Deep partial type for configuration objects
const partialConfig: DeepPartial<ComplexConfig> = {
  database: {
    host: 'localhost' // Other properties are optional
  }
};

// Generic callback type
const onComplete: Callback<string> = (result) => console.log(result);
```

## Building from Source

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run TypeScript tests (recommended)
npm test

# Run all compatibility tests
npm run test:all

# Run individual format tests
npm run test:js   # CommonJS compatibility
npm run test:esm  # ES6 module compatibility

# Watch for changes during development
npm run dev

# Clean build directory
npm run clean
```

## Contributing

We welcome contributions! The modular structure makes it easy to add new utilities or extend existing ones.

### Adding New Utilities

1. Fork the repository
2. Create a new utility file in `src/` (e.g., `src/DateUtils.ts`)
3. Export your utility class following the existing pattern
4. Add the export to `src/index.ts`
5. Add tests in `tests/`
6. Update this README

### Development Workflow

```bash
# Install dependencies
npm install

# Run tests in watch mode during development
npm run dev

# Run all tests
npm run test:all

# Build and verify
npm run build
```

### Project Structure

```
typescript_npm_module/
├── src/
│   ├── StringUtils.ts     # String utilities
│   ├── ArrayUtils.ts      # Array utilities
│   ├── NumberUtils.ts     # Number utilities
│   ├── ObjectUtils.ts     # Object utilities
│   ├── types.ts           # Shared types
│   └── index.ts           # Main entry point
├── tests/
│   └── test.ts            # TypeScript tests
├── examples/
│   ├── example.js         # CommonJS example
│   └── example.mjs        # ES6 module example
└── dist/                  # Compiled output
```

1. Create your feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.