// Define the TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    const insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        // insert into the left
        if (!node.left) {
          node.left = newNode;
        } else {
          return insertNode(node.left, newNode);
        }
      } else {
        // insert into the right
        if (!node.right) {
          node.right = newNode;
        } else {
          return insertNode(node.right, newNode);
        }
      }
      return;
    }
    return insertNode(this.root, newNode);
  }

  // In-order traversal (Left, Root, Right)
  inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
  }

}

// Example usage
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log("In-order traversal:");
tree.inOrderTraversal();  // Output: 3, 5, 7, 10, 15