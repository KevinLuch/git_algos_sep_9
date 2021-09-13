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

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    // addToBack(value)
    // create a new node with the given value and make it
    // the new tail of the list
    addToBack(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }

    // display()
    // return a string with the value of every node from the
    // linked list - like "3 - 7 - 13 - 4 - 9"
    display() {

        if (this.head == null) {
            return null;
        }

        var output = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            output += " - " + runner.value;
            runner = runner.next;
        }

        return output;
    }

    // contains(target)
    // return true if the linked list contains a node with the
    // given value and false otherwise
    contains(target) {
        var runner = this.head;

        while (runner != null) {
            if(runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // removeFront() - remove the head of the linked list and return its value
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    //zero ndoes?

    removeFront() {
        if(this.head == null) {
            return null;
        }

        var temp = this.head;

        if(this.head == this.tail) {
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        else {
            this.head = this.head.next;
            temp.next = null;
            return temp.value;
        }
    }

    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // think about special cases

    removeBack() {
        if (this.head == null) {
            return null;
        }

        else if (this.head == null) {
            var temp = this.tail.value;
            this.head = null;
            this.tail = null;
            return temp;
        }

        else if (this.head.next == this.tail) {
            var temp = this.tail;
            this.tail = this.head;
            this.head.next = null;
            return temp.value;
        }

        else {
            var temp = this.tail;
            var runner = this.head.next;
            while(runner.next != this.tail) {
                runner = runner.next;
            }
            runner.next = null;
            this.tail = runner;
            return temp.value;
        }

    }

    // moveMinToFront()
    // find the node with the smallest value in the list
    // then make it the head of the list by rearranging the nodes
    // do not just change the values of the nodes
    // (if two nodes are tied for minimum value, just move one)
    // this is a two-step process: ID the node with the smallest value,
    // then rearrange them
    
    findMin() {
        var min = this.head;
        var runner = this.head.next
        while(runner != null) {
            if(runner.value < min.value) {
                min = runner
            }
            runner = runner.next
        } return min;
    }
    
    moveNodeToFront(input) {
        var runner = this.head
        while(runner.next != input) {
            runner = runner.next
        }
        runner.next = input.next
        input.next = this.head
        this.head = input
    }

    // prependValue(value, target)
    // create a new ListNode with the given value and insert it into the 
    // linked list before the node with the target value
    // if no node with that valueexists, place it at the end
    // if the value is 9, the target is 4, and the list is 3 - 7 - 4 - 2 - 11
    // the list becomes 3 - 7 - 9 - 4 - 2 - 11 

    prependValue(value, target) {
        if(this.head == null && this.tail == null) {
            this.addToFront(value);
            // create new linked list with node containing value
            return null
        }

        else if(this.head == this.tail) {
            // add node to front
            if(this.head.value == target) {
                this.addToFront(value);
            }
            else {
                this.addToBack(value);
            }
            return null;
        }

        else if (this.head.value == target) {
            this.addToFront(value);
        }
        
        else {
            var runner = this.head;

            while (runner.next != null) {
                if(runner.next.value == target) {
                    var new_node = new ListNode(value);
                    new_node.next = runner.next;
                    runner.next = new_node;
                    return null
                }
                runner = runner.next 
            }
            this.addToBack(value);

            return null
        }
    }
}


var new_SLL = new SinglyLinkedList();
new_SLL.addToBack(1);
new_SLL.addToBack(1);
new_SLL.addToBack(1);
new_SLL.addToBack(0);
new_SLL.addToBack(1);
new_SLL.addToBack(1);
console.log(new_SLL.display());
new_SLL.prependValue(9, 0);
console.log(new_SLL.display());