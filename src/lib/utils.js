
/**
 * Combines class names into a single string
 * @param {string[]} classes - An array of class names
 * @returns {string} A string of combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
