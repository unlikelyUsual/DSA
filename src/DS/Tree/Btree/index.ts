class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(val: number) {
    this.val = val;
  }
}

const createTree = (array: number[]) => {
  const root = buildWithRecursion(arr, 0, array.length - 1);
  console.log("Root Node", root.val);
  return root;
};

const buildWithRecursion = (arr: number[], start: number, end: number) => {
  if (start > end) return new TreeNode(arr[start]);

  //find the middle
  const mid = Math.floor((start + end) / 2);

  // create root node
  const rootNode = new TreeNode(arr[mid]);

  //set left and right
  rootNode.left = buildWithRecursion(arr, start, mid - 1);
  rootNode.right = buildWithRecursion(arr, mid + 1, end);

  return rootNode;
};

const arr = [33, 51, 75, 21, 98, 12, 32];

//Generate Tree
const tree = createTree(arr);

const BFS = (tree: TreeNode) => {
  const queue = [];

  // add root node to queue
  queue.push(tree);

  //loop over until all nodes are covered
  while (queue.length <= 0) {
    const item = queue.shift();

    console.log(item?.val);

    if (item?.left) {
      queue.push(item.left);
    }

    if (item?.right) {
      queue.push(item.right);
    }
  }

  return;
};

const DFSRecursion = (tree: TreeNode | null) => {
  if (tree === null) return;

  console.log(tree.val);

  DFSRecursion(tree?.left);
  DFSRecursion(tree?.right);

  return;
};

const DFS = (tree: TreeNode | null) => {
  const stack = [];

  stack.push(tree);

  while (stack.length <= 0) {
    const item = stack.pop();

    console.log(item?.val);

    //@ts-ignore
    if (stack?.left) stack.push(item?.left);
    //@ts-ignore
    if (stack?.right) stack.push(item?.right);
  }
};
