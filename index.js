const {MerkleTree} = require("merkletreejs")
const keccak256 = require("keccak256")

// List of 7 public Ethereum addresses
let addresses = ["0x850e98ba35eb835a7ed1b1f4d1e972c1ee241be1","0xc596622a9f186575f7f3b4701ac0c83d034872c7","0xc5abdc8b85d4aeb437539ea32838e97acd77d384","0xd6b83597797f09a61b5ab65b8f77a32030121233","0xd05f7972ff8217840a426109ad405c17db56a01a","0xc50e0a641d298a2ca0a35044c31dbb1b3ac9fe31","0x935224763d86c8b638914fbb5b70de2c9340a161"];

// Hash leaves
let leaves = addresses.map(addr => keccak256(addr))

let hashArray = leaves.map(x => x.toString('hex'));

// Create tree
let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true})

let rootHash = merkleTree.getRoot().toString('hex')

let address = addresses[0]
let hashedAddress = keccak256(address)
let proof = merkleTree.getHexProof(hashedAddress)

console.log("address >>", address)
console.log("hashed address >>", hashedAddress.toString('hex'))
console.log("proof >>", proof)
console.log("root >>", rootHash)
console.log(merkleTree.toString())

// Check proof
let v = merkleTree.verify(proof, hashedAddress, rootHash)


// Pretty-print tree
//console.log("merkle =>>>>> ", merkleTree.toString())
//console.log(hashedAddress.toString('hex'))

//console.log(testingHash.toString('hex'))
//console.log(v)
