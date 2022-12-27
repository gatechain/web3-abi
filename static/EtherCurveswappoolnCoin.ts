export default (nCoin) => [
  {
    name: "TokenExchange",
    inputs: [
      {
        type: "address",
        name: "buyer",
        indexed: true,
      },
      {
        type: "int128",
        name: "sold_id",
        indexed: false,
      },
      {
        type: "uint256",
        name: "tokens_sold",
        indexed: false,
      },
      {
        type: "int128",
        name: "bought_id",
        indexed: false,
      },
      {
        type: "uint256",
        name: "tokens_bought",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "AddLiquidity",
    inputs: [
      {
        type: "address",
        name: "provider",
        indexed: true,
      },
      {
        type: `uint256[${nCoin}]`,
        name: "token_amounts",
        indexed: false,
      },
      {
        type: `uint256[${nCoin}]`,
        name: "fees",
        indexed: false,
      },
      {
        type: "uint256",
        name: "invariant",
        indexed: false,
      },
      {
        type: "uint256",
        name: "token_supply",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "RemoveLiquidity",
    inputs: [
      {
        type: "address",
        name: "provider",
        indexed: true,
      },
      {
        type: `uint256[${nCoin}]`,
        name: "token_amounts",
        indexed: false,
      },
      {
        type: `uint256[${nCoin}]`,
        name: "fees",
        indexed: false,
      },
      {
        type: "uint256",
        name: "token_supply",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "RemoveLiquidityImbalance",
    inputs: [
      {
        type: "address",
        name: "provider",
        indexed: true,
      },
      {
        type: `uint256[${nCoin}]`,
        name: "token_amounts",
        indexed: false,
      },
      {
        type: `uint256[${nCoin}]`,
        name: "fees",
        indexed: false,
      },
      {
        type: "uint256",
        name: "invariant",
        indexed: false,
      },
      {
        type: "uint256",
        name: "token_supply",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "CommitNewAdmin",
    inputs: [
      {
        type: "uint256",
        name: "deadline",
        indexed: true,
        unit: "sec",
      },
      {
        type: "address",
        name: "admin",
        indexed: true,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "NewAdmin",
    inputs: [
      {
        type: "address",
        name: "admin",
        indexed: true,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "CommitNewParameters",
    inputs: [
      {
        type: "uint256",
        name: "deadline",
        indexed: true,
        unit: "sec",
      },
      {
        type: "uint256",
        name: "A",
        indexed: false,
      },
      {
        type: "uint256",
        name: "fee",
        indexed: false,
      },
      {
        type: "uint256",
        name: "admin_fee",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "NewParameters",
    inputs: [
      {
        type: "uint256",
        name: "A",
        indexed: false,
      },
      {
        type: "uint256",
        name: "fee",
        indexed: false,
      },
      {
        type: "uint256",
        name: "admin_fee",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    outputs: [],
    inputs: [
      {
        type: `address[${nCoin}]`,
        name: "_coins",
      },
      {
        type: `address[${nCoin}]`,
        name: "_underlying_coins",
      },
      {
        type: "address",
        name: "_pool_token",
      },
      {
        type: "uint256",
        name: "_A",
      },
      {
        type: "uint256",
        name: "_fee",
      },
    ],
    constant: false,
    payable: false,
    type: "constructor",
  },
  {
    name: "get_virtual_price",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "calc_token_amount",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [
      {
        type: `uint256[${nCoin}]`,
        name: "amounts",
      },
      {
        type: "bool",
        name: "deposit",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "add_liquidity",
    outputs: [],
    inputs: [
      {
        type: `uint256[${nCoin}]`,
        name: "amounts",
      },
      {
        type: "uint256",
        name: "min_mint_amount",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "get_dy",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "int128",
        name: "i",
      },
      {
        type: "int128",
        name: "j",
      },
      {
        type: "uint256",
        name: "dx",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "get_dx",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "int128",
        name: "i",
      },
      {
        type: "int128",
        name: "j",
      },
      {
        type: "uint256",
        name: "dy",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "get_dy_underlying",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "int128",
        name: "i",
      },
      {
        type: "int128",
        name: "j",
      },
      {
        type: "uint256",
        name: "dx",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "get_dx_underlying",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "int128",
        name: "i",
      },
      {
        type: "int128",
        name: "j",
      },
      {
        type: "uint256",
        name: "dy",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "exchange",
    outputs: [],
    inputs: [
      {
        type: "int128",
        name: "i",
      },
      {
        type: "int128",
        name: "j",
      },
      {
        type: "uint256",
        name: "dx",
      },
      {
        type: "uint256",
        name: "min_dy",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "exchange_underlying",
    outputs: [],
    inputs: [
      {
        type: "int128",
        name: "i",
      },
      {
        type: "int128",
        name: "j",
      },
      {
        type: "uint256",
        name: "dx",
      },
      {
        type: "uint256",
        name: "min_dy",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "remove_liquidity",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        name: "_amount",
      },
      {
        type: `uint256[${nCoin}]`,
        name: "min_amounts",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "remove_liquidity_imbalance",
    outputs: [],
    inputs: [
      {
        type: `uint256[${nCoin}]`,
        name: "amounts",
      },
      {
        type: "uint256",
        name: "max_burn_amount",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "commit_new_parameters",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        name: "amplification",
      },
      {
        type: "uint256",
        name: "new_fee",
      },
      {
        type: "uint256",
        name: "new_admin_fee",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "apply_new_parameters",
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "revert_new_parameters",
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "commit_transfer_ownership",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_owner",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "apply_transfer_ownership",
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "revert_transfer_ownership",
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "withdraw_admin_fees",
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "kill_me",
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "unkill_me",
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: "function",
  },
  {
    name: "coins",
    outputs: [
      {
        type: "address",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "int128",
        name: "arg0",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "underlying_coins",
    outputs: [
      {
        type: "address",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "int128",
        name: "arg0",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "balances",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "int128",
        name: "arg0",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "A",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "fee",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "admin_fee",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "owner",
    outputs: [
      {
        type: "address",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "admin_actions_deadline",
    outputs: [
      {
        type: "uint256",
        unit: "sec",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "transfer_ownership_deadline",
    outputs: [
      {
        type: "uint256",
        unit: "sec",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "future_A",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "future_fee",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "future_admin_fee",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "future_owner",
    outputs: [
      {
        type: "address",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
  },
  {
    name: "remove_liquidity_one_coin",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        name: "_token_amount",
      },
      {
        type: "int128",
        name: "i",
      },
      {
        type: "uint256",
        name: "min_amount",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    name: "calc_withdraw_one_coin",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "_token_amount",
      },
      {
        type: "int128",
        name: "i",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 1102,
  },
];
