export default class Stack {
  private stack: any[] = [];
  private size: number = 0;

  add = (item: any): void => {
    this.stack.push(item);
    this.size++;
  };

  remove = (): any => {
    if (this.size > 0) {
      const item = this.stack.pop();
      this.size--;
      return item;
    }

    return null;
  };

  peek = (): any => {
    return this.stack[this.size];
  };

  clear = () => {
    this.stack = [];
    this.size = 0;
  };
}
