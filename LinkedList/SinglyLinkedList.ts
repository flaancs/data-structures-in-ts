import { ListNode } from "./ListNode";

export class SinglyLinkedList {
    head: ListNode;
    tail: ListNode;
    size: number;

    constructor(value: any) {
        const newNode = new ListNode(value);

        this.head = newNode;
        this.tail = this.head;
        this.size = 1;
    }

    /**
     * Add a new node to the end of the list
     * @param value any
     * @returns SinglyLinkedList
     */
    append(value: any): SinglyLinkedList {
        const newNode = new ListNode(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;

        return this;
    }

    /**
     * Add a new node to the beginning of the list
     * @param value any
     * @returns SinglyLinkedList
     */
    prepend(value: any): SinglyLinkedList {
        const newNode = new ListNode(value);

        newNode.next = this.head;
        this.head = newNode;
        this.size++;

        return this;
    }

    /**
     * Add a new node to the list in a specific index
     * @param index number
     * @param value any
     * @returns SinglyLinkedList
     */
    insert(index: number, value: any): SinglyLinkedList {
        if (index >= this.size) {
            return this.append(value);
        }
        
        const newNode = new ListNode(value);
        const firstPointer = this.getIndex(index - 1);
        const holdingPointer = firstPointer.next;
        
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.size++;

        return this;
    }

    /**
     * Delete a node based on the specified index
     * @param index number
     * @returns SinglyLinkedList
     */
    remove(index: number): SinglyLinkedList {
        if (index > this.size) {
            return undefined;
        }

        let previousNode: ListNode;
        const previousNodeIndex = index - 2;

        if (previousNodeIndex < 0) {
            previousNode = this.head;
        } else {
            previousNode = this.getIndex(previousNodeIndex);
        }

        const nodeToRemove = previousNode.next;
        const holdingPointer = nodeToRemove.next;

        previousNode.next = holdingPointer;
        this.size--;

        return this;
    }

    /**
     * Returns the node located at the specified index
     * @param index number
     * @returns ListNode
     */
    getIndex(index: number): ListNode {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    /**
     * Returns the list size
     * @returns number
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Returns the first node
     * @returns ListNode
     */
    getHead(): ListNode {
        return this.head;
    }

    /**
     * Returns the last node
     * @returns ListNode
     */
    getTail(): ListNode {
        return this.tail;
    }
}
