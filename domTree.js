// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function reverseTree (element, root) {
    const path = [];
    let current = element;
    while(current.parentNode) {
        // go up and then down to look up the position
        const index = [...current.parentNode.children].indexOf(current) // position of the element in the tree
        path.push(index);
        // move the current to parent
        current = current.parent;
    }
    current = root;
    
    while(path.length) {
        current = current.children[path.pop()];
    }
    return current;
}