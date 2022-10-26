export class ListNode {
    val: any = null;
    next: ListNode | null = null;

    constructor(val: any) {
        this.val = val;
    }

    addNext(next: ListNode) {
        this.next = next;
    }
}
