import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import { performance } from "perf_hooks";

const unSortedArr = [98, 32, 89, 1, 42, 72, 62, 33, 47, 29];

const start = performance.now();
//Call different sorting
console.log(SelectionSort(unSortedArr));

const selectionEnd = performance.now();

console.log(`Time taken in selection sort : ${selectionEnd - start} ms`);

console.log(BubbleSort(unSortedArr));

const bubbleEnd = performance.now();

console.log(`Time taken in bubble sort : ${bubbleEnd - selectionEnd} ms`);

console.log(InsertionSort(unSortedArr));

const insertionEnd = performance.now();

console.log(`Time taken in insertion sort : ${insertionEnd - bubbleEnd} ms`);
