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
exports.NftProxyContract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
class NftProxyContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "initialAddressSet", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "addr", "type": "address" }], "name": "endGrantAuthentication", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "addr", "type": "address" }], "name": "revokeAuthentication", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "index_0", "type": "address" }], "name": "pending", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "index_0", "type": "address" }], "name": "contracts", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "delegateProxyImplementation", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "index_0", "type": "address" }], "name": "proxies", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "addr", "type": "address" }], "name": "startGrantAuthentication", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "registerProxy", "outputs": [{ "name": "proxy", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "DELAY_PERIOD", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }], "name": "OwnershipRenounced", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "constant": false, "inputs": [{ "name": "authAddress", "type": "address" }], "name": "grantInitialAuthentication", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
    }
    initialAddressSet(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.initialAddressSet();
    }
    ;
    endGrantAuthentication(addr, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.endGrantAuthentication(addr, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.endGrantAuthentication(addr, options);
        });
    }
    ;
    revokeAuthentication(addr, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.revokeAuthentication(addr, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.revokeAuthentication(addr, options);
        });
    }
    ;
    pending(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.pending(index_0);
    }
    ;
    contracts(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.contracts(index_0);
    }
    ;
    renounceOwnership(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.renounceOwnership(_opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.renounceOwnership(options);
        });
    }
    ;
    owner(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.owner();
    }
    ;
    delegateProxyImplementation(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.delegateProxyImplementation();
    }
    ;
    proxies(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.proxies(index_0);
    }
    ;
    startGrantAuthentication(addr, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.startGrantAuthentication(addr, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.startGrantAuthentication(addr, options);
        });
    }
    ;
    registerProxy(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.registerProxy(_opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.registerProxy(options);
        });
    }
    ;
    DELAY_PERIOD(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.DELAY_PERIOD();
    }
    ;
    transferOwnership(_newOwner, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.transferOwnership(_newOwner, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.transferOwnership(_newOwner, options);
        });
    }
    ;
    grantInitialAuthentication(authAddress, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.grantInitialAuthentication(authAddress, _opt);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.grantInitialAuthentication(authAddress, options);
        });
    }
    ;
}
exports.NftProxyContract = NftProxyContract;
NftProxyContract.contractName = 'NftProxyContract';
