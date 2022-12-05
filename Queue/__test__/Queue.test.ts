import { Queue } from "../Queue";

describe('Queue', () => {
    it('Should create an empty queue', () => {
        const queue = new Queue();

        expect(queue.size).toEqual(0);
    });
    
    it('Should add new items to the queue', () => {
        const queue = new Queue();
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        for (const day of days) queue.enqueue(day);

        expect(queue.first.value).toEqual("Monday");
        expect(queue.last.value).toEqual("Friday");
        expect(queue.size).toEqual(5);
    });

    it('Should dequeue items from the queue', () => {
        const queue = new Queue();
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        for (const day of days) queue.enqueue(day);

        for (let i = 0; i < days.length; i++) {
            queue.dequeue();
            expect(queue.size).toEqual(days.length - (i + 1));

            if (i === 4) expect(queue.first).toBeNull();
            else expect(queue.first.value).toEqual(days[i + 1]);
        }
    });

    it('Should pick the first item on the queue', () => {
        const queue = new Queue();
        const years = [2022, 2023, 2024, 2025, 2026];
        for (const year of years) queue.enqueue(year);

        const peek = queue.peek();
        expect(peek.value).toEqual(2022);
    });
})