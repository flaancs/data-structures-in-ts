export class ListNode {
    val: any = null;
    next: ListNode | null = null;

    constructor(val: any) {
        this.val = val;
    }

    /**
     * Links the next node to the current node
     * @param next: ListNode
     */
    addNext(next: ListNode) {
        this.next = next;
    }
}
