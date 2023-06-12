# web3-abi

### Install

```
"web3-abi": "https://github.com/gatechain/web3-abi#3.1.1"
```

- dist/umd/web3-abi.x.x.x.js // window.web3Abi

### 前置依赖

- ethers | window.ethers
- web3-contract | window.web3Contract

### Used

```
import { Web3Contract } from "web3-contract";

const contract = new Web3Contract({...})
contract.registerContract(SelfBridgeV1Contract)

// 1. use coustom contract address
const fee = await contract.SelfBridgeV1Contract?.getFee(5, 85, {
      address: 'xxxxxxxxx',
})

// 2. use config contract address
const fee = await contract.SelfBridgeV1Contract?.getFee(5, 85)

```

### log

| 版本  | 修改            | 备注                                       |
| ----- | --------------- | ------------------------------------------ |
| 3.1.1 | 修改 readme     | web3-contract: 3.1.1 ethers: 5.7.2         |
| 3.1.0 | import abi json | web3-contract: 3.1.0 ethers: 5.7.2         |
| 3.0.7 |                 | (old) web3-contract: 3.0.1 , ethers: 5.7.2 |

### abi 集合

| 名称                | 描述                       |
| ------------------- | -------------------------- |
| erc20               | erc20                      |
| BridgeV1            | 跨链合约                   |
| erc1155             | erc1155                    |
| erc720              | erc720                     |
| NFT_exchange        | NFT_exchange               |
| NFT_proxy           | NFT_proxy                  |
| wgt                 | wgt = WETH = Wrapped token |
| UniswapV2Pair       | uniswapV2                  |
| UniswapV2Router02   | uniswapV2                  |
| UniswapV3SwapRouter | uniswapV3                  |
