import LinkedList from './linkedList.js';

class HashSet {
  constructor(loadFactor) {
    this.loadFactor = loadFactor;
  }

  capacity = 16;

  buckets = new Array(this.capacity);

  checkBound(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
  }

  getSet(index) {
    let returnValue = null;

    if (index === undefined) {
      returnValue = this.buckets;
    }

    if (this.buckets[index] !== undefined) {
      returnValue = this.buckets[index].head();
    }

    return returnValue;
  }

  getCapacity() {
    return this.capacity;
  }

  hash(key) {
    if (key !== undefined) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode =
          (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
      }
      return hashCode;
    }
  }

  set(key) {
    const setKey = (keyValue) => {
      const index = this.hash(keyValue);

      this.checkBound(index);

      if (this.buckets[index] === undefined) {
        this.buckets[index] = LinkedList();
        this.buckets[index].append(keyValue);
      } else {
        const keyIndex = this.buckets[index].find(keyValue);
        if (keyIndex !== null) {
          this.buckets[index].insertAt(keyValue, keyIndex);
          this.buckets[index].removeAt(keyIndex + 1);
        } else {
          this.buckets[index].append(keyValue);
        }
      }
    };

    const checkLoadFactor = () => {
      const threshold = this.loadFactor * this.capacity;
      const entries = this.length();

      if (entries + 1 > Math.floor(threshold)) {
        this.capacity *= 2;
        const newBuckets = new Array(this.capacity);
        const oldBuckets = this.buckets;
        this.buckets = newBuckets;
        // Iterate ALL keys (all linked list elements)
        for (let i = 0; i < oldBuckets.length; i++) {
          if (oldBuckets[i] !== undefined) {
            const entriesList = oldBuckets[i].toEntries();
            entriesList.forEach((element) => {
              // Store each key to bucket with new hash key
              this.setKey(element[0]);
            });
          }
        }
      }
    };

    checkLoadFactor();
    setKey(key);
  }

  get(key) {
    const index = this.hash(key);
    let returnValue = null;

    if (this.buckets[index] !== undefined) {
      const keyIndex = this.buckets[index].find(key);
      if (keyIndex !== null) {
        const { value } = this.buckets[index].at(keyIndex);
        returnValue = value;
      }
    }
    return returnValue;
  }

  has(key) {
    const index = this.hash(key);
    let returnValue = false;

    if (this.buckets[index] !== undefined) {
      returnValue = this.buckets[index].contains(key);
      return returnValue;
    }

    return returnValue;
  }

  remove(key) {
    const index = this.hash(key);
    let returnValue = false;

    if (this.buckets[index] !== undefined) {
      const keyIndex = this.buckets[index].find(key);
      if (keyIndex !== null) {
        this.buckets[index].removeAt(keyIndex);
        returnValue = true;
      }
    }

    return returnValue;
  }

  length() {
    let returnLength = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      const element = this.buckets[i];
      if (element !== undefined) {
        returnLength += this.buckets[i].size();
      }
    }
    return returnLength;
  }

  clear() {
    this.buckets = new Array(this.capacity);
  }

  keys() {
    const returnArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const element = this.buckets[i];
      if (element !== undefined) {
        const bucketArray = this.buckets[i].toKeys();
        bucketArray.forEach((key) => {
          returnArray.push(key);
        });
      }
    }
    return returnArray;
  }
}

export default HashSet;
