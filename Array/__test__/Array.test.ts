import { CustomArray } from "../Array";

describe('Array', () => {
    it('Should instantiate a new array', () => {
        const array = new CustomArray();
        expect(array.length).toBe(0);
    });

    it('Should add new items to the array', () => {
        const array = new CustomArray<number>();
        array.push(1);
        array.push(2);
        array.push(3);

        expect(array.length).toBe(3);
    });

    it('Should get a specific item based on the index', () => {
        const array = new CustomArray<string>();
        array.push("First string");
        array.push("Second string");
        array.push("Third string");

        const el = array.get(1);

        expect(el).toBe("Second string");
    });

    it('Should return undefined when trying to search for a non-existent index', () => {
        const array = new CustomArray<string>();
        array.push("First string");
        array.push("Second string");
        array.push("Third string");

        const el = array.get(4);

        expect(el).toBeUndefined();
    });

    it('Should remove the last item from the list', () => {
        const array = new CustomArray<boolean>();
        array.push(true);
        array.push(false);
        array.push(true);

        expect(array.length).toBe(3);

        const removedItem = array.pop();

        expect(array.length).toBe(2);
        expect(removedItem).toBeTruthy();
    });

    it('Should returns a string representation of the list', () => {
        const array = new CustomArray<string>();
        array.push("First string");
        array.push("Second string");
        array.push("Third string");

        expect(array.toString()).toBe("(3) [First string, Second string, Third string]");
    });
    
    it('Should returns the index in the list of a specific element', () => {
        const array = new CustomArray<string>();
        array.push("First string");
        array.push("Second string");
        array.push("Third string");
        array.push("Fourth string");

        expect(array.indexOf("Third string")).toEqual(2);
    });

    it('Should returns undefined when searching the index of a non-existent item', () => {
        const array = new CustomArray<string>();
        array.push("First string");
        array.push("Second string");
        array.push("Third string");
        array.push("Fourth string");

        expect(array.indexOf("Fifth string")).toBeUndefined();
    });

    it('Should remove a specific item from the list and re-order the indexes', () => {
        const array = new CustomArray<number>();
        array.push(128);
        array.push(256);
        array.push(512);
        array.push(1024); // Item to delete
        array.push(2048); // Next item
        array.push(4096);

        // Check array has the correct length
        expect(array.length).toBe(6);

        // Remove item with the third index
        const removedItem = array.remove(3);
        expect(removedItem).toBe(1024);

        // Setup the new list
        const newList = {
            0: 128,
            1: 256,
            2: 512,
            3: 2048,
            4: 4096,
        }

        // Check if the indexes have been reordered
        expect(array.data).toEqual(newList);

        // Check that the length of the list has decreased
        expect(array.length).toBe(5);
    });

    it('Should add a new item at the beginning of the list and re-order the indexes', () => {
        const array = new CustomArray<number>();
        array.push(128);
        array.push(256);
        array.push(512);
        array.push(1024);

        // Check array has the correct length
        expect(array.length).toBe(4);

        // Setup the new list
        const newList = {
            0: 64,
            1: 128,
            2: 256,
            3: 512,
            4: 1024,
        }

        // Add a new item in the first index and check if the list length has been increased
        const newLength = array.unshift(64);
        expect(newLength).toBe(5);

        // Check if the indexes have been reordered
        expect(array.data).toEqual(newList);
    });

    it('Should remove the first item from the list', () => {
        const array = new CustomArray<string>();
        array.push("First string");
        array.push("Second string");
        array.push("Third string");
        array.push("Fourth string");

        expect(array.length).toBe(4);

        const removedItem = array.shift();

        expect(array.length).toBe(3);
        expect(removedItem).toEqual("First string");
    });
})