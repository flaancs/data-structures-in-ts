import { TreeNode } from "./TreeNode";

export class BinarySearchTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    /**
     * Add a new item to the binary search tree
     * @param value T
     * @returns BinarySearchTree<T>
     */
    insert(value: T): BinarySearchTree<T> {
        const node = new TreeNode(value);

        if (this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                let cursor = "left";
                if (value > currentNode.value) cursor = "right";

                if (!currentNode[cursor]) {
                    currentNode[cursor] = node;
                    return this;
                } else {
                    currentNode = currentNode[cursor];
                }
            }
        }
    }


    /**
     * Search for a specific item in the tree, returns undefined if the item doesn't exists
     * @param value T
     * @returns TreeNode<T> | undefined
     */
    search(value: T): TreeNode<T> | undefined {
        if (!this.root) return undefined;
        let currentNode = this.root;

        while (true) {
            let cursor = "left";

            if (currentNode.value === value) return currentNode;
            else {
                if (value > currentNode.value) cursor = "right";
                if (!currentNode[cursor]) return undefined;
                currentNode = currentNode[cursor];
            };
        }
    }
}