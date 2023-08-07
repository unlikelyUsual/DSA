import SelectionSort from "./SelectionSort";
import { performance, PerformanceObserver } from "perf_hooks";

const unSortedArr = [98, 32, 89, 1, 42, 72, 62, 33, 47, 29];

const start = performance.now();
//Call different sorting
console.log(SelectionSort(unSortedArr));

const selectionEnd = performance.now();

console.log(`Time taken in selection sort : ${selectionEnd - start} ms`);
