import React, { useRef, useEffect, useState} from 'react';
//import { useCookies } from 'react-cookie';
import {Typography, TextField, Input, Button, ButtonGroup} from '@mui/material';
import {
  Stack, Queue, Deque, EnhancedSet, LinkedList, LinkedListNode, DoublyLinkedList, DoublyLinkedListNode, Heap, MinHeap, MaxHeap, PriorityQueue, MinPriorityQueue, MaxPriorityQueue, BinarySearchTree, BinarySearchTreeNode, AvlTree, AvlTreeNode, Trie, TrieNode, Graph, DirectedGraph,
} from 'datastructures-js';

type CustomGraphObject ={
	pos:number[]
	str:string
	isBody:boolean
	isApple:boolean
	isGround:boolean
	type:string
}
// @ts-expect-error
const adjacentes = (a, xMax, yMax) => [[a[0], a[1] - 1], [a[0] + 1, a[1]], [a[0], a[1] + 1], [a[0] - 1, a[1]]].filter(b => b[0] >= 0 && b[1] >= 0 && b[0] <= xMax && b[1] <= yMax);
const equals = ([x1, y1]:[number,number], [x2, y2]:[number,number]) => x1 === x2 && y1 === y2;
// @ts-expect-error
const includes = (a, b) => a.some((a) => equals(a, b));
const difference = (a:number[][], b:number[][]) => a.filter((a) => !includes(b, a));
// @ts-expect-error
const shift = (a, b, collect) => b.concat(a).slice(0, b.length + (a.length - b.length + (collect ? 1 : 0)));
const tail = (a:number[][]) => a[a.length - 1];
function search(start:number[], end:number[], xMax:number, yMax:number, snake:number[][]){
  const queue = [start];

// @ts-expect-error
  const paths = { [start]: [start] };

  while (queue.length) {
    const current = queue.shift();
// @ts-expect-error
    const snakeShifted = shift(snake, paths[current] = paths[current] || [start]);

// @ts-expect-error
    if (equals(current, end)) {
// @ts-expect-error
      return paths[current];
    }

    for (const next of difference(adjacentes(current, xMax, yMax), snakeShifted)) {
// @ts-expect-error
      if (!(next in paths)) {
        queue.push(next);
// @ts-expect-error
        paths[next] = [next].concat(paths[current]);
      }
    }
  }
};
function heuristic(cell:number[], xLength:number, yLength:number, snake:number[][], point:number[]) {
  const size = (xLength * yLength) * 2;
  const xMax = xLength - 1;
  const yMax = yLength - 1;

  if (!includes(adjacentes(snake[0], xMax, yMax), cell)) return 0;

  const pathToPoint = search(cell, point, xMax, yMax, snake);

  if (pathToPoint) {
    const snakeAtPoint = shift(snake, pathToPoint, true);

    for (const next of difference(adjacentes(point, xMax, yMax), snakeAtPoint)) {
      if (search(next, tail(snakeAtPoint), xMax, yMax, snakeAtPoint)) {
        return pathToPoint.length;
      }
    }
  }

  const pathToTail = search(cell, tail(snake), xMax, yMax, snake);

  if (pathToTail) {
    return size - pathToTail.length;
  }

  return size*2;
}



function randLen(x:number){return Math.floor(Math.random()*x)};
function manhattanDistance(a:number[],b:number[]){return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1]);};
function euclideanDistance(a:number[],b:number[]){const c=a[0]-b[0];const d=a[1]-b[1]; return Math.sqrt(c**2+d**2);};
function docGet(param:string){return document.getElementById(param)!;};
function getNeighbors(grid: number[][], row: number, col: number) {
  const neighbors: [number, number][] = [];
  const rows = grid.length;
  const cols = grid[0].length;
  if (row > 0) neighbors.push([row - 1, col]);
  if (row < rows - 1) neighbors.push([row + 1, col]);
  if (col > 0) neighbors.push([row, col - 1]);
  if (col < cols - 1) neighbors.push([row, col + 1]);
  return neighbors;
}
class Node {
  constructor(
    public pos: number[],
    public g: number,
    public h: number,
	public l: number,
	public e: number,
	public f: number,
    public parent?: Node
  ) {}
}

