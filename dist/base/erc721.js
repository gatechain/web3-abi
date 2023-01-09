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
exports.ERC721Contract = void 0;
const ContractAbstract_js_1 = __importDefault(require("hipo-contract/dist/contract/ContractAbstract.js"));
const ERC721_json_1 = __importDefault(require("../abis/ERC721.json"));
class ERC721Contract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = ERC721_json_1.default;
    }
    approve(to, tokenId, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.approve(to, tokenId, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.approve(to, tokenId, options);
        });
    }
    ;
    balanceOf(owner) {
        const provider = this.getContractProvider(this.address);
        return provider.balanceOf(owner);
    }
    ;
    getApproved(tokenId) {
        const provider = this.getContractProvider(this.address);
        return provider.getApproved(tokenId);
    }
    ;
    getStage(_stage) {
        const provider = this.getContractProvider(this.address);
        return provider.getStage(_stage);
    }
    ;
    getSystemAddress() {
        const provider = this.getContractProvider(this.address);
        return provider.getSystemAddress();
    }
    ;
    hashToSign(sender, stage, quantity, price, max) {
        const provider = this.getContractProvider(this.address);
        return provider.hashToSign(sender, stage, quantity, price, max);
    }
    ;
    isApprovedForAll(owner, operator) {
        const provider = this.getContractProvider(this.address);
        return provider.isApprovedForAll(owner, operator);
    }
    ;
    nextOwnerToExplicitlySet() {
        const provider = this.getContractProvider(this.address);
        return provider.nextOwnerToExplicitlySet();
    }
    ;
    numberMinted(stage, owner) {
        const provider = this.getContractProvider(this.address);
        return provider.numberMinted(stage, owner);
    }
    ;
    owner() {
        const provider = this.getContractProvider(this.address);
        return provider.owner();
    }
    ;
    ownerOf(tokenId) {
        const provider = this.getContractProvider(this.address);
        return provider.ownerOf(tokenId);
    }
    ;
    renounceOwnership(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.renounceOwnership(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.renounceOwnership(options);
        });
    }
    ;
    safeTransferFrom1(from, to, tokenId, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.safeTransferFrom1(from, to, tokenId, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.safeTransferFrom1(from, to, tokenId, options);
        });
    }
    ;
    safeTransferFrom2(from, to, tokenId, _data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.safeTransferFrom2(from, to, tokenId, _data, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.safeTransferFrom2(from, to, tokenId, _data, options);
        });
    }
    ;
    saleMint(stage, quantity, price, max, hash, signature, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.saleMint(stage, quantity, price, max, hash, signature, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.saleMint(stage, quantity, price, max, hash, signature, options);
        });
    }
    ;
    setApprovalForAll(operator, approved, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.setApprovalForAll(operator, approved, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.setApprovalForAll(operator, approved, options);
        });
    }
    ;
    setStage(_stage, _startTime, _endTime, _price, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.setStage(_stage, _startTime, _endTime, _price, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.setStage(_stage, _startTime, _endTime, _price, options);
        });
    }
    ;
    setSystemAddress(_address, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.setSystemAddress(_address, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.setSystemAddress(_address, options);
        });
    }
    ;
    supportsInterface(interfaceId) {
        const provider = this.getContractProvider(this.address);
        return provider.supportsInterface(interfaceId);
    }
    ;
    symbol() {
        const provider = this.getContractProvider(this.address);
        return provider.symbol();
    }
    ;
    tokenByIndex(index) {
        const provider = this.getContractProvider(this.address);
        return provider.tokenByIndex(index);
    }
    ;
    tokenOfOwnerByIndex(owner, index) {
        const provider = this.getContractProvider(this.address);
        return provider.tokenOfOwnerByIndex(owner, index);
    }
    ;
    tokenURI(tokenId) {
        const provider = this.getContractProvider(this.address);
        return provider.tokenURI(tokenId);
    }
    ;
    totalSupply() {
        const provider = this.getContractProvider(this.address);
        return provider.totalSupply();
    }
    ;
    transferFrom(from, to, tokenId, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.transferFrom(from, to, tokenId, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferFrom(from, to, tokenId, options);
        });
    }
    ;
    transferOwnership(newOwner, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.transferOwnership(newOwner, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferOwnership(newOwner, options);
        });
    }
    ;
}
exports.ERC721Contract = ERC721Contract;
ERC721Contract.contractName = 'ERC721Contract';
