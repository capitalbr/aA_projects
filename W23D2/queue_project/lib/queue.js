// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val, next = null){
    this.value = val;
    this.next = next;
  }
}

class Queue {
  constructor(back = null, front = null, length = 0){
    this.back = back;
    this.front = front;
    this.length = length;
  }

  enqueue(val){
    let newNode = new Node(val);
    if (this.length === 0) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }
    newNode.next = null;
    this.back = newNode;
    this.length += 1;
    return this.length;
  }

// removing from adt determines how node.next will be implemented
  dequeue(){
    if (this.length === 0) return null;
    
    let oldFront = this.front;
    this.front = oldFront.next;
    this.length -= 1;
    if (this.length === 0) {
      this.front = null;
      this.back = null;
    }
    return oldFront.value;
  }

  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;