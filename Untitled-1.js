class ListNode {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head === null) this.prepend(value);
    else {
      let previous = this.head;
      while (previous.next != null) {
        previous = previous.next;
      }
      previous.next = new ListNode(value);
    }
  }

  prepend(value) {
    let previous = null;
    if (this.head != null) previous = this.head;
    this.head = new ListNode(value);
    this.head.next = previous;
  }

  size() {
    let totalNodes = 1;
    let current = this.head;
    while (current.next != null) {
      current = current.next;
      totalNodes++;
    }
    return totalNodes;
  }

  headNode() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
      if (current == null) return 'No item at this index';
    }
    return current;
  }

  pop() {
    let current = this.head;
    let prev = null;
    while (current.next != null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  contains(value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.value === value) return true;
      tmp = tmp.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    let tmp = this.head;
    let stringList = '';
    while (tmp != null) {
      stringList += `(${tmp.value}) -> `;
      tmp = tmp.next;
    }
    return (stringList += 'null');
  }

  insertAt(value, index) {
    if (this.head == null) this.prepend(value);
    let current = this.head;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
      if (current == null) break; // if index is bigger than end of list, add node at end of list
    }
    const tmp = new ListNode(value);
    prev.next = tmp;
    tmp.next = current;
  }

  removeAt(index) {
    if (this.head == null) return 'List is already empty';
    let current = this.head;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
      if (current.next == null) return 'No item for this index';
    }
    prev.next = current.next;
  }
}

const linkedList = new LinkedList();

linkedList.prepend('test1');
linkedList.append('test2');
linkedList.append('test3');
linkedList.append('test4');
console.log(linkedList.size());
console.log(linkedList.headNode());
console.log(linkedList.tail());
console.log(linkedList.at(2));
console.log(linkedList.at(4));
linkedList.pop();
console.log(linkedList.contains('test4'));
console.log(linkedList.find('test1'));
console.log(linkedList.toString());
linkedList.insertAt('test5', 3);
linkedList.removeAt(2);
console.log(linkedList);
