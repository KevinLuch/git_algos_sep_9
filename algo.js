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

            return null;
        }

        // secondToLastValue()
        // return the value of the second-to-last-node in the linked list
        // if the list has one or zero nodes in it. return undefined

        
    }

    secondToLastValue() {
        var runner = this.head;

        if (this.head == this.tail || this.head == null) {
            return undefined;
        }

        while (runner.next.next != null) {
            runner = runner.next;
        }
        return runner.value;
    }

    // partiton(target)
    // rearrange the nodes in the list so that all nodes with values less than
    // the target value come first in the list, then all nodes with the target
    // value, then all nodes with values greater than the target value
    // if there are no nodes with values greater or less than the target value,
    // or no nodes with the target value at all, the fuction should still work
    // if the target is 5, and the list is 8 - 7 - 1 - 5 - 2 - 8 - 3
    // the list should rearrange so that the nodes are in this order:
    // 1 - 4 - 2 - 3 - 5 - 5 - 8 - 7 - 8 
    // order of nodes does not matter as long as the above rules are respected

    partition(target) {
        var lowerHead = null;
        var lowerTail = null;
        var middleHead = null;
        var middleTail = null;
        var upperHead = null;
        var upperTail = null;

        var runner = this.head;

        while (runner != null) {
            var temp = runner;
            runner = runner.next;

            temp.next = null;

            if (temp.value < target) {
                if (lowerHead == null) {
                    lowerHead = temp;
                    lowerTail = temp;
                }

                else {
                    lowerTail.next = temp;
                    lowerTail = temp; 
                }
            }

            else if (temp.value == target) {
                if (middleHead == null) {
                    middleHead = temp;
                    middleTail = temp;
                }

                else {
                    middleTail.next = temp;
                    middleTail = temp; 
                }
            }

            else if (temp.value > target) {
                if (upperHead == null) {
                    upperHead = temp;
                    upperTail = temp;
                }

                else {
                    upperTail.next = temp;
                    upperTail = temp; 
                }
            }
        }
        // if only nodes greater than the target are found
        if (lowerHead == null && middleHead == null) {
            this.head = upperHead;
            this.tail = upperTail;
            return null;
        }
        // if only nodes less than the target are found
        if (middleHead == null && upperHead == null) {
            this.head = lowerHead;
            this.tail = lowerTail;
            return null;
        }
        // if only nodes with target value are found
        if (lowerHead == null && upperHead == null) {
            this.head = middleHead;
            this.tail = middleTail;
            return null;
        }

        // if no nodes less than target are found
        if (lowerHead == null) {
            this.head = middleHead;
            this.tail = upperTail;
            middleTail.next = upperHead;
            return null;
        }

        // if no nodes with target are found
        if (middleHead == null) {
            this.head = lowerHead;
            this.tail = upperTail;
            lowerTail.next = upperHead;
            return null;
        }

        // if no nodes great than target are found
        if (upperHead == null) {
            this.head = lowerHead;
            this.tail = middleTail;
            lowerTail.next = middleHead;
            return null;
        }

        // final case - all three linked list have some kind of data
        this.head = lowerHead;
        this.tail = upperTail;
        lowerTail.next = middleHead;
        middleTail.next = upperHead; 
        return null;
    }
}


var new_SLL = new SinglyLinkedList();
new_SLL.addToBack(7);
new_SLL.addToBack(3);
new_SLL.addToBack(5);
new_SLL.addToBack(4);
new_SLL.addToBack(1);
new_SLL.addToBack(6);
new_SLL.addToBack(2);
console.log(new_SLL.display());
console.log(new_SLL.partition(4));
console.log(new_SLL.display());