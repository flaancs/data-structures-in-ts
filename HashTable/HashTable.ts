export class HashTable {
  table: any[];

  constructor(size: number) {
    this.table = new Array(size);
  }

  /**
   * Insert a new element in the table
   * @param key string
   * @param value any
   * @returns any[]
   */
  set(key: string, value: any) {
    const index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    this.table[index].push([key, value]);
    return this.table;
  }

  /**
   * Get an element of the table based on its key
   * @param key string
   * @returns any
   */
  get(key: string) {
    const index = this._hash(key);
    const currentBucket = this.table[index];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        const [currentBucketKey, currentBucketValue] = currentBucket[i];
        if (currentBucketKey === key) {
          return currentBucketValue;
        }
      }
    }
    return undefined;
  }

  /**
   * Removes an element from the table based on its key
   * @param key string
   * @returns any | undefined
   */
  delete(key: string) {
    const index = this._hash(key);
    const currentBucket = this.table[index];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        const [currentBucketKey, _] = currentBucket[i];

        if (currentBucketKey === key) {
          let arrDeletedItems = currentBucket.splice(i, 1);
          return arrDeletedItems[0];
        }
      }
    }
    return undefined;
  }

  /**
   * Returns a list of all existing keys in the table
   * @returns string[]
   */
  getAllKeys() {
    let keys = [];
    const formattedTable = [...this.table].filter(x => x);

    for (let i = 0; i < formattedTable.length; i++) {
      const currentBucket = formattedTable[i];

      for (let i = 0; i < currentBucket.length; i++) {
        keys.push(currentBucket[i][0]);
      }
    }
    return keys;
  }

  /**
   * Create a hash to use as an index into the table
   * @private
   * @param key string
   * @returns string
   */
  private _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}
