import Stack from "./Stack";

const stack = new Stack();
stack.add("Item 1");
stack.add("Item 2");
stack.add("Item 3");
console.log(stack.remove());
stack.add("Item 4");
console.log(stack.peek());
