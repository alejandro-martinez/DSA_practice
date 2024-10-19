class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false; // To mark the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  print() {
    this._printTrie(this.root, "")
  }

  // Deep first search algorithm
  _printTrie(node, word) {
    if (node.isEndOfWord) {
      console.log(word);
    }
    for (let char in node.children) {
      this._printTrie(node.children[char], word + char);
    }
  }
}
 
// Example usage
const trie = new Trie();

trie.insertWord("apple");
trie.insertWord("banana");

trie.print();
/*console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true

trie.insert("app");
console.log(trie.search("app"));     // true
*/