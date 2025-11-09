/**
 * String utility functions
 */
export class StringUtils {
  /**
   * Capitalizes the first letter of a string
   */
  static capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  /**
   * Converts a string to camelCase
   */
  static toCamelCase(str: string): string {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
  }

  /**
   * Checks if a string is empty or contains only whitespace
   */
  static isBlank(str: string): boolean {
    return !str || str.trim().length === 0;
  }
}