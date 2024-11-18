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
