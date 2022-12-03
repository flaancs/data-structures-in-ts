import { StackNode } from "./StackNode";

export class Stack<T> { 
    top: StackNode<T> | null; bottom: StackNode<T> | null; size: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    /**
     * Add a new item to the top of the stack
     * @param value T
     * @returns Stack<T>
     */
    push(value: T) {
        const node = new StackNode(value);

        if (!this.size) {
            this.top = node;
            this.bottom = node;
        } else {
            const holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }

        this.size++;

        return this;
    }

    /**
     * Returns the last item on the stack.
     * @returns StackNode<T>
     */
    peek() {
        return this.top;
    }

    /**
     * Remove the last item from the stack
     * @returns StackNode<T>
     */
    pop() {
        if (!this.size) {
            return this;
        } else if (this.size === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }

        this.size--;
        return this;
    }
}