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
const HipoCrossAndSwap_json_1 = __importDefault(require("../abis/HipoCrossAndSwap.json"));
class HipoCrossAndSwapContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = HipoCrossAndSwap_json_1.default;
    }
    executeMessage2(_sender, _srcChainId, _message, _executor, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.executeMessage2(_sender, _srcChainId, _message, _executor, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.executeMessage2(_sender, _srcChainId, _message, _executor, options);
        });
    }
    ;
    executeMessage1(_sender, _srcChainId, _message, _executor, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.executeMessage1(_sender, _srcChainId, _message, _executor, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.executeMessage1(_sender, _srcChainId, _message, _executor, options);
        });
    }
    ;
    executeMessageWithTransfer(index_0, _token, _amount, _srcChainId, _message, index_5, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.executeMessageWithTransfer(index_0, _token, _amount, _srcChainId, _message, index_5, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.executeMessageWithTransfer(index_0, _token, _amount, _srcChainId, _message, index_5, options);
        });
    }
    ;
    executeMessageWithTransferFallback(index_0, index_1, index_2, _srcChainId, _message, index_5, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.executeMessageWithTransferFallback(index_0, index_1, index_2, _srcChainId, _message, index_5, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.executeMessageWithTransferFallback(index_0, index_1, index_2, _srcChainId, _message, index_5, options);
        });
    }
    ;
    executeMessageWithTransferRefund(_token, _amount, _message, _executor, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.executeMessageWithTransferRefund(_token, _amount, _message, _executor, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.executeMessageWithTransferRefund(_token, _amount, _message, _executor, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.outboundTransferTo(_from, _to, _data, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.outboundTransferTo(_from, _to, _data, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.rescueFunds(token, userAddress, amount, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.rescueFunds(token, userAddress, amount, options);
        });
    }
    ;
    setMessageBus(_messageBus, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.setMessageBus(_messageBus, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.setMessageBus(_messageBus, options);
        });
    }
    ;
    setMinSwapAmount(_token, _minSwapAmount, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.setMinSwapAmount(_token, _minSwapAmount, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.setMinSwapAmount(_token, _minSwapAmount, options);
        });
    }
    ;
    setNativeWrap(_nativeWrap, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.setNativeWrap(_nativeWrap, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.setNativeWrap(_nativeWrap, options);
        });
    }
    ;
    setOOSwap(_ooSwap, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.setOOSwap(_ooSwap, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.setOOSwap(_ooSwap, options);
        });
    }
    ;
    transferOwnership(newOwner, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.transferOwnership(newOwner, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferOwnership(newOwner, options);
        });
    }
    ;
    transferWithSwap(_from, _tokenReceiver, _tws, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.transferWithSwap(_from, _tokenReceiver, _tws, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferWithSwap(_from, _tokenReceiver, _tws, options);
        });
    }
    ;
    transferWithSwapNative(_tokenReceiver, _tws, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.transferWithSwapNative(_tokenReceiver, _tws, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferWithSwapNative(_tokenReceiver, _tws, options);
        });
    }
    ;
    withdrewNative(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.withdrewNative(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.withdrewNative(options);
        });
    }
    ;
}
exports.HipoCrossAndSwapContract = HipoCrossAndSwapContract;
HipoCrossAndSwapContract.contractName = 'HipoCrossAndSwapContract';
