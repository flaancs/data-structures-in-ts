export class StackNode<T> {
    value: any; next: StackNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}