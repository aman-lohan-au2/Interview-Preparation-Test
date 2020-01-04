BinarySearchTree.prototype = {
    
    remove: function(key) {
      
        if(bst.root === null) {
            return false;
        }

        //find the node in question
        var currentNode = this.find(bst.root, key);
        //find nodes parent. 
        var nodeParent = this.findNodeParent(key);

        //case 1: remove a node that does not have a right child.
        if(currentNode.right === null) {
            if(nodeParent === null) {
                this.root = currentNode.left;
            } else {
                //if parent is greater than current value, make teh current left child a child of parent
                if(currentNode.keyValue < nodeParent.keyValue) {
                    nodeParent.left = currentNode.left;
                //if parent is less than current value, make the left child a right child of parent.
                } else if(currentNode.keyValue > nodeParent.keyValue) {
                    nodeParent.right = currentNode.left;
                }
            }
        //case 2. if the node we are removing has a right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if(nodeParent === null) {
                this.root = currentNode.right;
            } else {
                //if current value is less than parent, make right child of the left the parent
                if(currentNode.keyValue < nodeParent.keyValue) {
                    nodeParent.left = currentNode.right;
                //if current value is greater than parent, make current right child a right child of the parent
                } else if(currentNode.keyValue > nodeParent.keyValue) {
                    nodeParent.right = currentNode.right;
                }
            }
        //case 3 if the node we are removing has a right child that has a left child.
        //promote the left child to deleted spot
        } else {
            //find the rights left most child
            var leftmost = currentNode.right.left;
            var leftmostParent = currentNode.right;

            while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
            }
            //parents left subtree becomes the leftmost's right subtree
            leftmostParent.left = leftmost.right;
            //assign leftmost's left and right to the current left and right children
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;

            if(nodeParent === null) {
                this.root = leftmost;
            } else {
                if(currentNode.keyValue < nodeParent.keyValue) {
                    nodeParent.left = leftmost;
                } else if(currentNode.keyValue > nodeParent.keyValue) {
                    nodeParent.right = leftmost;
                }
            }
        }
        //decrease the count
        this.count--;

        return true;
    }
    
    //other code here
}

var bst = new BinarySearchTree();
//Remove Test Cases

//case 1
bst.insert(4);
bst.insert(2);
bst.insert(8);
bst.insert(1);
bst.insert(3);
bst.insert(6);
bst.insert(7);
bst.insert(5);