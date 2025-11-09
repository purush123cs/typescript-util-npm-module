# Publishing Guide

This guide explains how to publish your **modular TypeScript npm module** to the npm registry.

## About This Package

This is a **modular TypeScript utility library** with the following structure:

```
src/
├── StringUtils.ts    # String manipulation utilities
├── ArrayUtils.ts     # Array processing utilities  
├── NumberUtils.ts    # Number utility functions
├── ObjectUtils.ts    # Object manipulation utilities
├── types.ts          # Shared type definitions
└── index.ts          # Main entry point (barrel exports)
```

**Benefits for consumers:**
- 🌳 **Tree-shakable** - Bundlers can eliminate unused utilities
- 📘 **Full TypeScript support** - Complete type definitions
- 🎯 **Modular imports** - Import only what you need

## Prerequisites

1. Make sure you have an npm account: https://www.npmjs.com/signup
2. Login to npm in your terminal: `npm login`

## Pre-publish Checklist

1. **Update package.json metadata:**
   - Change the `name` to your desired package name (must be unique on npm)
   - Update `author` with your name and email
   - Update `repository` URLs to your actual GitHub repository
   - Update `homepage` and `bugs` URLs accordingly

2. **Test your package locally:**
   ```bash
   npm test
   npm run build
   ```

3. **Check what will be published:**
   ```bash
   npm pack --dry-run
   ```

## Publishing Steps

1. **Build the package:**
   ```bash
   npm run build
   ```

2. **Test the package (optional but recommended):**
   ```bash
   npm link
   # In another project directory:
   npm link my-typescript-utility-lib
   ```

3. **Publish to npm:**
   ```bash
   npm publish
   ```

   For scoped packages (e.g., @username/package-name):
   ```bash
   npm publish --access public
   ```

## Versioning

Use semantic versioning for your package:
- `npm version patch` - for bug fixes (1.0.0 → 1.0.1)
- `npm version minor` - for new features (1.0.0 → 1.1.0)
- `npm version major` - for breaking changes (1.0.0 → 2.0.0)

## Local Testing with npm link

To test your package locally before publishing:

1. In your package directory:
   ```bash
   npm link
   ```

2. In a test project:
   ```bash
   npm link my-typescript-utility-lib
   ```

3. Use it in your test project:
   ```javascript
   const Utils = require('my-typescript-utility-lib');
   console.log(Utils.String.capitalize('test'));
   ```

## Usage in Consumer Applications

Once published, consumers can install and use your package:

### Installation
```bash
npm install my-typescript-utility-lib
```

### CommonJS Usage
```javascript
// Import all utilities
const { StringUtils, ArrayUtils, NumberUtils, ObjectUtils } = require('my-typescript-utility-lib');

// Import specific utilities for better performance
const { StringUtils } = require('my-typescript-utility-lib');

console.log(StringUtils.capitalize('hello'));
console.log(ArrayUtils.unique([1, 2, 2, 3]));
```

### ES6 Module Usage
```javascript
// Import all utilities
import { StringUtils, ArrayUtils, NumberUtils, ObjectUtils } from 'my-typescript-utility-lib';

// Import only what you need (better for tree-shaking)
import { StringUtils, NumberUtils } from 'my-typescript-utility-lib';

console.log(StringUtils.capitalize('hello'));
console.log(NumberUtils.randomBetween(1, 10));
```

### TypeScript Usage
```typescript
// Import utilities and types
import { StringUtils, ArrayUtils, ApiResponse, DeepPartial } from 'my-typescript-utility-lib';

// Full type safety
const result: string = StringUtils.capitalize('hello');
const unique: number[] = ArrayUtils.unique([1, 2, 2, 3]);

// Use provided types
const response: ApiResponse<string[]> = {
  data: ['item1', 'item2'],
  success: true,
  timestamp: Date.now()
};
```

## Important Notes

- The `prepublishOnly` script will automatically build your package before publishing
- **Modular structure** means better tree-shaking for consumers
- Each utility file compiles to its own JavaScript module for optimal loading
- Type definitions are generated for each module automatically
- Make sure your package name is unique on npm
- Consider using a scoped package name (e.g., @yourusername/package-name) if the desired name is taken
- Always test your package thoroughly before publishing
- The **barrel export pattern** in `src/index.ts` maintains backward compatibility while enabling tree-shaking
- Read npm's publishing guidelines: https://docs.npmjs.com/packages-and-modules/

## Build Output Structure

After building, your `dist/` folder will contain:

```
dist/
├── StringUtils.js + .d.ts    # Compiled string utilities
├── ArrayUtils.js + .d.ts     # Compiled array utilities  
├── NumberUtils.js + .d.ts    # Compiled number utilities
├── ObjectUtils.js + .d.ts    # Compiled object utilities
├── types.js + .d.ts          # Compiled type definitions
└── index.js + .d.ts          # Main entry point
```

This modular output allows bundlers to:
- Import only needed utilities (tree-shaking)
- Load utilities separately if needed
- Optimize bundle sizes for end users