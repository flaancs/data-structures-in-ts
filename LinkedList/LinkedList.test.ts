import { ListNode } from './ListNode';
import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
    test('Create a LinkedList with 3 nodes', () => {
        const node1 = new ListNode('value');
        const node2 = new ListNode('other value');
        const node3 = new ListNode('some other value');

        node2.addNext(node3);
        node1.addNext(node2);

        const linkedList = new LinkedList(node1);
        expect(linkedList.head).toBe(node1);
        expect(linkedList.head.next).toBe(node2);
        expect(linkedList.head.next.next).toBe(node3);
        expect(linkedList.head.next.next.next).toBe(null);
    });

    test('getSize() with a list of 5 nodes', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(3);
        const node4 = new ListNode(4);
        const node5 = new ListNode(5);

        node4.addNext(node5);
        node3.addNext(node4);
        node2.addNext(node3);
        node1.addNext(node2);

        const linkedList = new LinkedList(node1);
        expect(linkedList.getSize()).toBe(5);
    });

    test('getLast() with a list of 3 nodes', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(3);

        node2.addNext(node3);
        node1.addNext(node2);

        const linkedList = new LinkedList(node1);
        expect(linkedList.getLast()).toBe(node3);
    });

    test('getFirst() with a list of 3 nodes', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(3);

        node2.addNext(node3);
        node1.addNext(node2);

        const linkedList = new LinkedList(node1);
        expect(linkedList.getFirst()).toBe(node1);
    });

    test('clear() with a list of 2 nodes', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);

        node1.addNext(node2);

        const linkedList = new LinkedList(node1);

        expect(linkedList.getSize()).toBe(2);

        linkedList.clear();

        expect(linkedList.getSize()).toBe(0);
    });
})