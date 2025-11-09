/**
 * Array utility functions
 */
export class ArrayUtils {
  /**
   * Removes duplicate values from an array
   */
  static unique<T>(array: T[]): T[] {
    return [...new Set(array)];
  }

  /**
   * Chunks an array into smaller arrays of specified size
   */
  static chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  /**
   * Flattens a nested array by one level
   */
  static flatten<T>(array: T[][]): T[] {
    return array.reduce((acc, val) => acc.concat(val), [] as T[]);
  }
}