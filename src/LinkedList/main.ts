import LinkedList from "./LinkedList";

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list.get());
list.delete(4);
console.log(list.get());
