class Stack {
    constructor() {
        // 빈배열로 stack을 초기화
        this.stackArray = [];
    }

    // stack 마지막에 item 추가
    push(item) {
        this.stackArray.push(item);
    }

    // stack 마지막 item 제거
    pop() {
        return this.stackArray.pop();
    }

    // stack의 최상위 item 반환
    peek() {
        return this.stackArray[this.stackArray.length - 1];
    }

    // stack print
    print()  {
        console.log(`Stack: [${this.stackArray}]`);
    }
    
    // 스택이 비었는지 확인 비었으면 true 아니면 false
    isEmpty () {
        return this.stackArray.length === 0;
    }
}

const stack = new Stack();
console.log(`Is stack empty?: ${stack.isEmpty()}`); // 현재 stack은 [] 이기 때문에 'Is stack empty?: true'
stack.push(1);  // 현재 스택의 상태: [1]
stack.push(2);  // 현재 스택의 상태: [1, 2]
stack.push(3);  // 현재 스택의 상태: [1, 2, 3]
console.log(`Stack의 최상위 item: ${stack.peek()}`)   // Stack의 최상위 item: 3
stack.print()   // Stack: [1,2,3]
console.log(`${stack.pop()} 이 Stack에서 삭제되었습니다.`);    // 3 이 Stack에서 삭제되었습니다.
stack.print()   // Stack: [1, 2]
console.log(`Stack의 최상위 item: ${stack.peek()}`)   // Stack의 최상위 item: 2
console.log(`Is stack empty?: ${stack.isEmpty()}`); // 현재 stack은 [1, 2] 이기 때문에 'Is stack empty?: false'
