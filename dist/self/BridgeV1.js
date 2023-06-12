"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfBridgeV1Contract = void 0;
const bridge_v1_1 = require("../base/bridge_v1");
const web3_contract_1 = require("web3-contract");
class SelfBridgeV1Contract extends bridge_v1_1.BridgeV1Contract {
    constructor(props) {
        super(props);
    }
    getDepositData(amount, account) {
        const data = "0x" +
            web3_contract_1.ethers.utils
                .hexZeroPad(web3_contract_1.ethers.BigNumber.from(amount).toHexString(), 32)
                .substring(2) + // Deposit Amount        (32 bytes)
            web3_contract_1.ethers.utils
                .hexZeroPad(web3_contract_1.ethers.utils.hexlify((account.length - 2) / 2), 32)
                .substring(2) + // len(recipientAddress) (32 bytes)
            account.substring(2);
        return data;
    }
}
exports.SelfBridgeV1Contract = SelfBridgeV1Contract;
SelfBridgeV1Contract.contractName = "SelfBridgeV1Contract";
