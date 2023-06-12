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
exports.ERC1155Contract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
const ERC1155_json_1 = __importDefault(require("../abis/ERC1155.json"));
class ERC1155Contract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = ERC1155_json_1.default;
    }
    DEFAULT_ADMIN_ROLE(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.DEFAULT_ADMIN_ROLE();
    }
    ;
    MINTER_ROLE(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.MINTER_ROLE();
    }
    ;
    PAUSER_ROLE(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.PAUSER_ROLE();
    }
    ;
    balanceOf(account, id, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.balanceOf(account, id);
    }
    ;
    balanceOfBatch(accounts, ids, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.balanceOfBatch(accounts, ids);
    }
    ;
    burn(account, id, value, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.burn(account, id, value, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.burn(account, id, value, options);
        });
    }
    ;
    burnBatch(account, ids, values, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.burnBatch(account, ids, values, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.burnBatch(account, ids, values, options);
        });
    }
    ;
    getRoleAdmin(role, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getRoleAdmin(role);
    }
    ;
    getRoleMember(role, index, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getRoleMember(role, index);
    }
    ;
    getRoleMemberCount(role, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getRoleMemberCount(role);
    }
    ;
    grantRole(role, account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.grantRole(role, account, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.grantRole(role, account, options);
        });
    }
    ;
    hasRole(role, account, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.hasRole(role, account);
    }
    ;
    isApprovedForAll(account, operator, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.isApprovedForAll(account, operator);
    }
    ;
    mint(to, id, amount, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.mint(to, id, amount, data, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.mint(to, id, amount, data, options);
        });
    }
    ;
    mintBatch(to, ids, amounts, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.mintBatch(to, ids, amounts, data, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.mintBatch(to, ids, amounts, data, options);
        });
    }
    ;
    pause(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.pause(_opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.pause(options);
        });
    }
    ;
    paused(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.paused();
    }
    ;
    renounceRole(role, account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.renounceRole(role, account, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.renounceRole(role, account, options);
        });
    }
    ;
    revokeRole(role, account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.revokeRole(role, account, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.revokeRole(role, account, options);
        });
    }
    ;
    safeBatchTransferFrom(from, to, ids, amounts, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.safeBatchTransferFrom(from, to, ids, amounts, data, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.safeBatchTransferFrom(from, to, ids, amounts, data, options);
        });
    }
    ;
    safeTransferFrom(from, to, id, amount, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.safeTransferFrom(from, to, id, amount, data, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.safeTransferFrom(from, to, id, amount, data, options);
        });
    }
    ;
    setApprovalForAll(operator, approved, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setApprovalForAll(operator, approved, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setApprovalForAll(operator, approved, options);
        });
    }
    ;
    supportsInterface(interfaceId, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.supportsInterface(interfaceId);
    }
    ;
    unpause(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.unpause(_opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.unpause(options);
        });
    }
    ;
    uri(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.uri(index_0);
    }
    ;
}
exports.ERC1155Contract = ERC1155Contract;
ERC1155Contract.contractName = 'ERC1155Contract';
