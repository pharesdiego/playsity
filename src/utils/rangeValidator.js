// 0 <= n <= 52
const inRange = (n) => 0 <= n && n <= 52;

/**
 * @description used for making sure that the start and end time are correct
 * @returns array, where first item (0) will be the min number and second item ([1]) will be the max number
 */
const rangeValidator = (start, end) => {
  return [inRange(start) ? start : '0', inRange(end) ? end : '52'].sort((a, b) => +a - +b)
}

export default rangeValidator;