/**
 *
 * Insertion Sort
 * explanation : https://www.youtube.com/watch?v=8mJ-OhcfpYg&ab_channel=BroCode
 * So basically consider first element sorted
 * We start with second element, compare all the left elements if they are greater than current index element then move them to the right side of array
 * we do this until no elements are left and number is smaller then current item
 * @param array
 * @returns array
 */

const InsertionSort = (array: number[]): number[] => {
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    for (let j = i - 1; j > 0; j--) {
      const leftElement = array[j];
      if (item < leftElement) {
        array[j] = item;
        array[j + 1] = leftElement;
      }
    }
  }
  return array;
};

export default InsertionSort;
