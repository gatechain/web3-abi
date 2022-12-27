"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfBridgeV1Contract = void 0;
const bridge_v1_1 = require("../base/bridge_v1");
const ethers_1 = require("ethers");
class SelfBridgeV1Contract extends bridge_v1_1.BridgeV1Contract {
    constructor(props) {
        super(props);
    }
    getDepositData(amount, account) {
        const data = "0x" +
            ethers_1.ethers.utils
                .hexZeroPad(ethers_1.ethers.BigNumber.from(amount).toHexString(), 32)
                .substring(2) + // Deposit Amount        (32 bytes)
            ethers_1.ethers.utils
                .hexZeroPad(ethers_1.ethers.utils.hexlify((account.length - 2) / 2), 32)
                .substring(2) + // len(recipientAddress) (32 bytes)
            account.substring(2);
        return data;
    }
}
exports.SelfBridgeV1Contract = SelfBridgeV1Contract;
