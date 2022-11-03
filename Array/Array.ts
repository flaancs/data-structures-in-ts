export class CustomArray<T> {
    length: number;
    data: Record<number, T>;

    constructor() {
        this.length = 0;
        this.data = {};
    }

    /**
     * Returns a specific element from the list based on the index
     * @param index index
     * @returns T
     */
    get(index: number): T {
        return this.data[index] || undefined;
    }

    /**
     * Add a new item to the list
     * @param item T
     * @returns Record<number, T>
     */
    push(item: T): Record<number, T> {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    /**
     * Remove the last element from the list
     * @returns T
     */
    pop(): T {
        this.length--;
        const lastItem = this.data[this.length];
        delete this.data[this.length];
        return lastItem;
    }

    /**
     * Returns the index in the list of a specific element
     * @param element T
     * @returns number
     */
    indexOf(element: T): number {
        const index = Object.values(this.data).findIndex(x => x === element);
        return index >= 0 ? index : undefined;
    }

    /**
     * Remove a specific item from the list
     * @param index number
     * @returns T
     */
    remove(index: number): T {
        const item = this.data[index];
        this.shiftIndex(index);
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    /**
     * Remove the first element of the list
     * @returns T
     */
    shift(): T {
        if (this.length === 0) return undefined;
        const firstItem = this.data[0];
        this.shiftIndex(0);
        delete this.data[this.length];
        this.length--;
        return firstItem;
    }

    /**
     * Add a new item at the beginning of the list
     * @param element T
     * @returns number
     */
    unshift(element: T): number {
        if(!element){
            return this.length;
        }

        if(this.length === 0){
            this.data[0] = element;
            this.length++;
            return this.length;
        }

        this.unshiftIndex(element);
        this.data[0] = element;
        this.length++;

        return this.length;
    }

    /**
     * Returns a string representation of the list
     * @returns string
     */
     toString(): string {
        return `(${this.length}) [${Object.values(this.data).join(", ")}]`
    } 

    /**
     * Decrements the following indices from the removed element
     * @private
     * @param index number
     */
     private shiftIndex(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }

    /**
     * Increase the following indices from the new element
     * @private
     * @param element T
     */
    private unshiftIndex(element: T) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
    }
}