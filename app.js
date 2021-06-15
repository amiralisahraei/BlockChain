let hash = require('object-hash')

let BlockChain = require('./BlockChain')

let blockchain = new BlockChain()

let PROOF = 1578

let ValiaProof = (proof) => {
    let guessHash = hash(proof)
    console.log(`Hashing : ${guessHash}`)
    return guessHash == hash(PROOF)
}

let proofOfwork = () => {
    let proof = 0
    while (true) {
        if (!ValiaProof(proof)) {
            proof++
        } else {
            break
        }
    }
    return proof
}

if (proofOfwork() == PROOF) {
    blockchain.addNewTransaction("Ali", "Reza", 200)
    let prevHash = blockchain.lastBloc() ? blockchain.lastBloc().hash : null;
    blockchain.addNewBlock(prevHash)
}

console.log("Chain is : ",blockchain.chain)