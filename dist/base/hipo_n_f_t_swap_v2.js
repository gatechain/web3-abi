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
const HipoNFTSwapV2_json_1 = __importDefault(require("../abis/HipoNFTSwapV2.json"));
class HipoNFTSwapV2Contract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = HipoNFTSwapV2_json_1.default;
    }
    approveERC20(token, operator, amount, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.approveERC20(token, operator, amount, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.approveERC20(token, operator, amount, options);
        });
    }
    ;
    batchBuyWithERC20s(erc20Pairs, tradeBytes, dustTokens, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.batchBuyWithERC20s(erc20Pairs, tradeBytes, dustTokens, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.batchBuyWithERC20s(erc20Pairs, tradeBytes, dustTokens, options);
        });
    }
    ;
    batchBuyWithETH(tradeBytes, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.batchBuyWithETH(tradeBytes, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.batchBuyWithETH(tradeBytes, options);
        });
    }
    ;
    onERC1155BatchReceived(index_0, index_1, index_2, index_3, index_4, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.onERC1155BatchReceived(index_0, index_1, index_2, index_3, index_4, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.onERC1155BatchReceived(index_0, index_1, index_2, index_3, index_4, options);
        });
    }
    ;
    onERC1155Received(index_0, index_1, index_2, index_3, index_4, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.onERC1155Received(index_0, index_1, index_2, index_3, index_4, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.onERC1155Received(index_0, index_1, index_2, index_3, index_4, options);
        });
    }
    ;
    onERC721Received1(index_0, index_1, index_2, index_3, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.onERC721Received1(index_0, index_1, index_2, index_3, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.onERC721Received1(index_0, index_1, index_2, index_3, options);
        });
    }
    ;
    onERC721Received2(index_0, index_1, index_2, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.onERC721Received2(index_0, index_1, index_2, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.onERC721Received2(index_0, index_1, index_2, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.registerFeature(feature, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.registerFeature(feature, options);
        });
    }
    ;
    registerFeatures(features, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.registerFeatures(features, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.registerFeatures(features, options);
        });
    }
    ;
    rescueERC20(asset, recipient, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.rescueERC20(asset, recipient, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.rescueERC20(asset, recipient, options);
        });
    }
    ;
    rescueERC721(asset, ids, recipient, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.rescueERC721(asset, ids, recipient, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.rescueERC721(asset, ids, recipient, options);
        });
    }
    ;
    rescueETH(recipient, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.rescueETH(recipient, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.rescueETH(recipient, options);
        });
    }
    ;
    supportsInterface(interfaceId, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.supportsInterface(interfaceId, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.supportsInterface(interfaceId, options);
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
    unregister(methodIDs, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.unregister(methodIDs, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.unregister(methodIDs, options);
        });
    }
    ;
}
exports.HipoNFTSwapV2Contract = HipoNFTSwapV2Contract;
HipoNFTSwapV2Contract.contractName = 'HipoNFTSwapV2Contract';
