// singly linked lists
// ListNode class: we will be using this


class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// var new_node = new ListNode(7);
// var second_node = new ListNode(3);
// new_node.next = second_node;
// var third_node = new ListNode(4);
// second_node.next = third_node;
// console.log(new_node.next.next.value);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // all our methods go here:
    // addToFront(value)
    // create a new node with the given value and make it
    // the head of the list
    addToFront(value){
        var new_node = new ListNode(value);

        new_node.next = this.head;
        this.head = new_node;
    }
}