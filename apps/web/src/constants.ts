export const nodeEnv = process.env.NODE_ENV;
export const docsUrl = process.env.DOCS_URL ?? 'https://docs.base.org';
export const bridgeUrl = process.env.BRIDGE_URL ?? 'https://bridge.base.org';
export const greenhouseApiUrl =
  process.env.GREENHOUSE_HTTPS ?? 'https://boards-api.greenhouse.io/v1';
export const mainnetLaunchBlogPostURL =
  process.env.MAINNET_LAUNCH_BLOG_POST_URL ?? 'https://base.mirror.xyz/';
export const mainnetLaunchFlag = process.env.MAINNET_LAUNCH_FLAG ?? 'false';
export const isDevelopment = nodeEnv === 'development';

export const CB_SW_PROXY_BYTECODE =
  '0x363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f3';
export const CB_SW_V1_IMPLEMENTATION_ADDRESS =
  '0x000100abaad02f1cfC8Bbe32bD5a564817339E72';
export const ERC_1967_PROXY_IMPLEMENTATION_SLOT =
  '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc';
export const CB_SW_FACTORY_ADDRESS =
  '0x0BA5ED0c6AA8c49038F819E587E2633c4A9F428a';
export const magicSpendAddress = "0x011A61C07DbF256A68256B1cB51A5e246730aB92";

export const coinbaseSmartWalletABI = [
  {
    type: "function",
    name: "executeBatch",
    inputs: [
      {
        name: "calls",
        type: "tuple[]",
        internalType: "struct CoinbaseSmartWallet.Call[]",
        components: [
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
];

export const RegistrarControllerABI = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "base_",
        "type": "address",
        "internalType": "contract BaseRegistrar"
      },
      {
        "name": "prices_",
        "type": "address",
        "internalType": "contract IPriceOracle"
      },
      {
        "name": "reverseRegistrar_",
        "type": "address",
        "internalType": "contract IReverseRegistrar"
      },
      {
        "name": "owner_",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "rootNode_",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "rootName_",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "MIN_NAME_LENGTH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "MIN_REGISTRATION_DURATION",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "available",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "cancelOwnershipHandover",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "completeOwnershipHandover",
    "inputs": [
      {
        "name": "pendingOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "discountedRegister",
    "inputs": [
      {
        "name": "request",
        "type": "tuple",
        "internalType": "struct RegistrarController.RegisterRequest",
        "components": [
          {
            "name": "name",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "duration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "resolver",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "data",
            "type": "bytes[]",
            "internalType": "bytes[]"
          },
          {
            "name": "reverseRecord",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "discountKey",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "validationData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "discountedRegisterPrice",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "duration",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "discountKey",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "price",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "discountedRegistrants",
    "inputs": [
      {
        "name": "registrant",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "hasRegisteredWithDiscount",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "discounts",
    "inputs": [
      {
        "name": "key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "active",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "discountValidator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "discount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getActiveDiscounts",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct RegistrarController.DiscountDetails[]",
        "components": [
          {
            "name": "active",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "discountValidator",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "key",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "discount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "hasRegisteredWithDiscount",
    "inputs": [
      {
        "name": "addresses",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "result",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ownershipHandoverExpiresAt",
    "inputs": [
      {
        "name": "pendingOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "result",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "prices",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IPriceOracle"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "recoverFunds",
    "inputs": [
      {
        "name": "_token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "register",
    "inputs": [
      {
        "name": "request",
        "type": "tuple",
        "internalType": "struct RegistrarController.RegisterRequest",
        "components": [
          {
            "name": "name",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "duration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "resolver",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "data",
            "type": "bytes[]",
            "internalType": "bytes[]"
          },
          {
            "name": "reverseRecord",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "registerPrice",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "duration",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "renew",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "duration",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "rentPrice",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "duration",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "price",
        "type": "tuple",
        "internalType": "struct IPriceOracle.Price",
        "components": [
          {
            "name": "base",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "premium",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "requestOwnershipHandover",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "reverseRegistrar",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IReverseRegistrar"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rootName",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rootNode",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setDiscountDetails",
    "inputs": [
      {
        "name": "details",
        "type": "tuple",
        "internalType": "struct RegistrarController.DiscountDetails",
        "components": [
          {
            "name": "active",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "discountValidator",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "key",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "discount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPriceOracle",
    "inputs": [
      {
        "name": "prices_",
        "type": "address",
        "internalType": "contract IPriceOracle"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setReverseRegistrar",
    "inputs": [
      {
        "name": "reverse_",
        "type": "address",
        "internalType": "contract IReverseRegistrar"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "valid",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "withdrawETH",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "DiscountApplied",
    "inputs": [
      {
        "name": "registrant",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "discountKey",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DiscountUpdated",
    "inputs": [
      {
        "name": "discountKey",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "details",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct RegistrarController.DiscountDetails",
        "components": [
          {
            "name": "active",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "discountValidator",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "key",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "discount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ETHPaymentProcessed",
    "inputs": [
      {
        "name": "payee",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "price",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "NameRegistered",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "label",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "expires",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "NameRenewed",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "label",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "expires",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipHandoverCanceled",
    "inputs": [
      {
        "name": "pendingOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipHandoverRequested",
    "inputs": [
      {
        "name": "pendingOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "oldOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PriceOracleUpdated",
    "inputs": [
      {
        "name": "newPrices",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReverseRegistrarUpdated",
    "inputs": [
      {
        "name": "newReverseRegistrar",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "AddressEmptyCode",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "AddressInsufficientBalance",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "AlreadyInitialized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "AlreadyRegisteredWithDiscount",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "DurationTooShort",
    "inputs": [
      {
        "name": "duration",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "FailedInnerCall",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InactiveDiscount",
    "inputs": [
      {
        "name": "key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "error",
    "name": "InsufficientValue",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidDiscount",
    "inputs": [
      {
        "name": "key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "error",
    "name": "InvalidDiscountAmount",
    "inputs": [
      {
        "name": "key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "error",
    "name": "InvalidValidator",
    "inputs": [
      {
        "name": "key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "validator",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "NameNotAvailable",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "NewOwnerIsZeroAddress",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NoHandoverRequest",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ResolverRequiredWhenDataSupplied",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SafeERC20FailedOperation",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "TransferFailed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Unauthorized",
    "inputs": []
  }
];
