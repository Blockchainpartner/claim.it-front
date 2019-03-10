const claimHolderABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "claimsByTopic",
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
                "name": "_claimId",
                "type": "bytes32"
            }
        ],
        "name": "removeClaim",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
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
        "constant": false,
        "inputs": [
            {
                "name": "_claimId",
                "type": "bytes32"
            },
            {
                "name": "_topic",
                "type": "bytes32"
            },
            {
                "name": "_scheme",
                "type": "uint256"
            },
            {
                "name": "_issuer",
                "type": "address"
            },
            {
                "name": "_signature",
                "type": "bytes32"
            },
            {
                "name": "_data",
                "type": "bytes32"
            },
            {
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "changeClaim",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_claimId",
                "type": "bytes32"
            }
        ],
        "name": "toggleApprovaleClaim",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_claimId",
                "type": "bytes32"
            }
        ],
        "name": "getClaim",
        "outputs": [
            {
                "name": "topic",
                "type": "bytes32"
            },
            {
                "name": "scheme",
                "type": "uint256"
            },
            {
                "name": "issuer",
                "type": "address"
            },
            {
                "name": "signature",
                "type": "bytes32"
            },
            {
                "name": "data",
                "type": "bytes32"
            },
            {
                "name": "uri",
                "type": "string"
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
                "name": "_topic",
                "type": "bytes32"
            },
            {
                "name": "_scheme",
                "type": "uint256"
            },
            {
                "name": "_signature",
                "type": "bytes32"
            },
            {
                "name": "_data",
                "type": "bytes32"
            },
            {
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "addClaim",
        "outputs": [
            {
                "name": "claimId",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "name": "claims",
        "outputs": [
            {
                "name": "topic",
                "type": "bytes32"
            },
            {
                "name": "scheme",
                "type": "uint256"
            },
            {
                "name": "issuer",
                "type": "address"
            },
            {
                "name": "signature",
                "type": "bytes32"
            },
            {
                "name": "data",
                "type": "bytes32"
            },
            {
                "name": "uri",
                "type": "string"
            },
            {
                "name": "recipientApproval",
                "type": "bool"
            },
            {
                "name": "parentClaimId",
                "type": "bytes32"
            },
            {
                "name": "isValid",
                "type": "bool"
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
                "name": "_topic",
                "type": "bytes32"
            }
        ],
        "name": "getClaimIdsByTopic",
        "outputs": [
            {
                "name": "claimIds",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
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
                "name": "claimId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "topic",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "scheme",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "issuer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "signature",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "data",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "ClaimApprovalToggled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "claimId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "topic",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "scheme",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "issuer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "signature",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "data",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "ClaimAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "claimId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "topic",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "scheme",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "issuer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "signature",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "data",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "ClaimRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "claimId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "topic",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "scheme",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "issuer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "signature",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "data",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "ClaimChanged",
        "type": "event"
    }
];

export {
    claimHolderABI
}