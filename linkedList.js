// Linked list 노드 생성자 클래스
let head;
class Node {
  constructor(d)
  {
    // 실제로 객체안에 들어있는 데이터
      this.data = d;
    // 포인터
      this.next = null;
  }
}

  head = new Node(1);	// 첫번째 head
  const second = new Node(2);
  const third = new Node(3);

/*
  현재 각 노드들의 상태

  llist.head        second              third
      |                |                  |
      |                |                  |
  +----+------+     +----+------+     +----+------+
  | 1  | null |     | 2  | null |     |  3 | null |
  +----+------+     +----+------+     +----+------+ 
*/

  head.next = second; // 첫번째 node인 head의 포인터를 second 노드로 연결

/*  
  현재 각 노드들의 상태

  llist.head        second              third
      |                |                  |
      |                |                  |
  +----+------+     +----+------+     +----+------+
  | 1  |  o-------->| 2  | null |     |  3 | null |
  +----+------+     +----+------+     +----+------+ 
*/

  second.next = third; // 두번째 node인 second의 포인터를 third 노드로 연결

/*  
  현재 각 노드들의 상태

  llist.head        second              third
      |                |                  |
      |                |                  |
  +----+------+     +----+------+     +----+------+
  | 1  |  o-------->| 2  |  o-------->|  3 | null |
  +----+------+     +----+------+     +----+------+ 
*/


const insertFirst = (new_data) => {
    /* 1 & 2: 새로운 노드를 만들고 데이터를 넣는다 */
    const new_node = new Node(new_data);

    /* 3. 새로 만든 노드의 포인터를 기존의 head로 만든다. */
    new_node.next = head;

    /* 4. head를 new_node로 바꾼다. */
    head = new_node;
}
const fourth = insertFirst(4);

const insertMiddle = (prev_node , new_data) => {

    /* 1. 이전 노드가 null 이나 undefined 인지 check */
    if (!prev_node) {
        throw new Error('이전 노드가 null 입니다.')
        return;
    }

    /* 2 & 3. 새로운 노드를 생성 후 데이터를 넣는다. */
    const new_node = new Node(new_data);

    /* 4. 새로운 노드의 포인터를 이전 노드의 next로 변경  */
    new_node.next = prev_node.next;

    /* 5. 이전 노드의 포인터를 새로운 노드로 변경 */
    prev_node.next = new_node;
}

const fifth = insertMiddle(second, 5)

const insertLast = (new_data) => {
    /* 1 & 2 & 3. 노드를 만들고 데이터를 추가 한 후, next를 null로 설정한다(tail이기 때문) */
    const new_node = new Node(new_data);

    /* 4. Linked List가 빈 경우 새로운 노드를 헤드로 만든다 */
    if (!head) {
        head = new Node(new_data);
        return;
    }
    /* 5. Else traverse till the last node */
    let last = head;
    while (last.next != null) {
        last = last.next;
    }

    /* 6. 마지막 노드에 추가  */
    last.next = new_node;
    return;
}

const sixth = insertLast(6)


const printList = () => {
    let node = head;
    while (node != null) {

      console.log(`data: ${node.data}, next: ${node.next}`);
      node = node.next;
    }
}

console.log('---------삭제 이전---------')
printList();
/**
 * data: 4, next: [object Object]
 * data: 1, next: [object Object]
 * data: 2, next: [object Object]
 * data: 5, next: [object Object]
 * data: 3, next: [object Object]
 * data: 6, next: null
 */

// data를 받아서 해당하는 data가 들어있는 노드 삭제
const deleteNode = (data) => {
    // temp에 head를 저장하고 이전 노드(prev)를 선언
    let temp = head, prev = null;

    // head 노드 자체가 지워질 경우
    if (temp != null && temp.data === data) {
        head = temp.next; // 헤드를 바꾸고 return
        return;
    }
    
    // data가 들어있는 삭제될 노드 찾기
    // 찾으면 loop를 빠져나감
    while (temp != null && temp.data !== data) {
        prev = temp;
        temp = temp.next;
    }

    // data가 Linked List안에 없는 경우 retrun
    if (temp == null) {
        return;
    }

    // 이전 노드의 next를 삭제할 노드의 next로 재할당해서 해당 노드를 Linked List에서 삭제
    prev.next = temp.next;
}

deleteNode(2); // data가 2인 노드 삭제


console.log('---------삭제 이후---------')
printList();
/**
 * data: 4, next: [object Object]
 * data: 1, next: [object Object]
 * data: 5, next: [object Object]
 * data: 3, next: [object Object]
 * data: 6, next: null
 */
