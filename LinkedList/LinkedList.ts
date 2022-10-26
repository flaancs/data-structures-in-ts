import { ListNode } from "./ListNode";

export class LinkedList {
    head: ListNode | null = null;

    constructor(head: ListNode | null = null) {
        this.head = head
    }

    /**
     * Returns the LinkedList size
     * @returns number
     */
    getSize(): number {
        let count = 0;
        let node = this.head;

        while (node) {
            count += 1;
            node = node.next
        }

        return count;
    }

    /**
     * Returns the last node of the list
     * @returns ListNode
     */
    getLast(): ListNode {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    /** 
     * Returns the first node of the list
     * @returns ListNode
     */
    getFirst() {
        return this.head;
    }

    /**
     * Remove all nodes from list
     */
    clear() {
        this.head = null;
    }
}