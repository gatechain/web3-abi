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
const ContractAbstract_js_1 = __importDefault(require("hipo-contract/dist/contract/ContractAbstract.js"));
const NftProxy_json_1 = __importDefault(require("../abis/NftProxy.json"));
class NftProxyContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = NftProxy_json_1.default;
    }
    initialAddressSet() {
        const provider = this.getContractProvider(this.address);
        return provider.initialAddressSet();
    }
    ;
    endGrantAuthentication(addr, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.endGrantAuthentication(addr, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.endGrantAuthentication(addr, options);
        });
    }
    ;
    revokeAuthentication(addr, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.revokeAuthentication(addr, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.revokeAuthentication(addr, options);
        });
    }
    ;
    pending(index_0) {
        const provider = this.getContractProvider(this.address);
        return provider.pending(index_0);
    }
    ;
    contracts(index_0) {
        const provider = this.getContractProvider(this.address);
        return provider.contracts(index_0);
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
    owner() {
        const provider = this.getContractProvider(this.address);
        return provider.owner();
    }
    ;
    delegateProxyImplementation() {
        const provider = this.getContractProvider(this.address);
        return provider.delegateProxyImplementation();
    }
    ;
    proxies(index_0) {
        const provider = this.getContractProvider(this.address);
        return provider.proxies(index_0);
    }
    ;
    startGrantAuthentication(addr, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.startGrantAuthentication(addr, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.startGrantAuthentication(addr, options);
        });
    }
    ;
    registerProxy(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.registerProxy(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.registerProxy(options);
        });
    }
    ;
    DELAY_PERIOD() {
        const provider = this.getContractProvider(this.address);
        return provider.DELAY_PERIOD();
    }
    ;
    transferOwnership(_newOwner, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.transferOwnership(_newOwner, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferOwnership(_newOwner, options);
        });
    }
    ;
    grantInitialAuthentication(authAddress, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.grantInitialAuthentication(authAddress, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.grantInitialAuthentication(authAddress, options);
        });
    }
    ;
}
exports.NftProxyContract = NftProxyContract;
NftProxyContract.contractName = 'NftProxyContract';
