import { BinarySearchTree } from "../BinarySearchTree";

describe('BinarySearchTree', () => {
    it('Should create an empty tree', () => {
        const tree = new BinarySearchTree();
        expect(tree.root).toBeNull();
    });

    it('Should add a new item to the tree and set it as root', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);

        expect(tree.root.value).toEqual(10);
    });

    it('Should insert new items into the tree', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(7);
        tree.insert(22);
        tree.insert(170);
        tree.insert(18);
        tree.insert(9);

        expect(tree.root.value).toEqual(10);
        expect(tree.root.left.value).toEqual(7);
        expect(tree.root.left.left).toBeNull();
        expect(tree.root.left.right.value).toEqual(9);
        expect(tree.root.right.value).toEqual(22);
        expect(tree.root.right.left.value).toEqual(18);
        expect(tree.root.right.right.value).toEqual(170);

        //           10
        //         /    \
        //      7        22
        //    /   \     /   \
        // null    9  18    170
    });

    it('Should search a specific item of the tree', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(7);
        tree.insert(22);
        tree.insert(170);
        tree.insert(18);
        tree.insert(9);

        const node = tree.search(22);
        expect(node.value).toEqual(22);
        expect(node.left.value).toEqual(18);
        expect(node.right.value).toEqual(170);

        //           10
        //         /    \
        //      7        22*
        //    /   \     /   \
        // null    9  18*  170*
    });
    
    it('Should return undefined when searching for a non-existent item in the tree', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(7);
        tree.insert(22);

        const node = tree.search(2022);
        expect(node).toBeUndefined();
    });
});