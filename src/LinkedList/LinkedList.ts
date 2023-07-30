export default class LinkedList {
  private start: Node | null = null;
  private end: Node | null = null;
  private size: number = 0;

  public add = (value: unknown): Node => {
    const node = new Node(value, null);
    this.size++;
    // Start the linked list
    if (!this.start) {
      this.start = node;
      this.end = node;
      return node;
    }

    // Add to existing link list
    this.end?.setNext(node);
    this.end = node;
    return node;
  };

  public get = (): unknown[] => {
    const values: unknown[] = [this.start?.getValue()];
    let next = this.start?.getNext();
    //fetch till next is null
    while (next) {
      values.push(next.getValue());
      next = next.getNext();
    }
    return values;
  };

  public delete = (item: unknown) => {
    //If only one node is present
    if (this.size === 1) {
      this.start = null;
      this.end = null;
      return;
    }

    //Keep both next and prev
    let current = this.start?.getNext();
    let prev = null;
    while (current) {
      if (current.getValue() === item) {
        prev?.setNext(current.getNext());
        break;
      }
      prev = current;
      current = current.getNext();
    }

    return;
  };
}

class Node {
  private value: unknown = null;
  private next: Node | null = null;

  constructor(value: unknown, next: Node | null) {
    this.next = next;
    this.value = value;
  }

  setNext = (next: Node | null) => {
    this.next = next;
  };

  getValue = (): unknown => {
    return this.value;
  };

  getNext = (): Node | null => {
    return this.next;
  };
}
