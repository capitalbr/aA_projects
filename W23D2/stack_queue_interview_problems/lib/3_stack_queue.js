// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    constructor(val, next = null) {
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

    push(node) {
        if (this.length === 0) {
            this.bottom = node;
            node.next = null;
        } else {
            node.next = this.top;
        }
        this.top = node;
        this.length += 1;
        return this.length;
    }

    pop() {
        if (this.length === 0) return null;
        let prevTop = this.top;  // Null < A < B < C
        this.top = prevTop.next;  // top = B     prevTop = C
        debugger
        this.length -= 1;  // 2
        if (this.length === 0) { //length = 2
            this.top = null;
            this.bottom = null;
        }
        return prevTop;
    }


    size() {
        return this.length;
    }
}

// const { Node, Stack } = require('../../stack_project/lib/stack.js');

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(node){
        if (!this.back) this.front = node;
        this.back = node;   
        this.inStack.push(node);
    }

    stackExchange(){
        while (this.inStack.length !== 0) {
            this.outStack.push(this.inStack.pop());
        }
    }

    dequeue(){
        if (this.size === 0) return null;
        if (this.outStack.length === 0 ) stackExchange();

        return this.outStack.pop();
    }

    size(){
        return this.inStack.length + this.outStack.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;

// let stack = new Stack;
// stack.push({ value: 'A', next: null });
// stack.push({ value: 'B', next: null });
// stack.push({ value: 'C', next: null });
// console.log(stack.pop().value);