import { DoublyLinkedList } from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
    it('Should add a new node to the end of the list', () => {
        const list = new DoublyLinkedList("Monday");
        list.append("Tuesday");
        list.append("Wednesday");

        expect(list.getSize()).toEqual(3);
        expect(list.getTail().next).toBeNull();
        expect(list.getTail().value).toEqual("Wednesday");
        expect(list.getTail().prev.value).toEqual("Tuesday");
    });

    it('Should insert a node in a specific index', () => {
        const list = new DoublyLinkedList("First");
        list.append("Second");
        list.append("Third");
        list.append("Fifth");

        expect(list.getSize()).toEqual(4);

        list.insert(3, "Fourth");

        const listItem = list.getIndex(3);

        expect(list.getSize()).toEqual(5);
        expect(listItem.value).toEqual("Fourth");
        expect(listItem.next.value).toEqual("Fifth");
        expect(listItem.prev.value).toEqual("Third");
    });

    it('Should remove a node from a specific index', () => {
        const list = new DoublyLinkedList("Monday");
        list.append("Tuesday"); // Selected Node (Index 1)
        list.append("Wednesday");

        expect(list.getSize()).toEqual(3);
        expect(list.getIndex(1).value).toEqual("Tuesday");
        expect(list.getIndex(1).prev.value).toEqual("Monday");
        expect(list.getIndex(1).next.value).toEqual("Wednesday");

        list.remove(1);

        expect(list.getSize()).toEqual(2);
        expect(list.getIndex(1).value).toEqual("Wednesday");
        expect(list.getIndex(1).prev.value).toEqual("Monday");
        expect(list.getIndex(1).next).toBeNull();
    });

    it('Should get a ListNode from a specific index', () => {
        const list = new DoublyLinkedList("First");
        list.append("Second");
        list.append("Third"); // Selected Node (Index 2)
        list.append("Fourth");

        const listItem = list.getIndex(2);

        expect(listItem.value).toEqual("Third");
        expect(listItem.next.value).toEqual("Fourth");
        expect(listItem.prev.value).toEqual("Second");
    });
})