/**
 *
 * Merge Sort
 * https://www.youtube.com/watch?v=4VqmGXwpLqc&ab_channel=MichaelSambol
 *
 *
 * @param array
 */

const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) return array;

  const div = array.length / 2;
  const arr1 = mergeSort(array.slice(0, div));
  const arr2 = mergeSort(array.slice(div, array.length));
  arr1.sort();
  arr2.sort();
  return arr1.concat(arr2);
};

export default mergeSort;
