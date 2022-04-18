class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

// 자바스크립트로 이진 트리 만드는 법

// 트리의 root
let root = null;

/* 루트 노드 생성 */
root = new Node(1);

/*
    현재 트리의 상태

    1
    /   \
    null  null
*/

root.left = new Node(2);
root.right = new Node(3);

/*
    2는 왼쪽 노드 3은 오른쪽 노드가 되며 1의 children 이 된다.
           1
        /     \
       2        3
     /   \     /  \
    null null null null
*/
root.left.left = new Node(4);
/*
    4는 2의 왼쪽 child가 된다.
                1
            /       \
           2          3
         /   \       /  \
        4    null  null  null
      /   \
    null null
*/
