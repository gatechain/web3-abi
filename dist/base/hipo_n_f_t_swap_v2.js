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
exports.HipoNFTSwapV2Contract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
class HipoNFTSwapV2Contract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes4", "name": "methodID", "type": "bytes4" }, { "indexed": false, "internalType": "address", "name": "oldFeature", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newFeature", "type": "address" }], "name": "FeatureFunctionUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approveERC20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "internalType": "struct IAggregator.ERC20Pair[]", "name": "erc20Pairs", "type": "tuple[]" }, { "internalType": "bytes", "name": "tradeBytes", "type": "bytes" }, { "internalType": "address[]", "name": "dustTokens", "type": "address[]" }], "name": "batchBuyWithERC20s", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bytes", "name": "tradeBytes", "type": "bytes" }], "name": "batchBuyWithETH", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }, { "internalType": "address", "name": "index_1", "type": "address" }, { "internalType": "uint256[]", "name": "index_2", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "index_3", "type": "uint256[]" }, { "internalType": "bytes", "name": "index_4", "type": "bytes" }], "name": "onERC1155BatchReceived", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }, { "internalType": "address", "name": "index_1", "type": "address" }, { "internalType": "uint256", "name": "index_2", "type": "uint256" }, { "internalType": "uint256", "name": "index_3", "type": "uint256" }, { "internalType": "bytes", "name": "index_4", "type": "bytes" }], "name": "onERC1155Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }, { "internalType": "address", "name": "index_1", "type": "address" }, { "internalType": "uint256", "name": "index_2", "type": "uint256" }, { "internalType": "bytes", "name": "index_3", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }, { "internalType": "uint256", "name": "index_1", "type": "uint256" }, { "internalType": "bytes", "name": "index_2", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "feature", "type": "address" }, { "internalType": "string", "name": "name", "type": "string" }, { "components": [{ "internalType": "bytes4", "name": "methodID", "type": "bytes4" }, { "internalType": "string", "name": "methodName", "type": "string" }], "internalType": "struct HipoNFTSwapV2.Method[]", "name": "methods", "type": "tuple[]" }], "internalType": "struct HipoNFTSwapV2.Feature", "name": "feature", "type": "tuple" }], "name": "registerFeature", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "feature", "type": "address" }, { "internalType": "string", "name": "name", "type": "string" }, { "components": [{ "internalType": "bytes4", "name": "methodID", "type": "bytes4" }, { "internalType": "string", "name": "methodName", "type": "string" }], "internalType": "struct HipoNFTSwapV2.Method[]", "name": "methods", "type": "tuple[]" }], "internalType": "struct HipoNFTSwapV2.Feature[]", "name": "features", "type": "tuple[]" }], "name": "registerFeatures", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }], "name": "rescueERC20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "address", "name": "recipient", "type": "address" }], "name": "rescueERC721", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }], "name": "rescueETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4[]", "name": "methodIDs", "type": "bytes4[]" }], "name": "unregister", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
    }
    approveERC20(token, operator, amount, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.approveERC20(token, operator, amount, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.approveERC20(token, operator, amount, options);
        });
    }
    ;
    batchBuyWithERC20s(erc20Pairs, tradeBytes, dustTokens, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.batchBuyWithERC20s(erc20Pairs, tradeBytes, dustTokens, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.batchBuyWithERC20s(erc20Pairs, tradeBytes, dustTokens, options);
        });
    }
    ;
    batchBuyWithETH(tradeBytes, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.batchBuyWithETH(tradeBytes, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.batchBuyWithETH(tradeBytes, options);
        });
    }
    ;
    onERC1155BatchReceived(index_0, index_1, index_2, index_3, index_4, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.onERC1155BatchReceived(index_0, index_1, index_2, index_3, index_4, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.onERC1155BatchReceived(index_0, index_1, index_2, index_3, index_4, options);
        });
    }
    ;
    onERC1155Received(index_0, index_1, index_2, index_3, index_4, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.onERC1155Received(index_0, index_1, index_2, index_3, index_4, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.onERC1155Received(index_0, index_1, index_2, index_3, index_4, options);
        });
    }
    ;
    onERC721Received1(index_0, index_1, index_2, index_3, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.onERC721Received1(index_0, index_1, index_2, index_3, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.onERC721Received1(index_0, index_1, index_2, index_3, options);
        });
    }
    ;
    onERC721Received2(index_0, index_1, index_2, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.onERC721Received2(index_0, index_1, index_2, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.onERC721Received2(index_0, index_1, index_2, options);
        });
    }
    ;
    owner(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.owner();
    }
    ;
    registerFeature(feature, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.registerFeature(feature, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.registerFeature(feature, options);
        });
    }
    ;
    registerFeatures(features, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.registerFeatures(features, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.registerFeatures(features, options);
        });
    }
    ;
    rescueERC20(asset, recipient, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.rescueERC20(asset, recipient, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.rescueERC20(asset, recipient, options);
        });
    }
    ;
    rescueERC721(asset, ids, recipient, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.rescueERC721(asset, ids, recipient, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.rescueERC721(asset, ids, recipient, options);
        });
    }
    ;
    rescueETH(recipient, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.rescueETH(recipient, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.rescueETH(recipient, options);
        });
    }
    ;
    supportsInterface(interfaceId, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.supportsInterface(interfaceId, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.supportsInterface(interfaceId, options);
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
    unregister(methodIDs, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.unregister(methodIDs, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.unregister(methodIDs, options);
        });
    }
    ;
}
exports.HipoNFTSwapV2Contract = HipoNFTSwapV2Contract;
HipoNFTSwapV2Contract.contractName = 'HipoNFTSwapV2Contract';
