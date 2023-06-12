"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfHipoNFTSwapV2Contract = void 0;
const hipo_n_f_t_swap_v2_1 = require("../base/hipo_n_f_t_swap_v2");
const web3_contract_1 = require("web3-contract");
class SelfHipoNFTSwapV2Contract extends hipo_n_f_t_swap_v2_1.HipoNFTSwapV2Contract {
    constructor(props) {
        super(props);
    }
    /*
     * get batchBuyWithETH tradeBytes
     *  @param marketId {String} eg: chainId=5(0001=seaport1.1; 0003=seaport1.4) contractAddress=0xd5f86520514ba89c9e9848b517ee08e8ac5fc967
     *  @param callData {String}
     *  @param  {String}
     *  @param value  {String} eg: 10000000000000
     *
     * */
    getTradeBytes({ marketId, continueIfFailed, callData, value, }) {
        const { lengthHex, callData: item } = this.formatCallData(callData);
        const ethValue = this.formatEthValue(value);
        const itemLength = lengthHex;
        return "0x" + marketId + continueIfFailed + ethValue + itemLength + item;
    }
    formatEthValue(ethValue) {
        const hex = web3_contract_1.BigNumber.from(ethValue).toHexString().slice(2);
        const ethValueBytes = 21;
        const zeroStr = new Array(ethValueBytes * 2 - hex.length)
            .fill("0")
            .join("");
        return zeroStr + hex;
    }
    formatCallData(callData) {
        let _callData = callData.startsWith("0x") ? callData.slice(2) : callData;
        if (_callData.length % 2 !== 0) {
            _callData += "0";
        }
        const _lengthHex = web3_contract_1.BigNumber.from(_callData.length / 2 + "")
            .toHexString()
            .slice(2);
        const lengthBytes = 4;
        const lengthHex = new Array(lengthBytes * 2 - _lengthHex.length).fill("0").join("") +
            _lengthHex;
        return { lengthHex, callData: _callData };
    }
}
exports.SelfHipoNFTSwapV2Contract = SelfHipoNFTSwapV2Contract;
SelfHipoNFTSwapV2Contract.contractName = "SelfHipoNFTSwapV2Contract";
