let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [num, ...array] = input

class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {        
        const subtractItem = this.items.pop()
        return subtractItem === undefined ? -1 : subtractItem
    }

    top() {
        const topItem = this.items.at(-1)
        return topItem === undefined ? -1 : topItem
    }

    empty() {
        return this.items.length === 0 ? 1 : 0
    }
    
    size() {
        return this.items.length
    }
}


const stack = new Stack()
let result = [];

for(let i=0; i<array.length; i++) {
    const cmd = array[i].split(' ')
    const code = cmd[0]

    if(code === 'push') stack.push(cmd[1])
    if(code === 'top') result.push(stack.top())
    if(code === 'size') result.push(stack.size())
    if(code === 'pop') result.push(stack.pop())
    if(code === 'empty')result.push(stack.empty())
}

console.log(result.join('\n'))