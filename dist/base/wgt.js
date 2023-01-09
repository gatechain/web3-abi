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
exports.WGTContract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
const WGT_json_1 = __importDefault(require("../abis/WGT.json"));
class WGTContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = WGT_json_1.default;
    }
    approve(guy, wad, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.approve(guy, wad, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.approve(guy, wad, options);
        });
    }
    ;
    totalSupply() {
        const provider = this.getContractProvider(this.address);
        return provider.totalSupply();
    }
    ;
    transferFrom(src, dst, wad, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.transferFrom(src, dst, wad, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferFrom(src, dst, wad, options);
        });
    }
    ;
    withdraw(wad, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.withdraw(wad, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.withdraw(wad, options);
        });
    }
    ;
    decimals() {
        const provider = this.getContractProvider(this.address);
        return provider.decimals();
    }
    ;
    balanceOf(index_0) {
        const provider = this.getContractProvider(this.address);
        return provider.balanceOf(index_0);
    }
    ;
    symbol() {
        const provider = this.getContractProvider(this.address);
        return provider.symbol();
    }
    ;
    transfer(dst, wad, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.transfer(dst, wad, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transfer(dst, wad, options);
        });
    }
    ;
    deposit(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.deposit(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.deposit(options);
        });
    }
    ;
    allowance(index_0, index_1) {
        const provider = this.getContractProvider(this.address);
        return provider.allowance(index_0, index_1);
    }
    ;
}
exports.WGTContract = WGTContract;
WGTContract.contractName = 'WGTContract';
