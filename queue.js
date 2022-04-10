// Queue class
class Queue {
    // Array를 사용하여 Queue를 구현
    constructor() {
        this.queue = [];
    }

    // queue에 항목 추가
    enqueue(element) {
        this.queue.push(element);
    }

    // queue에서 항목 제거
    dequeue() {
        // 큐가 비어있으면 'underflow'
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.queue.shift();
    }

    // queue에 첫번째 항목
    front() {
        if(this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.queue[0];
    }

    // queue에 마지막 항목
    rear() {
        return this.queue[this.queue.length - 1];
    }
    // queue가 비었는지 확인
    // 비었다면 true
    isEmpty() {
        return this.queue.length === 0;
    }

    // queue를 출력하는 함수
    printQueue()
    {
        let string = "";
        for(let i = 0; i < this.queue.length; i++)
            string += `${this.queue[i]} `;
        return string;
    }
}

// 새로운 큐 생성
const queue = new Queue();

// 현재 큐는 빈 상태
// returns Underflow
console.log(queue.dequeue()); // Underflow
console.log(queue.isEmpty()); // true

// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue.enqueue(10); // 현재 큐의 상태: [10]
queue.enqueue(20); // 현재 큐의 상태: [10, 20]
queue.enqueue(30); // 현재 큐의 상태: [10, 20, 30]
queue.enqueue(40); // 현재 큐의 상태: [10, 20, 30, 40]
queue.enqueue(50); // 현재 큐의 상태: [10, 20, 30, 40, 50]
queue.enqueue(60); // 현재 큐의 상태: [10, 20, 30, 40, 50, 60]
console.log(queue.printQueue()); // 10 20 30 40 50 60
console.log(queue.isEmpty()); // false


console.log(queue.front()); // 10
console.log(queue.rear());  // 60

// 큐에서 10을 삭제
console.log(queue.dequeue()); // 현재 큐의 상태: [20, 30, 40, 50, 60]

console.log(queue.front()); // 20
console.log(queue.rear());  // 60

// 큐에서 20을 삭제
console.log(queue.dequeue()); // 현재 큐의 상태: [30, 40, 50, 60]

console.log(queue.printQueue()); // 30 40 50 60
