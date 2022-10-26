export class Stack {
    data: any[];

    constructor() {
        this.data = [];
    }

    /** 
    * Add a new item to the Stack
    * @param value: any
    */
    push(value: any) {
        this.data.push(value);
    }

    /**
     * Remove the last item fron the stack and returns it
     * @returns any
     */
    pop() {
        if (this.isEmpty()) return null;
        return this.data.pop();
    }

    /**
     * Returns true if the stack is empty
     * @returns boolean
     */
    isEmpty() {
        return this.data.length === 0;
    }

    /**
     * Returns a string representation of the stack
     * @returns string
     */
    toString() {
        return this.toArray().map(x => `${x}`).join(",");
    }

    /**
     * Returns an array representation of a stack
     * @returns any
     */
     toArray(): any[] {
        return [...this.data].reverse();
    }
}