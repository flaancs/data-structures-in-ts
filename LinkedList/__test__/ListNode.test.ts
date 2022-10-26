import { ListNode } from "../ListNode";

describe('ListNode', () => {
    it('Should create a new ListNode', () => {
        const listNode = new ListNode(10);

        expect(listNode.val).toBe(10);
    });

    it('Should link the next node', () => {
        const node1 = new ListNode(10);
        const node2 = new ListNode(20);

        node1.addNext(node2);

        expect(node1.next).toBe(node2);
    });
})