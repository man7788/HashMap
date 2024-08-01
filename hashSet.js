class HashSet {
  constructor(loadFactor) {
    this.loadFactor = loadFactor;
  }

  capacity = 16;

  buckets = new Array(this.capacity);

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
}

export default HashSet;
