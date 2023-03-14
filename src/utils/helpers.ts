/**
 * Takes a string and converts it to a number
 * @param n - An integer or floating point number as a string
 * @returns Will return the number representation of the string or it will return 0 along with a warning in the console if what was passed in isn't valid
 */
export function convertStringToNum(n: string): number {
  const num = Number(n);

  if (Number.isNaN(num)) {
    console.error(`${num} is not a number`);
    return 0;
  }

  return num;
}