class Snake extends React.Component<any,any>  {
	RENDER:boolean=true
	LEARN:boolean=false
	graph:Graph<number,CustomGraphObject>=new Graph();
	updateTime:number=50;
	cycles:number=0;
	row:number=10;col:number=10;curLen:number=1;
	head:number[]=[0,0];rear:number[]=[0,0];
	board:string[][]=[];
	tracker:number=0;
	maxIterations:number= 5000000;
	boardMap:string[][][]=[];
	apple:number[]=[3,3];
	snake:number[][]=[[0,0]];
	swapping:boolean=true;
	runKeys:string[]=[]
	lastScore:number=0;
	curScore:number=0;
	highScoreLen:number=0;
	highScoreCycles:number=0;
	epsilon:number= 2e-6;//increment parameters by epsilon
	learningRate:number= 0.1;//modify gradient by learningRate
	/*
	searchParamList:number[]=		[1.5310591563358016,-1.640842277505059,-0.09657348087750109,2.0934769947582996]
	searchParamListDefault:number[]=[1.5310591563358016,-1.640842277505059,-0.09657348087750109,2.0934769947582996]
	searchParamListBest:number[]=	[1.5310591563358016,-1.640842277505059,-0.09657348087750109,2.0934769947582996]
	*/
	searchParamList:number[]=		[2,2,1,0]
	searchParamListDefault:number[]=[2,2,1,0]
	searchParamListBest:number[]=	[2,2,1,0]
	searchParamStack:number[][]=[]
	searchParamResults:Map<string,number>=new Map()
	gradient:number[]=[]
	performanceRunMap:Map<string,number[]>=new Map()
	performanceTotalMap:Map<string,number>=new Map() 	
	iterationsPerSim:number=20
	iterationsCurrent:number=0
	snakeq:Queue<number[]>=new Queue();
	neighbors:number[][]=[];
	adjacency:CustomGraphObject[][]=[];
	init:boolean=true;;
	path:Map<string,number[]>=new Map();
	pathOne:Map<string,number[]>=new Map();
	constructor(props:any){
		super(props);
		this.state={
			frame:0
		}
		if(false){
			this.row=parseInt(this.props.row);
			this.col=parseInt(this.props.col);
		}
		console.log('start init')
		this.board = Array(this.row).fill(Array(this.col).fill(0));
		this.board = this.board.map((list)=>{return list.map((el)=>{return 'ground'})});
		this.gradient = Array(this.searchParamList.length).fill(0)
		this.snakeq.enqueue(this.head);
		this.renderBoard(true)
		this.createGradient()
		this.searchParamStack.push(this.searchParamList)
		this.createAdjacency()
		this.renderBoard = this.renderBoard.bind(this);
		this.update = this.update.bind(this);
		console.log('end init')
	}
	parse(a:string){return a.split(',').map((b)=>{return parseInt(b)})}
	getNeighbors(row: number, col: number) {
		const neighbors: number[][] = [];
		if (row > 0			) 	neighbors.push([row - 1, col]);
		if (row < this.row - 1)	neighbors.push([row + 1, col]);
		if (col > 0			)	neighbors.push([row, col - 1]);
		if (col < this.col - 1) 	neighbors.push([row, col + 1]);
		return neighbors;
	}
	getFreeNeighbors(r:number,c:number){
		const out = this.getNeighbors(r,c).filter((e)=>{const color = this.board[e[0]][e[1]]; return color==='apple'||color==='ground'})
		return out
	};
	getFreeNeighborsWithNode(r:number,c:number,curNode:Node){
		//console.log("BBBB")
		//const pathToHead = this.buildPathFromNode(curNode);
		//console.log("CCCC")
		//console.log(this.snakeq.toArray())
		//console.log(curNode.pos)
		const newBody = (this.snakeq.toArray().concat(curNode.pos))
		//const newBody = pathToHead.concat(this.snakeq.toArray())		
		//console.log(pathToHead)
		//console.log(this.snakeq.toArray())
		//console.log(newBody)
		//console.log(this.inBody(0,0,this.snakeq.toArray()))
		//console.log(`${this.snakeq.size()===newBody.length} len ${this.snakeq.size()} new ${newBody.length}`)

		//return true if not in body inBody
		const out:number[][] = this.getNeighbors(r,c).filter((e)=>
			{return !this.inBody(e[0],e[1],newBody)})
		//console.log(out)
		return out
	};
	randTotal(){return Math.floor(Math.random()*this.col*this.row)};
	randRow(){return Math.floor(Math.random()*this.row)};
	randCol(){return Math.floor(Math.random()*this.col)};
	createGradient(){
	  for (let i = 0; i < this.searchParamListDefault.length; i++) {
		const perturbedPlus = [...this.searchParamListDefault];
		perturbedPlus[i] += this.epsilon;
		const perturbedMinus = [...this.searchParamListDefault];
		perturbedMinus[i] -= this.epsilon;
		//console.log(perturbedPlus)
		//console.log(perturbedMinus)
		this.searchParamStack.push(perturbedPlus)
		this.searchParamStack.push(perturbedMinus)
		this.searchParamResults.set(`Plus${i}`,0)
		this.searchParamResults.set(`Minus${i}`,0)
		}
	}
	calculateGradient() {
	  for (let i = 0; i < this.searchParamListDefault.length; i++) {
		//retreive performance values from delayed simulation
		const performancePlus = this.searchParamResults.get(`Plus${i}`)!
		//console.log(`perfP ${i}=${performancePlus}`);
		const performanceMinus = this.searchParamResults.get(`Minus${i}`)!
		//console.log(`perfM ${i}=${performanceMinus}`);

		// calculate the gradient for the parameter
		this.gradient[i] = (performancePlus-performanceMinus)
	  }
	}
	updateGradientBaseValue(){
		//update the current searchParamList for the next gradient creation
		this.searchParamList = this.searchParamListDefault.map((a,i)=>{return a-this.gradient[i]*this.learningRate})
		this.searchParamListDefault = this.searchParamList.flat()
	}
	clearAll() {
		this.board = Array(this.row).fill(Array(this.col).fill(0));
		this.board = this.board.map((list)=>{return list.map((el)=>{return 'ground'})});
		this.snakeq.clear()
		this.head = [0,0]; this.apple=[3,3]
		this.snakeq.enqueue(this.head);
		this.curLen = 1;
		this.path.clear();
		this.renderBoard(this.RENDER);//set to false to not render
	};
	renderBoard(r:boolean){
		this.board = this.board.map((list)=>{return list.map((el)=>{return 'ground'})});
		this.snakeq.toArray().map((e)=>{this.board[e[0]][e[1]]='body'});

		//validate snakeq
		//const snakeSet = new Set(this.snakeq.toArray().map((a)=>{return a.toString()}))
		//console.log(snakeSet.size == this.snakeq.size())

		if(this.apple!=undefined && this.apple[0]>-1) this.board[this.apple[0]][this.apple[1]] = 'apple';

		this.boardMap = this.board.map((r:string[],i)=>{
			return r.map((e:string,j)=>{
				return [e,this.board[i][j]==='body'?`hsl(${100+i*j},50%,50%)`:'',(i*this.col+j).toString()]
				})
		})
		if(r) this.setState((state:any)=>{return{frame:this.state.frame+1}});
	};	
	getCoords(head: Node): number[][] {
		const coords: number[][] = [];
		let node: Node = head;
		while (node.parent != undefined) {
			coords.push(node.pos);
			node = node.parent;
		}
		return coords;
	}
	scoreCoords(coords: number[][]): number {
	  // calculate the bounding box for the coordinates
	  let minX = Number.POSITIVE_INFINITY;
	  let minY = Number.POSITIVE_INFINITY;
	  let maxX = Number.NEGATIVE_INFINITY;
	  let maxY = Number.NEGATIVE_INFINITY;
	  for (const coord of coords) {
		const [x, y] = coord;
		minX = Math.min(minX, x);
		minY = Math.min(minY, y);
		maxX = Math.max(maxX, x);
		maxY = Math.max(maxY, y);
	  }

	  // calculate the width and height of the bounding box
	  const width = maxX - minX;
	  const height = maxY - minY;

	  // calculate the area of the bounding box
	  const area = width * height;

	  // calculate the average distance between points
	  let sumDistance = 0;
	  for (let i = 0; i < coords.length; i++) {
		for (let j = i + 1; j < coords.length; j++) {
		  const [x1, y1] = coords[i];
		  const [x2, y2] = coords[j];
		  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
		  sumDistance += distance;
		}
	  }
	  const avgDistance = sumDistance / (coords.length * (coords.length - 1) / 2);

	  // calculate the score
	  const score = avgDistance / Math.sqrt(area);
	  return score;
	}

