function Node(value = null, next = null) {
  return { value, next };
}

function LinkedList() {
  let listHead = null;

  const append = (value) => {
    const newNode = Node(value);
    const traverse = (node, newEnd) => {
      if (node.next === null) {
        node.next = newEnd;
      } else {
        return traverse(node.next, newEnd);
      }
    };

    if (listHead === null) {
      listHead = newNode;
    } else {
      traverse(listHead, newNode);
    }
  };

  const prepend = (value) => {
    if (listHead === null) {
      listHead = Node(value);
    } else {
      listHead = Node(value, listHead);
    }
  };

  const size = () => {
    let count = 0;
    const traverse = (node) => {
      if (node.next === null) {
        return 1;
      }
      return 1 + traverse(node.next);
    };

    if (listHead !== null) {
      count = traverse(listHead);
    }

    return count;
  };

  const head = () => listHead;

  const tail = () => {
    let tailNode = null;
    const traverse = (node) => {
      if (node.next === null) {
        return node;
      }

      return traverse(node.next);
    };

    if (listHead !== null) {
      tailNode = traverse(listHead);
    }

    return tailNode;
  };

  const at = (index) => {
    let returnNode = null;
    const traverse = (node, target, depth = 0) => {
      if (depth === target) {
        return node;
      }

      if (node.next === null) {
        return null;
      }

      const nextNode = node.next;
      return traverse(nextNode, target, depth + 1);
    };

    if (listHead !== null) {
      returnNode = traverse(listHead, index);
    }

    return returnNode;
  };

  const pop = () => {
    const traverse = (node, prevNode) => {
      if (node.next === null) {
        if (prevNode === undefined) {
          listHead = null;
        } else {
          prevNode.next = null;
        }
      } else {
        return traverse(node.next, node);
      }
    };

    if (listHead !== null) {
      traverse(listHead);
    }
  };

  const contains = (value) => {
    const traverse = (node, target) => {
      if (typeof node.value === 'string') {
        if (node.value === target) {
          return true;
        }
      }

      if (typeof node === 'object') {
        if (Object.keys(node.value)[0] === target) {
          return true;
        }
      }

      if (node.next === null) {
        return false;
      }

      return traverse(node.next, target);
    };

    if (listHead !== null) {
      return traverse(listHead, value);
    }

    return false;
  };

  const find = (value) => {
    const traverse = (node, target, depth = 0) => {
      if (typeof node.value === 'string') {
        if (node.value === target) {
          return depth;
        }
      }

      if (typeof node.value === 'object') {
        if (Object.keys(node.value)[0] === target) {
          return depth;
        }
      }

      if (node.next === null) {
        return null;
      }

      return traverse(node.next, target, depth + 1);
    };

    if (listHead !== null) {
      return traverse(listHead, value);
    }

    return false;
  };

  const insertAt = (value, index) => {
    const traverse = (insertValue, insertIndex, node, prevNode, depth = 0) => {
      if (insertIndex === depth) {
        if (insertIndex === 0) {
          listHead = Node(insertValue, node);
          return;
        }

        const newNode = Node(insertValue, node);
        prevNode.next = newNode;
        return;
      }

      if (node.next === null) {
        return;
      }

      return traverse(insertValue, insertIndex, node.next, node, depth + 1);
    };

    if (listHead !== null) {
      return traverse(value, index, listHead);
    }
  };

  const removeAt = (index) => {
    const traverse = (removeIndex, node, prevNode, depth = 0) => {
      if (removeIndex === depth) {
        if (removeIndex === 0) {
          listHead = node.next;
          return;
        }

        prevNode.next = node.next;
        return;
      }

      if (node.next === null) {
        return;
      }

      return traverse(removeIndex, node.next, node, depth + 1);
    };

    if (listHead !== null) {
      return traverse(index, listHead);
    }
  };

  const toKeys = () => {
    const returnArray = [];
    const traverse = (node) => {
      if (node === null) {
        return;
      }

      returnArray.push(Object.keys(node.value)[0]);

      return traverse(node.next);
    };

    if (listHead !== null) {
      traverse(listHead);
      return returnArray;
    }
  };

  const toValues = () => {
    const returnArray = [];
    const traverse = (node) => {
      if (node === null) {
        return;
      }

      returnArray.push(Object.values(node.value)[0]);

      return traverse(node.next);
    };

    if (listHead !== null) {
      traverse(listHead);
      return returnArray;
    }
  };

  const toEntries = () => {
    const returnArray = [];
    const traverse = (node) => {
      const entriesArray = [];
      if (node === null) {
        return;
      }

      entriesArray.push(Object.keys(node.value)[0]);
      entriesArray.push(Object.values(node.value)[0]);
      returnArray.push(entriesArray);

      return traverse(node.next);
    };

    if (listHead !== null) {
      traverse(listHead);
      return returnArray;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    toKeys,
    toValues,
    toEntries,
  };
}

export default LinkedList;
