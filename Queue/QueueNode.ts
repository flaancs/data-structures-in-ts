export class QueueNode<T> {
    value: any; next: QueueNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}