	updatePath(){
		//console.log('useAStar')
		this.path.clear()
		const path:number[][]=[];
		const pathMap = new Map<string,number[]>();
		const result = this.astar(this.head,this.apple,this.apple,path,pathMap,(g:number,h:number,l:number,e:number)=>{
			return this.searchParamList[1]*g+this.searchParamList[1]*h+this.searchParamList[1]*l+this.searchParamList[1]*e
		})
		//console.log('after search')
		//console.log(this.head);
		//console.log(this.apple);
		//console.log(this.getFreeNeighbors(this.head[0],this.head[1]))
		//console.log(path)
		//console.log(path[path.length-2])
		//console.log('return path')
		if(!result) {
			console.log('resolved to greedy')
			this.path.set(this.head.toString(),this.greedySafe())
		}

	}
	multiPath(){
		this.path.clear()
		const path:number[][]=[];
		const pathMap = new Map<string,number[]>();
		let result = 
		this.astar(this.head,this.apple,this.apple,path,pathMap,(g:number,h:number,l:number,e:number)=>{
			return g+h+l*10
		})
		this.path = pathMap
		
		if(!result) {
			this.path = pathMap
			console.log('no path to apple, route to rear')
			result =  this.astar(this.head,this.rear,this.rear,path,pathMap,(g:number,h:number,l:number,e:number)=>{
				return g+h
			});

			if(!result){
				this.path.clear()
				console.log('resolved to available')
				this.path.set(this.head.toString(),this.random())
			}
		}
	}
	useAStar(){
		//console.log(`path size ${this.path.size}`)
		if(this.path.size == 0){
			console.log('making new path')
			//this.updatePath()
			//console.log(this.swapping);
			//this.multiPath()
			//this.multiPath()
			this.simplePath();
		}
		//this.updatePath()
		//console.log(this.path);
		const nextNode = this.path.get(this.head.toString())
		this.path.delete(this.head.toString())
		if(nextNode===undefined) {
			//console.log('THREW UNDEFINED')
		}
		return nextNode
		//return path[path.length-2]
	}
	buildPathFromNode(n:Node){
		const path:number[][]=[]
		while(n!=undefined){
			path.push(n.pos)
			n = n.parent!
		}
		return path;
	}
	simplePath(){
		this.path.clear()
		
	}
	bfs(start:number[],goal:number[]){
		
		
	}
	astar(start:number[],goal:number[],drawTo:number[],path:number[][],pathMap:Map<string,number[]>,comparator:(g:number,h:number,l:number,e:number)=>number):boolean{
		const closed:Set<string>=new Set()
		const open  :Set<string>=new Set()
		const all   :Set<string>=new Set()
		const nodeList:Node[][]= new Array(this.row).fill(new Array(this.col))

		const pq = new PriorityQueue<Node>(
		(a:Node,b:Node)=>{
			if(a.f > b.f) return 1
			if(a.f < b.f) return -1
			return 0
		})
		
		const node:Node = new Node(start,0,0,0,0,0)
		nodeList[node.pos[0]][node.pos[1]]=node;
		open.add(start.toString())
		pq.clear()
		pq.push(node)

		while(open.size>0 && ++this.tracker < this.maxIterations){
		//while(pq.size()>0 && ++this.tracker < this.maxIterations){
			//const cur = pq.pop();
			//const curs = Array.from(open.keys())!.pop()!;
			//const curp = this.parse(curs)
			//let cur = nodeList[curp[0]][curp[1]]
			let cur = pq.pop()
			let curs= cur.pos.toString()
			open.delete(curs)
			closed.add(curs)
			all.add(curs);
			//this.createAdjacency()

			let neighborsPos = this.getFreeNeighbors(cur.pos[0],cur.pos[1])
			//console.log(neighborsPos)
			let h1 = 0, h2 = 0;
			/*
			let neighborSet:Set<string> = new Set()
			for (let depth = 0; depth < 3; depth++){
				let newNeighborSet:Set<string> = new Set()
				Array.from(neighborSet).map((a)=>{
					const v = this.parse(a);newNeighborSet.add(this.getFreeNeighbors(v[0],v[1]).toString())
				})
				neighborSet=newNeighborSet;
			}
			h1 = neighborSet.size
			h2 = this.scoreCoords(this.getCoords(cur));
			*/
			let curPath = this.buildPathFromNode(cur)
			curPath.map((v)=>{this.graph.removeEdges(this.makeId(v))})
			let neighborsNode = neighborsPos.map((a)=>{return new Node(a,0,0,h1,h2,0,cur)})

/*
			console.log(`------------tracker ${this.tracker}---------------`)
			console.log(`pq size ${pq.size()}`)
			console.log(pq)
			console.log(`open size ${open.size}`)
			//console.log(open)
			console.log(`closed size ${closed.size}`)
			console.log(`all size ${all.size}`)
			//console.log(closed)
			console.log(`cur ${curs}`)
			console.log(`neighbor size ${neighborsNode.length}`)
*/
			for(let n of neighborsNode){
				if(n.pos.toString()===goal.toString()){

/*
					let last = 0;
					const allPrevEdges:number[][]=[]
					const prevEdgeCound = this.graph.getEdgesCount()
					const pathList = this.buildPathFromNode(n.parent!)
					pathList.map((c)=>{//for every vertex named c in the path, store all vertexes connected named v
						const prevEdges = Object.getOwnPropertyNames(this.graph.getConnectedEdges(this.makeId([c[0],c[1]]))).map((a)=>{return parseInt(a)})
						prevEdges.map((v)=>allPrevEdges.push([this.makeId(c),v]))
						prevEdges.map((v)=>this.graph.removeEdges(v))
					})
					this.graph.traverseBfs(this.makeId(n.pos),(k,v)=>{last++;},()=>{return false})
					console.log(`board size: ${this.row*this.col} snake: ${this.curLen} nodes found: ${last}`);
					allPrevEdges.map((row,c)=>row.map((col,v)=>this.graph.addEdge(c,v)))
*/
					//console.log(`edges before ${prevEdgeCound} after ${this.graph.getEdgesCount()}`)

					this.path.clear()
					path = []
					let d:Node = n;
					let pathString = '';
					while(d.parent!=undefined && d!=null){
						path.push(d.pos)
						//this.path.set(d.pos.toString(),d.parent.pos);
						pathMap.set(d.parent.pos.toString(),d.pos);
						pathString+=' '+d.pos
						d = d.parent!
					}
					const subPath:number[][] = []
					const subPathMap:Map<string,number[]>=new Map()
					let pathToRearAvail = true
					//console.log('checking current path to rear')
					//console.log(path)
					//console.log(this.path)
					//pathToRearAvail = this.astar(n.pos,this.rear,this.rear,subPath,subPathMap,comparator);
					//console.log(subPath)
					//console.log(subPathMap)
					if(!pathToRearAvail)continue
					
					return true;
				}
				if(!closed.has(n.pos.toString())){
					let last = 0;
					const prevEdges = Object.getOwnPropertyNames(this.graph.getConnectedEdges(this.makeId(n.pos))).map((a)=>{return parseInt(a)})
					prevEdges.map((v)=>this.graph.removeEdges(v))
					this.graph.traverseBfs(this.makeId(n.pos),(k,v)=>{last++;},()=>{return false})
					prevEdges.map((v)=>this.graph.addEdge(this.makeId(n.pos),v))
					n.l=last;
					n.g=cur.g + 1
					n.h=euclideanDistance(n.pos,drawTo)
					n.f=comparator(n.g,n.h,n.l,n.e)
					//n.h=manhattanDistance(n.pos,goal)
					const prev = nodeList[n.pos[0]][n.pos[1]]
					if(open.has(n.pos.toString()) && n.f > prev.f) break;
					open.add(n.pos.toString())
					nodeList[n.pos[0]][n.pos[1]]=n
					pq.push(n);
				}
			}
		}
		//console.log('failed search')
		if(this.tracker==this.maxIterations)console.log('too many iterations')
		this.tracker = 0;	
		return false
	}
	greedy(){
		return this.getFreeNeighbors(this.head[0],this.head[1]).sort((a,b)=>{
			return euclideanDistance(a,this.apple)-euclideanDistance(b,this.apple);
		})[0];
	};
	greedySafe(){
		return this.getFreeNeighbors(this.head[0],this.head[1]).sort((a,b)=>{
			return this.getFreeNeighbors(b[0],b[1]).length - this.getFreeNeighbors(a[0],a[1]).length
		})[0];
	};
	random(){
		const free = this.getFreeNeighbors(this.head[0],this.head[1]);
		return free[randLen(free.length)]
	}
	makeApple(){
		let possibleApple = []
		for(let i = 0; i < this.row; i++){
			for(let j = 0; j < this.col; j++){
				if(this.board[i][j]==='ground') possibleApple.push([i,j])
			}
		}
		let newApple = possibleApple[randLen(possibleApple.length)]
		this.apple = newApple;
	}
	inBoard(r:number,c:number){
		return c>=0 && c < this.col && r>=0 && r < this.row
	}
	choose(r:number,c:number){
		if(this.snakeq.size()>this.curLen) this.rear = this.snakeq.dequeue();
		if(false) {
			this.clearAll();
			throw new Error("bad move kiddo");	
		}
		this.snake.push([r,c]);
		this.snakeq.enqueue([r,c]);
		this.head = [r,c];
		if(this.board[r][c]==='apple'){
			this.apple[0]=-1;
			this.makeApple();
			this.curLen++;
		}
		this.createAdjacency();
		//const d = this.snake[0]
		//this.board[d[0]][d[1]]='ground'
		//this.snake.push(this.head);
	}
	inBody(r:number,c:number,body:number[][]){return 0<body.filter((e)=>{return e[0]==r && e[1]==c}).length;}
	createAdjacency(){
		this.graph = new Graph()
		for(let r = 0; r < this.row; r++){
			for(let c = 0; c < this.row; c++){
				this.adjacency[r*this.col+c] = this.getNeighbors(r,c).map((a)=>{
					return ({pos:a,str:a.toString(),type:this.board[a[0]][a[1]],isBody:this.board[a[0]][a[1]]==='body',isApple:this.board[a[0]][a[1]]==='apple',isGround:this.board[a[0]][a[1]]==='ground'})
				})
			}
		}
		//console.log(this.graph);
	}
	headToTail(){
		const neighbors = this.getFreeNeighbors(this.head[0],this.head[1]);
		//console.log(neighbors)
		let lowN:number[] = [], lowNscore = Number.MAX_SAFE_INTEGER;
		for(let n of neighbors){
			let h = heuristic(n,this.row,this.col,this.snakeq.toArray().reverse(),this.apple)
			//console.log(`searching ${n}   ${h}`)
			if(lowNscore > h && h > 0){
				lowNscore = h;
				lowN = n;
			}
		}
		//console.log(`low ${lowNscore}   ${lowN}`)
		return lowN
	}
	test(){
		console.log('start test')

		const neighbors = adjacentes(this.head,this.row-1,this.col-1);
		console.log(neighbors)
		for(let n of neighbors){
			let h = heuristic(n,this.row,this.col,this.snakeq.toArray(),this.apple)
			console.log(h)
		}

		console.log('end test');
	}
	update(){
			this.cycles++;
			var choice = this.random();
			//choice = this.greedy();
			//choice = this.greedySafe();
			//choice = this.random();
			//choice = this.followPath(this.pathOne) as [number,number];
			//choice = this.useAStar() as [number,number];
			choice = this.headToTail();
			if(choice === undefined || choice[0]===undefined || choice[1]===undefined){

				console.log("UNDEFINED choice");
				//console.log("Game Over");
				console.log(`Score: cycles=${this.cycles} len=${this.curLen} HighScore=${this.highScoreLen} currentParams=${this.searchParamList}`);
				this.lastScore = this.curScore
				if(this.curLen > this.highScoreLen) this.highScoreLen = this.curLen;
				if(this.cycles < this.highScoreCycles) this.highScoreCycles = this.cycles;
				this.cycles=0;
				if(this.LEARN){//use gradient descent
					//optimize length until perfect
					// record data after every run
					if(this.performanceRunMap.has(this.searchParamList.toString())){
						this.performanceRunMap.get(this.searchParamList.toString())!.push(this.curLen)
					}else{
						this.performanceRunMap.set(this.searchParamList.toString(),[this.curLen])
					}

					// end of sim for current param set
					// compute run totals and  reset for new run
					if(++this.iterationsCurrent > this.iterationsPerSim){
						const runPerformance = this.performanceRunMap.get(this.searchParamList.toString())!.reduce((n,p)=>{return n+p},0) / 
							this.performanceRunMap.get(this.searchParamList.toString())!.length
						this.performanceTotalMap.set(this.searchParamList.toString(),runPerformance)
						this.iterationsCurrent = 0;
						this.searchParamList = this.searchParamStack.pop()!
						console.log(`SimScore:  avgLen=${runPerformance} currentParams=${this.searchParamList}`);
						//console.log(this.performanceRunMap);

						//calculate next values	
						//console.log(`searchParamStack.length should be 0=${this.searchParamStack.length} and searchPL=und  ${this.searchParamList}`)
						if(this.searchParamList === undefined){
							//console.log('testMapStringLast param.size*2')
							const latestPerfTotals = Array.from(this.performanceTotalMap.entries()).slice(this.performanceTotalMap.size-this.searchParamListDefault.length*2)
							//console.log(this.performanceTotalMap);
							//console.log(latestPerfTotals);
							for(let i = 0; i < latestPerfTotals.length; i+=2){
								this.searchParamResults.set(`Minus${Math.floor(i/2)}`,latestPerfTotals[i+1][1])
								//console.log(`${Math.floor(i/2)} ${i+1} MINUS  latestPerfTotals ${latestPerfTotals[i+1][1]}`)
								this.searchParamResults.set(`Plus${Math.floor(i/2)}`,latestPerfTotals[i][1])
								//console.log(`${Math.floor(i/2)} ${i} PLUS  latestPerfTotals ${latestPerfTotals[i][1]}`)
							}
							if( this.performanceTotalMap.get(this.searchParamListDefault.toString())! >
								this.performanceTotalMap.get(this.searchParamListBest.toString())!){
								this.searchParamListBest = this.searchParamListDefault.flat()
							}
							this.searchParamListDefault = this.searchParamListBest.flat()
							//console.log('calculate gradient')
							this.calculateGradient()
							//console.log('update base vector')
							this.updateGradientBaseValue()
							//console.log('add new search options to stack')
							this.createGradient()
							//also adds parameters to searchParamList, acting as FILO type queue
							this.searchParamStack.push(this.searchParamList)
							console.log(`MoveDefault bestParam:${this.searchParamListBest} =avg= ${this.performanceTotalMap.get(this.searchParamListBest.toString())!} defaultParam${this.searchParamListDefault}`)
						}

					}
				}
				this.clearAll()
				return
			}
			//console.log(choice);
			try{
				this.choose(choice[0],choice[1]);
			}catch(a:unknown){
				console.log('random error when close to tail?')
				console.log(choice)
				console.log(a)
				this.clearAll()
			}
			this.renderBoard(this.RENDER);//set to false to not render
	};
	componentDidMount(){
	};
	getId(index: number): number[] {
		const row = Math.floor(index / this.col);
		const col = index % this.col;
		return [row, col];
	}

