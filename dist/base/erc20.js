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
exports.ERC20Contract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
const ERC20_json_1 = __importDefault(require("../abis/ERC20.json"));
class ERC20Contract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = ERC20_json_1.default;
    }
    DOMAIN_SEPARATOR() {
        const provider = this.getContractProvider(this.address);
        return provider.DOMAIN_SEPARATOR();
    }
    ;
    PERMIT_TYPEHASH() {
        const provider = this.getContractProvider(this.address);
        return provider.PERMIT_TYPEHASH();
    }
    ;
    allowance(index_0, index_1) {
        const provider = this.getContractProvider(this.address);
        return provider.allowance(index_0, index_1);
    }
    ;
    approve(spender, value, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.approve(spender, value, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.approve(spender, value, options);
        });
    }
    ;
    balanceOf(index_0) {
        const provider = this.getContractProvider(this.address);
        return provider.balanceOf(index_0);
    }
    ;
    decimals() {
        const provider = this.getContractProvider(this.address);
        return provider.decimals();
    }
    ;
    nonces(index_0) {
        const provider = this.getContractProvider(this.address);
        return provider.nonces(index_0);
    }
    ;
    permit(owner, spender, value, deadline, v, r, s, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.permit(owner, spender, value, deadline, v, r, s, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.permit(owner, spender, value, deadline, v, r, s, options);
        });
    }
    ;
    symbol() {
        const provider = this.getContractProvider(this.address);
        return provider.symbol();
    }
    ;
    totalSupply() {
        const provider = this.getContractProvider(this.address);
        return provider.totalSupply();
    }
    ;
    transfer(to, value, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.transfer(to, value, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transfer(to, value, options);
        });
    }
    ;
    transferFrom(from, to, value, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.transferFrom(from, to, value, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferFrom(from, to, value, options);
        });
    }
    ;
}
exports.ERC20Contract = ERC20Contract;
ERC20Contract.contractName = 'ERC20Contract';
