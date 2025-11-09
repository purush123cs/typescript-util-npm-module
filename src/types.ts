/**
 * Shared type definitions for the utility library
 */

/**
 * Generic API response interface
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: number;
}

/**
 * Generic callback function type
 */
export type Callback<T> = (data: T) => void;

/**
 * Makes all properties in T optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};