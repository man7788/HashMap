import LinkedList from "./linkedList.js";

function HashMap() {
  const buckets = new Array(16);

  const checkBound = (index) => {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  };

  const getIndexList = (index) => {
    let returnValue = null;

    if (index === undefined) {
      returnValue = buckets;
    }

    if (buckets[index] !== undefined) {
      returnValue = buckets[index].head();
    }

    return returnValue;
  };

  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }
    return hashCode;
  };

  const set = (key, value) => {
    const index = hash(key);
    checkBound(index);

    if (buckets[index] === undefined) {
      buckets[index] = LinkedList();
      buckets[index].append({ [key]: value });
    } else {
      const keyIndex = buckets[index].find(key);
      if (keyIndex !== null) {
        buckets[index].insertAt({ [key]: value }, keyIndex);
        buckets[index].removeAt(keyIndex + 1);
      } else {
        buckets[index].append({ [key]: value });
      }
    }
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

  return { getIndexList, hash, set, get };
}

export default HashMap;
