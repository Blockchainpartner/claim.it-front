export default[
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "string"
            },
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "setOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "string"
            },
            {
                "name": "resolver",
                "type": "address"
            }
        ],
        "name": "setResolver",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "string"
            },
            {
                "indexed": true,
                "name": "label",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "NewOwner",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "resolver",
                "type": "address"
            }
        ],
        "name": "NewResolver",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "string"
            }
        ],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
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
                "name": "node",
                "type": "string"
            }
        ],
        "name": "resolver",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]