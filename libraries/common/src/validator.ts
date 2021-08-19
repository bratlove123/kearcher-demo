/**
 * String Validator
 */
export const stringValidator = {
  /**
   * Is not empty string
   *
   * @param str unknown
   * @returns boolean
   */
  isNotEmpty: (str: unknown): boolean => {
    return str && typeof str.valueOf() === 'string' && str !== '';
  },
};
