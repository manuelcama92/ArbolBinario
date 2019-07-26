//       7
//      / \
//     4   8
//    / \  / \
//   1  5  2  9

const root = new Node(7);
root.der = new Node(4);
root.der.der = new Node(1);
root.der.izq = new Node(5);
root.izq = new Node(8);
root.izq.izq = new Node(9);
root.izq.der = new Node(2);

// solucion transversal
function ancestroComun(root, node1, node2) {
  const path1 = [];
  const path2 = [];
  if (!getPath(root, path1, node1) || !getPath(root, path2, node2)) {
    return false;
  }

  let i = 0;
  while (i < path1.length && i < path2.length) {
    if (path1[i] != path2[i]) {
      break;
    }
    i++;
  }

  return path1[i - 1];

  function getPath(root, path, k) {
    if (!root) {
      return false;
    }

    path.push(root.val);

    if (root.val == k) {
      return true;
    }

    if (
      (root.der && getPath(root.der, path, k)) ||
      (root.izq && getPath(root.izq, path, k))
    ) {
      return true;
    }

    path.pop();
    return false;
  }
}

function Node(val) {
  this.val = val;
  this.der = this.izq = null;
}

console.log(ancestroComun(root, 1, 9));

// USER SUBMISSIONS FOLLOW:
