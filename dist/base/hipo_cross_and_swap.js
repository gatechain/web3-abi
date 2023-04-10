"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HipoCrossAndSwapContract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
class HipoCrossAndSwapContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = [{ "inputs": [{ "internalType": "address", "name": "_messageBus", "type": "address" }, { "internalType": "address", "name": "_nativeWrap", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "id", "type": "bytes32" }, { "indexed": false, "internalType": "uint64", "name": "srcChainId", "type": "uint64" }, { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "tokenIn", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "tokenOut", "type": "address" }], "name": "DirectSwap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "messageBus", "type": "address" }], "name": "MessageBusUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "id", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "dstAmount", "type": "uint256" }, { "indexed": false, "internalType": "enum OOCrossChainAndSwap.SwapStatus", "name": "status", "type": "uint8" }], "name": "SwapRequestDone", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "id", "type": "bytes32" }, { "indexed": false, "internalType": "uint64", "name": "dstChainId", "type": "uint64" }, { "indexed": false, "internalType": "uint256", "name": "srcAmount", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "srcToken", "type": "address" }, { "indexed": false, "internalType": "address", "name": "dstToken", "type": "address" }], "name": "SwapRequestSent", "type": "event" }, { "inputs": [{ "internalType": "bytes", "name": "_sender", "type": "bytes" }, { "internalType": "uint64", "name": "_srcChainId", "type": "uint64" }, { "internalType": "bytes", "name": "_message", "type": "bytes" }, { "internalType": "address", "name": "_executor", "type": "address" }], "name": "executeMessage", "outputs": [{ "internalType": "enum IMessageReceiverApp.ExecutionStatus", "name": "", "type": "uint8" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_sender", "type": "address" }, { "internalType": "uint64", "name": "_srcChainId", "type": "uint64" }, { "internalType": "bytes", "name": "_message", "type": "bytes" }, { "internalType": "address", "name": "_executor", "type": "address" }], "name": "executeMessage", "outputs": [{ "internalType": "enum IMessageReceiverApp.ExecutionStatus", "name": "", "type": "uint8" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint64", "name": "_srcChainId", "type": "uint64" }, { "internalType": "bytes", "name": "_message", "type": "bytes" }, { "internalType": "address", "name": "index_5", "type": "address" }], "name": "executeMessageWithTransfer", "outputs": [{ "internalType": "enum IMessageReceiverApp.ExecutionStatus", "name": "", "type": "uint8" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }, { "internalType": "address", "name": "index_1", "type": "address" }, { "internalType": "uint256", "name": "index_2", "type": "uint256" }, { "internalType": "uint64", "name": "_srcChainId", "type": "uint64" }, { "internalType": "bytes", "name": "_message", "type": "bytes" }, { "internalType": "address", "name": "index_5", "type": "address" }], "name": "executeMessageWithTransferFallback", "outputs": [{ "internalType": "enum IMessageReceiverApp.ExecutionStatus", "name": "", "type": "uint8" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "bytes", "name": "_message", "type": "bytes" }, { "internalType": "address", "name": "_executor", "type": "address" }], "name": "executeMessageWithTransferRefund", "outputs": [{ "internalType": "enum IMessageReceiverApp.ExecutionStatus", "name": "", "type": "uint8" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "messageBus", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }], "name": "minSwapAmounts", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nativeWrap", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ooSwap", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "outboundTransferTo", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "rescueFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_messageBus", "type": "address" }], "name": "setMessageBus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_minSwapAmount", "type": "uint256" }], "name": "setMinSwapAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_nativeWrap", "type": "address" }], "name": "setNativeWrap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_ooSwap", "type": "address" }], "name": "setOOSwap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_tokenReceiver", "type": "address" }, { "components": [{ "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_amountIn", "type": "uint256" }, { "internalType": "uint64", "name": "_dstChainId", "type": "uint64" }, { "internalType": "uint64", "name": "_nonce", "type": "uint64" }, { "internalType": "bool", "name": "_nativeIn", "type": "bool" }, { "internalType": "bool", "name": "_nativeOut", "type": "bool" }, { "components": [{ "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "bytes", "name": "_srcSwapExtraData", "type": "bytes" }, { "internalType": "bytes", "name": "_dstSwapExtraData", "type": "bytes" }], "internalType": "struct OOCrossChainAndSwap.SwapInfo", "name": "_srcSwap", "type": "tuple" }, { "components": [{ "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "bytes", "name": "_srcSwapExtraData", "type": "bytes" }, { "internalType": "bytes", "name": "_dstSwapExtraData", "type": "bytes" }], "internalType": "struct OOCrossChainAndSwap.SwapInfo", "name": "_dstSwap", "type": "tuple" }, { "internalType": "bytes", "name": "_bridgeData", "type": "bytes" }], "internalType": "struct OOCrossChainAndSwap.TransferWithSwap", "name": "_tws", "type": "tuple" }], "name": "transferWithSwap", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenReceiver", "type": "address" }, { "components": [{ "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_amountIn", "type": "uint256" }, { "internalType": "uint64", "name": "_dstChainId", "type": "uint64" }, { "internalType": "uint64", "name": "_nonce", "type": "uint64" }, { "internalType": "bool", "name": "_nativeIn", "type": "bool" }, { "internalType": "bool", "name": "_nativeOut", "type": "bool" }, { "components": [{ "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "bytes", "name": "_srcSwapExtraData", "type": "bytes" }, { "internalType": "bytes", "name": "_dstSwapExtraData", "type": "bytes" }], "internalType": "struct OOCrossChainAndSwap.SwapInfo", "name": "_srcSwap", "type": "tuple" }, { "components": [{ "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "bytes", "name": "_srcSwapExtraData", "type": "bytes" }, { "internalType": "bytes", "name": "_dstSwapExtraData", "type": "bytes" }], "internalType": "struct OOCrossChainAndSwap.SwapInfo", "name": "_dstSwap", "type": "tuple" }, { "internalType": "bytes", "name": "_bridgeData", "type": "bytes" }], "internalType": "struct OOCrossChainAndSwap.TransferWithSwap", "name": "_tws", "type": "tuple" }], "name": "transferWithSwapNative", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "withdrewNative", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
    }
    executeMessage2(_sender, _srcChainId, _message, _executor, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.executeMessage2(_sender, _srcChainId, _message, _executor, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.executeMessage2(_sender, _srcChainId, _message, _executor, options);
        });
    }
    ;
    executeMessage1(_sender, _srcChainId, _message, _executor, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.executeMessage1(_sender, _srcChainId, _message, _executor, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.executeMessage1(_sender, _srcChainId, _message, _executor, options);
        });
    }
    ;
    executeMessageWithTransfer(index_0, _token, _amount, _srcChainId, _message, index_5, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.executeMessageWithTransfer(index_0, _token, _amount, _srcChainId, _message, index_5, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.executeMessageWithTransfer(index_0, _token, _amount, _srcChainId, _message, index_5, options);
        });
    }
    ;
    executeMessageWithTransferFallback(index_0, index_1, index_2, _srcChainId, _message, index_5, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.executeMessageWithTransferFallback(index_0, index_1, index_2, _srcChainId, _message, index_5, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.executeMessageWithTransferFallback(index_0, index_1, index_2, _srcChainId, _message, index_5, options);
        });
    }
    ;
    executeMessageWithTransferRefund(_token, _amount, _message, _executor, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.executeMessageWithTransferRefund(_token, _amount, _message, _executor, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.executeMessageWithTransferRefund(_token, _amount, _message, _executor, options);
        });
    }
    ;
    messageBus(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.messageBus();
    }
    ;
    minSwapAmounts(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.minSwapAmounts(index_0);
    }
    ;
    nativeWrap(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.nativeWrap();
    }
    ;
    ooSwap(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.ooSwap();
    }
    ;
    outboundTransferTo(_from, _to, _data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.outboundTransferTo(_from, _to, _data, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.outboundTransferTo(_from, _to, _data, options);
        });
    }
    ;
    owner(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.owner();
    }
    ;
    rescueFunds(token, userAddress, amount, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.rescueFunds(token, userAddress, amount, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.rescueFunds(token, userAddress, amount, options);
        });
    }
    ;
    setMessageBus(_messageBus, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setMessageBus(_messageBus, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setMessageBus(_messageBus, options);
        });
    }
    ;
    setMinSwapAmount(_token, _minSwapAmount, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setMinSwapAmount(_token, _minSwapAmount, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setMinSwapAmount(_token, _minSwapAmount, options);
        });
    }
    ;
    setNativeWrap(_nativeWrap, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setNativeWrap(_nativeWrap, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setNativeWrap(_nativeWrap, options);
        });
    }
    ;
    setOOSwap(_ooSwap, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setOOSwap(_ooSwap, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setOOSwap(_ooSwap, options);
        });
    }
    ;
    transferOwnership(newOwner, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.transferOwnership(newOwner, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.transferOwnership(newOwner, options);
        });
    }
    ;
    transferWithSwap(_from, _tokenReceiver, _tws, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.transferWithSwap(_from, _tokenReceiver, _tws, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.transferWithSwap(_from, _tokenReceiver, _tws, options);
        });
    }
    ;
    transferWithSwapNative(_tokenReceiver, _tws, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.transferWithSwapNative(_tokenReceiver, _tws, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.transferWithSwapNative(_tokenReceiver, _tws, options);
        });
    }
    ;
    withdrewNative(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.withdrewNative(_opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.withdrewNative(options);
        });
    }
    ;
}
exports.HipoCrossAndSwapContract = HipoCrossAndSwapContract;
HipoCrossAndSwapContract.contractName = 'HipoCrossAndSwapContract';
