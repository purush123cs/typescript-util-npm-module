/**
 * Number utility functions
 */
export class NumberUtils {
  /**
   * Generates a random number between min and max (inclusive)
   */
  static randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Rounds a number to specified decimal places
   */
  static roundTo(num: number, decimals: number): number {
    return Number(num.toFixed(decimals));
  }

  /**
   * Checks if a number is even
   */
  static isEven(num: number): boolean {
    return num % 2 === 0;
  }

  /**
   * Checks if a number is odd
   */
  static isOdd(num: number): boolean {
    return num % 2 !== 0;
  }
}