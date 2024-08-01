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
}

export default HashSet;
