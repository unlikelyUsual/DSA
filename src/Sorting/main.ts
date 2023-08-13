import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import { performance } from "perf_hooks";
import mergeSort from "./mergeSort";

const unSortedArr = [98, 32, 89, 1, 42, 72, 62, 33, 47, 29];

const start = performance.now();

console.log(SelectionSort(unSortedArr));

const selectionEnd = performance.now();

console.log(`Time taken in selection sort : ${selectionEnd - start} ms`);

console.log(BubbleSort(unSortedArr));

const bubbleEnd = performance.now();

console.log(`Time taken in bubble sort : ${bubbleEnd - selectionEnd} ms`);

console.log(InsertionSort(unSortedArr));

const insertionEnd = performance.now();

console.log(`Time taken in insertion sort : ${insertionEnd - bubbleEnd} ms`);

console.log(mergeSort(unSortedArr));

const mergeEnd = performance.now();

console.log(`Time taken in merge sort : ${mergeEnd - insertionEnd} ms`);
