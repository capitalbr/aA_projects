// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
  constructor(top = null, bottom = null, length = 0) {
    this.top = top; 
    this.bottom = bottom;
    this.length = length;
  }

  push(val){
    let newNode = new Node(val);
    if (this.length === 0) {
      this.bottom = newNode;
      newNode.next = null;
    } else { 
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length += 1;
    return this.length;
  }
  
  pop(){
    if (this.length === 0) return null;
    let topEl = this.top;
    this.top = topEl.next;
    
    this.length -= 1;
    if (this.length === 0) {
      this.top = null;
      this.bottom = null;
    }
    return topEl.value;
  }

  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;