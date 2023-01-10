//Demonstrating a Binary Search Tree 


//Creating a BST node
class Node{
    constructor(val){
        this.data = val
        this.left = null
        this.right = null
    }
}

//Adding a node to a BST
function insertNode(root,val){
    if (root == null){
        return new Node(val)
    }
    if(val < root.data){
        root.left = insertNode(root.left,val)
    }
    if(val > root.data){
        root.right = insertNode(root.right,val)
    }

    return root
}
let root  = new Node(1)
root  = insertNode(root,2)
root  = insertNode(root,6)
root  = insertNode(root,82)
root  = insertNode(root,0)

// console.log(root)

//Inorder BST Traversal
function InorderBST(root){
    if (root){
        if(root.left){
            InorderBST(root.left)
        }
        console.log(root.data)
        if (root.right){
            InorderBST(root.right)
        }
    }
    return root
    
}

//Preorder BST Traversal
function PreorderBST(root){
    if (root){
        console.log(root.data)
        if(root.left){
            PreorderBST(root.left)
        }
        if (root.right){
            PreorderBST(root.right)
        }
    }
    return root
    
}

//Postorder BST Traversal
function PostorderBST(root){
    if (root){
        if(root.left){
            PostorderBST(root.left)
        }
        if (root.right){
            PostorderBST(root.right)
        }
        console.log(root.data)
    }
    return root
    
}

InorderBST(root) //Sorting the list
console.log()
PreorderBST(root) 
console.log()
PostorderBST(root) 





