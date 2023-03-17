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

/**
 * Generates an array of numbers between the `start` (inclusive) and `end` (exclusive) values, incrementing by `step` amount at each iteration.
 *
 * If only one argument is provided, the function generates an array of numbers from 0 up to the `start` value.
 *
 * @param start - The starting value of the range.
 * @param end - The ending value of the range.
 * @param step - The increment amount between each value of the range. Defaults to 1.
 *
 * @returns An array of numbers between `start` (inclusive) and `end` (exclusive), incremented by `step` amount at each iteration.
 *
 * @example
 * range(5); // Returns [0, 1, 2, 3, 4]
 * range(1, 6, 2); // Returns [1, 3, 5]
 */
export const range = (start: number, end?: number, step: number = 1) => {
  let output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
