/**
 *
 * Selection sort
 * It is a simple sort algorithm where left side is sorted and right right is un sorted of array
 * [ sorted items,   unsorted items   ]
 * and index keep moving till the end of array
 * It is a in place sort so items are exchanged places
 *
 * Time complexity
 * Best case : o(n)
 * Worst case : o(n^2)
 *
 * @param array
 * @returns array
 */

const SelectionSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    const temp = array[smallest];
    array[smallest] = array[i];
    array[i] = temp;
  }
  return array;
};

export default SelectionSort;
