import { ListNode } from "./ListNode";

export class LinkedList {
    head: ListNode | null = null;

    constructor(head: ListNode | null = null) {
        this.head = head
    }

    getSize() {
        let count = 0;
        let node = this.head;

        while (node) {
            count += 1;
            node = node.next
        }

        return count;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }

    clear() {
        this.head = null;
    }
}