// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val, next) {
        this.value = val;
        this.next = next;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor(head = null, tail = null, length = 0) {
        this.head = head;
        this.tail = tail;
        this.length = length;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
            newNode.next = null;
        }
        newNode.next = null;
        this.tail = newNode;
        this.length += 1;
        return this;
    }
    
    // TODO: Implement the removeTail method here
    removeTail() {  
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }
        let prevTail = this.tail;
        let currNode = this.head;
        for (let i = 0; i < this.length - 2; i++) {
            currNode = currNode.next;
        }
        currNode.next = null;
        this.tail = currNode;
        this.length -= 1
        return prevTail;
    }
    
    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);
        if (this.head) {
            newNode.next = this.head;
        } else {
            newNode.next = null;
            this.tail = newNode
        }
        this.head = newNode;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }
        this.head = this.head.next;
        this.length -= 1;
    }
        // for (let i = 0; i < this.length - 1; i++) {
        //     currNode = currNode.next;
        // }
        // currNode.next = null;
        // let notDone = true;
        // while (notDone) {
        //     if (currNode.next === this.head) {
        //         this.head = currNode;
        //         notDone = false;
        //     }
        // }
        
        // this.head = this.head.prev; 

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {
        // let current = this.tail;
        // for (let i = 1; i < index; i ++) {
        //     current = current.next;
        // }
        this.length += 1;
    }
    
    // TODO: Implement the remove method here
    remove(index) {
        this.length -= 1;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;


linkedList = new LinkedList();
linkedList.addToTail('C');