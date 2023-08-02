/**
 *
 * Selection sort
 * It is a simple sort algorithm where left side is sorted and right right is un sorted of array
 * [ sorted items,   unsorted items   ]
 * and index keep moving tell the end of array
 * It is a in place sort so items are exchanged places
 *
 *
 * @param array
 * @returns array
 */

const SelectionSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length; i++) {
    const toCompare = array[i];
    for (let j = i; j < array.length; j++) {
      const current = array[j];
      if (current < toCompare) {
        array[j] = toCompare;
        array[i] = current;
        break;
      }
    }
  }
  return array;
};

export default SelectionSort;
