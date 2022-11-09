import { HashTable } from "../HashTable";

describe('Hash table', () => {
    it('Should instanciate a new hash table of 50 buckets', () => {
        const { table } = new HashTable(50);
        expect(table.length).toEqual(50);
    });

    it('Should add new items to the table', () => {
        const table = new HashTable(6);

        table.set("Item 1", 5656564);
        table.set("Item 2", 132312312);
        table.set("Item 3", 4324324);
        table.set("Item 4", 3423423);
        table.set("Item 5", 143157);
        table.set("Item 6", 7887634);

        expect(table.table.length).toEqual(6);
    });

    it('Should get an item from table based on its key', () => {
        const characters = new HashTable(5);

        characters.set("Homer", 36);
        characters.set("Bart", 10);
        characters.set("Marge", 34);
        characters.set("Lisa", 8);
        characters.set("Maggie", 1);

        expect(characters.get("Marge")).toEqual(34);
        expect(characters.get("Maggie")).toEqual(1);
    });

    it('Should delete an item from table based on its key', () => {
        const table = new HashTable(6);

        table.set("Item 1", 5656564);
        table.set("Item 2", 132312312);
        table.set("Item 3", 4324324);
        table.set("Item 4", 3423423);
        table.set("Item 5", 143157);
        table.set("Item 6", 7887634);
        
        expect(table.table.length).toEqual(6);

        table.delete("Item 3");
        table.delete("Item 6");

        let items = table.table.flatMap(x => x);

        expect(items.length).toEqual(4);

    });

    it('Should return a list of all existing keys in the table', () => {
        const characters = new HashTable(5);

        characters.set("Homer", 36);
        characters.set("Bart", 10);
        characters.set("Marge", 34);
        characters.set("Lisa", 8);
        characters.set("Maggie", 1);

        const keys = ['Maggie', 'Homer', 'Marge', 'Bart', 'Lisa'];

        expect(characters.getAllKeys()).toEqual(keys);
    })
})