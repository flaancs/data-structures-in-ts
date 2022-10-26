import { Stack } from "../Stack";

describe('Stack', () => {
    it('Should create an empty stack', () => {
        const stack = new Stack();
        expect(stack.data).toStrictEqual([]);
        expect(stack).not.toBeNull();
    });

    it('Should add new items to the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.data.length).toBe(3);
    });

    it('Should remove and return the last element from a non-empty stack', () => {
        const stack = new Stack();
        stack.push('Item');
        stack.push('Deleted');

        expect(stack.data.length).toBe(2);

        const deleted = stack.pop();

        expect(deleted).toBe('Deleted');
        expect(stack.data.length).toBe(1);
    });

    it('Should return null when trying to remove the last element from an empty stack', () => {
        const stack = new Stack();

        const deleted = stack.pop();
        expect(deleted).toBeNull();
    });

    it('Should return true/false depending on if the stack is empty or not', () => {
        const emptyStack = new Stack();
        const nonEmptyStack = new Stack();
        nonEmptyStack.push('Item');
        expect(emptyStack.isEmpty()).toBeTruthy();
        expect(nonEmptyStack.isEmpty()).toBeFalsy();
    });

    it('Should return an string representation of a stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.toString()).toBe("3,2,1");
    });

    it('Should return an array representation of a stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.toArray()).toStrictEqual([3, 2, 1]);
    });
})