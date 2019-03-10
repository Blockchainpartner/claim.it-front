const identityABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_operationType",
                "type": "uint256"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_key",
                "type": "bytes32"
            }
        ],
        "name": "getData",
        "outputs": [
            {
                "name": "_value",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "store",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_key",
                "type": "bytes32"
            },
            {
                "name": "_value",
                "type": "bytes32"
            }
        ],
        "name": "setData",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "key",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "value",
                "type": "bytes32"
            }
        ],
        "name": "DataChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "contractAddress",
                "type": "address"
            }
        ],
        "name": "ContractCreated",
        "type": "event"
    }
];

export {
    identityABI,
}