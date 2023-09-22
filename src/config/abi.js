export const BEP20_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const BET_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_priceFeedAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "round",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isUp",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BetPlaced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBetAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalPlayers",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "winningAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "winnersCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "upCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "downCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lockTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "answer",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "player",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isUp",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct FatumBet.Bet[]",
            "name": "bets",
            "type": "tuple[]"
          }
        ],
        "indexed": false,
        "internalType": "struct FatumBet.Round",
        "name": "round",
        "type": "tuple"
      }
    ],
    "name": "RoundStarted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_isUp",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "_betAmount",
        "type": "uint256"
      }
    ],
    "name": "bet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "btcPriceFeed",
    "outputs": [
      {
        "internalType": "contract IChainlinkPriceFeed",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBTCPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_roundId",
        "type": "uint256"
      }
    ],
    "name": "getBetList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isUp",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "internalType": "struct FatumBet.Bet[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRound",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBetAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalPlayers",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "winningAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "winnersCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "upCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "downCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lockTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "answer",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "player",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isUp",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct FatumBet.Bet[]",
            "name": "bets",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct FatumBet.Round",
        "name": "round",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_offset",
        "type": "uint256"
      }
    ],
    "name": "getRoundList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBetAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalPlayers",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "winningAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "winnersCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "upCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "downCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lockTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "answer",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "player",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isUp",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct FatumBet.Bet[]",
            "name": "bets",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct FatumBet.Round[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lockRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "rewardBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "roundId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "rounds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalBetAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalPlayers",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "winningAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "winnersCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "upCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "downCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "lockTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "answer",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const AGGREGATOR_ABI = [{ "inputs": [{ "internalType": "address", "name": "_aggregator", "type": "address" }, { "internalType": "address", "name": "_accessController", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "int256", "name": "current", "type": "int256" }, { "indexed": true, "internalType": "uint256", "name": "roundId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "updatedAt", "type": "uint256" }], "name": "AnswerUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "roundId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "startedBy", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "startedAt", "type": "uint256" }], "name": "NewRound", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransferRequested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "acceptOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "accessController", "outputs": [{ "internalType": "contract AccessControllerInterface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aggregator", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_aggregator", "type": "address" }], "name": "confirmAggregator", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_roundId", "type": "uint256" }], "name": "getAnswer", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_roundId", "type": "uint256" }], "name": "getTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestAnswer", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRound", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }], "name": "phaseAggregators", "outputs": [{ "internalType": "contract AggregatorV2V3Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "phaseId", "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_aggregator", "type": "address" }], "name": "proposeAggregator", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "proposedAggregator", "outputs": [{ "internalType": "contract AggregatorV2V3Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "proposedGetRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proposedLatestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_accessController", "type": "address" }], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];