/**
 *
 *
 *  In bubble sort the highest number bubble to the end of the array
 * We compare consecutive items in a array and change if left element is greater then right
 * We do this till the last placed item in array
 *
 * Time complexity
 * Best case : O(n^2)
 * Worst case : O(n^2)
 *
 * @param array
 * @returns array
 */

const BubbleSort = (array: number[]): number[] => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      const left = array[j];
      const right = array[j + 1];
      if (left > right) {
        array[j] = right;
        array[j + 1] = left;
      }
    }
  }
  return array;
};

export default BubbleSort;