	makeId(index:number[]): number {
		return this.col*index[0]+index[1]
	}
	ControlButtons(){		
		return (<div>
		<ButtonGroup color="error" variant="contained">
			<Button  onClick={(c)=>{
				const intervalId = setInterval(this.update,this.updateTime);
			}}>
				Start
			</Button>
			<Button   onClick={()=>{this.test();/*this.clearAll()*/;Array(1000).fill(0).map((el, i)=>{clearInterval(i)});}}>
				Stop
			</Button>
			<Button   onClick={()=>{this.clearAll();Array(1000).fill(0).map((el, i)=>{clearInterval(i)});}}>
				Clear
			</Button>
			<Button   onClick={()=>{this.test();}}>
				Test
			</Button>
		</ButtonGroup>
			</div>);

	};
	Sidebar() {
		return (
		<>
		<Typography color="primary" align="center" variant="h3">hello snake</Typography>
		<h1 color="primary">he</h1>
		{this.ControlButtons()}
		</>
		);
	}
	Board() {
		const rows = this.boardMap.map((r:Array<Array<string>>)=>{
			return (
				<tr>
					{r.map((c:Array<string>)=> {
					const tmpId = this.getId(parseInt(c[2])).toString()
					return (
						<td id={tmpId}
						className ={c[0]+" cellBase"}
						style={{backgroundColor:c[1]}}>
						<div className={this.path.has(tmpId)?'path':''}></div>
						</td>
					)})}
				</tr>)
		});
		return(
		<>
			<table>
			<tbody>
			{rows.map((el:any,i:number)=>{return el})}
			</tbody>
			</table>
</>
	)
}



render(){return (
<div>
<TextField fullWidth  color="warning" helperText="nothing here"/>
  {this.Sidebar()}
  <div id="container" className="container">
  {this.Board()}
  </div>
</div>
);
}
}
export default Snake;
