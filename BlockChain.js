hash = require('object-hash')

class BlockChain {
    constructor() {

        //Create
        this.chain = []
        //Transaction
        this.curr_trabsaction = []
    }

    addNewBlock(prevHash) {
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            trasnaction: this.curr_trabsaction,
            prevHash: prevHash
        }
        // Put Hash
        this.hash = hash(block)
        // Add to Chain
        this.chain.push(block)
        this.curr_trabsaction = []
        return block
    }

    addNewTransaction(sender, recipient, amount) {
        this.curr_trabsaction.push({ sender, recipient, amount })
    }

    lastBloc() {
        return this.chain.slice(-1)[0]
    }

    isEmpty() {
        return this.chain.length == 0
    }
}


module.exports = BlockChain 