function treeString(bigTree) {
  if (bigTree.left === null && bigTree.right === null) {
    return String(bigTree.value);
  } else if (bigTree.left === null) {
    return (
      String(bigTree.value) + "r(" + String(treeString(bigTree.right) + ")")
    );
  } else if (bigTree.right === null) {
    return (
      String(bigTree.value) + "l(" + String(treeString(bigTree.left) + ")")
    );
  } else {
    return (
      String(bigTree.value) +
      "l(" +
      String(treeString(bigTree.left)) +
      ")r(" +
      String(treeString(bigTree.right)) +
      ")"
    );
  }
}

function checkIsSameTree(treeA, treeB) {
  if (treeString(treeA) === treeString(treeB)) return true;

  return false;
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

console.log(checkIsSameTree(tree, tree)); // true
console.log(treeString(tree));

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};
console.log(treeString(tree2));

console.log(checkIsSameTree(tree, tree2));
console.log(checkIsSameTree(tree2, tree2));
checkIsSameTree(tree, tree2); // false
checkIsSameTree(tree2, tree2); // true
