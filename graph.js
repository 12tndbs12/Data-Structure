/**
 * 인접 목록
 */

/**
 * edge 를 무방향 그래프에 추가하는 함수
 *  
 * @param adj
 * @param u
 * @param v
 */
function addEdge(adj,u,v) {
    adj[u].push(v);
    adj[v].push(u);
}

// 인접 목록을 log에 찍어주는 함수
function printGraph(adj) {
    for (let i = 0; i < adj.length; i++) {
        console.log(`인접목록의 정점(v) ${i}`);
        console.log("head");
        for (let j = 0; j < adj[i].length; j++) {
            console.log(` -> ${adj[i][j]}`);
        }
        console.log(" ------------------- ");
    }
}

// 5개의 정점이 있는 그래프 생성
let V = 5;
let adj= [];

for (let i = 0; i < V; i++) {
    adj.push([]);
}
// adj: [ [], [], [], [], [] ]

// edge를 추가
addEdge(adj, 0, 1); // adj: [ [ 1 ], [ 0 ], [], [], [] ]
addEdge(adj, 0, 4); // adj: [ [ 1, 4 ], [ 0 ], [], [], [ 0 ] ]
addEdge(adj, 1, 2); // adj: [ [ 1, 4 ], [ 0, 2 ], [ 1 ], [], [ 0 ] ]
addEdge(adj, 1, 3); // ...
console.log(adj)
addEdge(adj, 1, 4); // ...
addEdge(adj, 2, 3); // ...
addEdge(adj, 3, 4); // ...
// adj: [ [ 1, 4 ], [ 0, 2, 3, 4 ], [ 1, 3 ], [ 1, 2, 4 ], [ 0, 1, 3 ] ]
/**
 * head는 정점을 의미한다.
 *
 * 인접목록의 정점(v) 0
 * head -> 1 -> 4
 *  -------------------
 * 인접목록의 정점(v) 1
 * head -> 0 -> 2 -> 3 -> 4
 * -------------------
 * 인접목록의 정점(v) 2
 * head -> 1 -> 3
 * -------------------
 * 인접목록의 정점(v) 3
 * head -> 1 -> 2 -> 4
 * -------------------
 * 인접목록의 정점(v) 4
 * head -> 0 -> 1 -> 3
 * -------------------
 */
printGraph(adj);


/**
 * 또는
 */


const adjacencyList = new Map();
adjacencyList.set(0, [1,4]);
adjacencyList.set(1, [0,4,2,3]);
adjacencyList.set(2, [1,3]);
adjacencyList.set(3, [1,4,2]);
adjacencyList.set(4, [3,0,1]);

/**
 * Map(5) {
 *   0 => [ 1, 4 ],
 *   1 => [ 0, 4, 2, 3 ],
 *   2 => [ 1, 3 ],
 *   3 => [ 1, 4, 2 ],
 *   4 => [ 3, 0, 1 ]
 * }
 */
console.log(adjacencyList);
