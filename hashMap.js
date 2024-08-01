import LinkedList from './linkedList.js';

function HashMap(loadFactor) {
  let capacity = 16;
  let buckets = new Array(capacity);

  const checkBound = (index) => {
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
  };

  const getMap = (index) => {
    let returnValue = null;

    if (index === undefined) {
      returnValue = buckets;
    }

    if (buckets[index] !== undefined) {
      returnValue = buckets[index].head();
    }

    return returnValue;
  };

  const getCapacity = () => capacity;

  const hash = (key) => {
    if (key !== undefined) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode =
          (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
      }
      return hashCode;
    }
  };

  const set = (key, value) => {
    const setPair = (pairKey, pairValue) => {
      const index = hash(pairKey);

      checkBound(index);

      if (buckets[index] === undefined) {
        buckets[index] = LinkedList();
        buckets[index].append({ [pairKey]: pairValue });
      } else {
        const keyIndex = buckets[index].find(pairKey);
        if (keyIndex !== null) {
          buckets[index].insertAt({ [pairKey]: pairValue }, keyIndex);
          buckets[index].removeAt(keyIndex + 1);
        } else {
          buckets[index].append({ [pairKey]: pairValue });
        }
      }
    };

    const checkLoadFactor = () => {
      const threshold = loadFactor * capacity;
      const entries = length();

      if (entries + 1 > Math.floor(threshold)) {
        capacity *= 2;
        const newBuckets = new Array(capacity);
        const oldBuckets = buckets;
        buckets = newBuckets;
        // Iterate ALL keys (all linked list elements)
        for (let i = 0; i < oldBuckets.length; i++) {
          if (oldBuckets[i] !== undefined) {
            const entriesList = oldBuckets[i].toEntries();
            entriesList.forEach((element) => {
              // Store each key to bucket with new hash key
              setPair(element[0], element[1]);
            });
          }
        }
      }
    };

    checkLoadFactor();
    setPair(key, value);
  };

  const get = (key) => {
    const index = hash(key);
    let returnValue = null;

    if (buckets[index] !== undefined) {
      const keyIndex = buckets[index].find(key);
      if (keyIndex !== null) {
        const object = buckets[index].at(keyIndex).value;
        const value = Object.values(object)[0];
        returnValue = value;
      }
    }
    return returnValue;
  };

  const has = (key) => {
    const index = hash(key);
    let returnValue = false;

    if (buckets[index] !== undefined) {
      returnValue = buckets[index].contains(key);
      return returnValue;
    }

    return returnValue;
  };

  const remove = (key) => {
    const index = hash(key);
    let returnValue = false;

    if (buckets[index] !== undefined) {
      const keyIndex = buckets[index].find(key);
      if (keyIndex !== null) {
        buckets[index].removeAt(keyIndex);
        returnValue = true;
      }
    }

    return returnValue;
  };

  function length() {
    let returnLength = 0;
    for (let i = 0; i < buckets.length; i++) {
      const element = buckets[i];
      if (element !== undefined) {
        returnLength += buckets[i].size();
      }
    }
    return returnLength;
  }

  const clear = () => {
    buckets = new Array(capacity);
  };

  const keys = () => {
    const returnArray = [];
    for (let i = 0; i < buckets.length; i++) {
      const element = buckets[i];
      if (element !== undefined) {
        const bucketArray = buckets[i].toKeys();
        bucketArray.forEach((key) => {
          returnArray.push(key);
        });
      }
    }
    return returnArray;
  };

  const values = () => {
    const returnArray = [];
    for (let i = 0; i < buckets.length; i++) {
      const element = buckets[i];
      if (element !== undefined) {
        const bucketArray = buckets[i].toValues();
        bucketArray.forEach((key) => {
          returnArray.push(key);
        });
      }
    }
    return returnArray;
  };

  const entries = () => {
    const returnArray = [];
    for (let i = 0; i < buckets.length; i++) {
      const element = buckets[i];
      if (element !== undefined) {
        const bucketArray = buckets[i].toEntries();
        bucketArray.forEach((key) => {
          returnArray.push(key);
        });
      }
    }
    return returnArray;
  };

  return {
    getMap,
    getCapacity,
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

export default HashMap;
