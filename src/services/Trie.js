class Trie {

    constructor(listOfwords) {
        // todo send in list of words to be inserted
        this.root = new Node()
        this.size = 0;
        for (let word of listOfwords) {
            this.insert(word);
        }

    }
    // time complexity O(len of word)
    insert(word) {
        this.size++
        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new Node());
            }
            node = node.children.get(char);
        }

        node.isWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return true;
    }

}


class Node {
    constructor() {
        this.children = new Map();
        this.isWord = false;

    }
}
module.exports = Trie;

