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

/**
 * A function used to simulate the computer thinking of its next move
 * @param milliseconds - The amount of the time the computer should spend thinking on a move
 */
export function sleep(milliseconds: number = 2000) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
