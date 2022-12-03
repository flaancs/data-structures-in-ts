import { Stack } from "../Stack";

describe('Stack', () => {
    it('Should create an empty stack', () => {
        const stack = new Stack();
        expect(stack.size).toEqual(0);
        expect(stack.top).toBeNull();
        expect(stack.bottom).toBeNull();
    });

    it('Should add new elements to the stack', () => {
        const stack = new Stack<number>();
        const range = Array(5);

        for (let i = 1; i <= range.length; i++) {
            stack.push(i);
        }

        expect(stack.size).toEqual(5);
        expect(stack.top.value).toEqual(5);
        expect(stack.bottom.value).toEqual(1);
    });

    it('Should return the last item on the stack', () => {
        const stack = new Stack<number>();
        const range = Array(5);

        for (let i = 1; i <= range.length; i++) {
            stack.push(i);
        }

        const last = stack.peek();

        expect(last.value).toEqual(5);
    });

    it('Should remove the last item from the stack', () => {
        const stack = new Stack<number>();
        const range = Array(5);

        for (let i = 1; i <= range.length; i++) {
            stack.push(i);
        }

        expect(stack.top.value).toEqual(5);
        expect(stack.size).toEqual(5);

        stack.pop();

        expect(stack.top.value).toEqual(4);
        expect(stack.size).toEqual(4);
    });

    it('Bottom and top should be cleared when deleting the last item in a stack of 1 items', () => {
        const stack = new Stack<number>();
        stack.push(1);

        expect(stack.top.value).toEqual(1);
        expect(stack.size).toEqual(1);

        stack.pop();

        expect(stack.top).toBeNull();
        expect(stack.bottom).toBeNull();
        expect(stack.size).toEqual(0);
    });

    it('Should return the stack by removing the last item from an empty stack', () => {
        const stack = new Stack<number>();

        expect(stack.top).toBeNull();
        expect(stack.bottom).toBeNull();
        expect(stack.size).toEqual(0);

        const result = stack.pop();

        expect(result).toEqual(stack);
        expect(stack.top).toBeNull();
        expect(stack.bottom).toBeNull();
        expect(stack.size).toEqual(0);
    });
})