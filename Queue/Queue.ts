import { QueueNode } from "./QueueNode";

export class Queue<T> {
    first: QueueNode<T> | null;
    last: QueueNode<T> | null;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * Add a new item to the queue
     * @param val T
     * @returns Queue<T>
     */
    enqueue(val: T): Queue<T> {
        const node = new QueueNode(val);

        if (!this.size) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.size++;
        return this;
    }

    /**
     * Remove the first item on the queue
     * @returns Queue<T>
     */
    dequeue(): Queue<T> {
        if (!this.size) {
            return this;
        } else if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.size--;
        return this;
    }

    /**
     * Return the first item of the queue
     * @returns QueueNode<T>
     */
    peek(): QueueNode<T> {
        return this.first;
    }
}