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
    DEFAULT_ADMIN_ROLE() {
        const provider = this.getContractProvider(this.address);
        return provider.DEFAULT_ADMIN_ROLE();
    }
    ;
    MINTER_ROLE() {
        const provider = this.getContractProvider(this.address);
        return provider.MINTER_ROLE();
    }
    ;
    PAUSER_ROLE() {
        const provider = this.getContractProvider(this.address);
        return provider.PAUSER_ROLE();
    }
    ;
    balanceOf(account, id) {
        const provider = this.getContractProvider(this.address);
        return provider.balanceOf(account, id);
    }
    ;
    balanceOfBatch(accounts, ids) {
        const provider = this.getContractProvider(this.address);
        return provider.balanceOfBatch(accounts, ids);
    }
    ;
    burn(account, id, value, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.burn(account, id, value, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.burn(account, id, value, options);
        });
    }
    ;
    burnBatch(account, ids, values, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.burnBatch(account, ids, values, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.burnBatch(account, ids, values, options);
        });
    }
    ;
    getRoleAdmin(role) {
        const provider = this.getContractProvider(this.address);
        return provider.getRoleAdmin(role);
    }
    ;
    getRoleMember(role, index) {
        const provider = this.getContractProvider(this.address);
        return provider.getRoleMember(role, index);
    }
    ;
    getRoleMemberCount(role) {
        const provider = this.getContractProvider(this.address);
        return provider.getRoleMemberCount(role);
    }
    ;
    grantRole(role, account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.grantRole(role, account, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.grantRole(role, account, options);
        });
    }
    ;
    hasRole(role, account) {
        const provider = this.getContractProvider(this.address);
        return provider.hasRole(role, account);
    }
    ;
    isApprovedForAll(account, operator) {
        const provider = this.getContractProvider(this.address);
        return provider.isApprovedForAll(account, operator);
    }
    ;
    mint(to, id, amount, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.mint(to, id, amount, data, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.mint(to, id, amount, data, options);
        });
    }
    ;
    mintBatch(to, ids, amounts, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.mintBatch(to, ids, amounts, data, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.mintBatch(to, ids, amounts, data, options);
        });
    }
    ;
    pause(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.pause(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.pause(options);
        });
    }
    ;
    paused() {
        const provider = this.getContractProvider(this.address);
        return provider.paused();
    }
    ;
    renounceRole(role, account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.renounceRole(role, account, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.renounceRole(role, account, options);
        });
    }
    ;
    revokeRole(role, account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.revokeRole(role, account, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.revokeRole(role, account, options);
        });
    }
    ;
    safeBatchTransferFrom(from, to, ids, amounts, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.safeBatchTransferFrom(from, to, ids, amounts, data, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.safeBatchTransferFrom(from, to, ids, amounts, data, options);
        });
    }
    ;
    safeTransferFrom(from, to, id, amount, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.safeTransferFrom(from, to, id, amount, data, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.safeTransferFrom(from, to, id, amount, data, options);
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
    supportsInterface(interfaceId) {
        const provider = this.getContractProvider(this.address);
        return provider.supportsInterface(interfaceId);
    }
    ;
    unpause(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.getContractSigner(this.address);
            const _opt = opt || {};
            const gasLimit = yield signer.estimateGas.unpause(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.unpause(options);
        });
    }
    ;
    uri(index_0) {
        const provider = this.getContractProvider(this.address);
        return provider.uri(index_0);
    }
    ;
}
exports.ERC1155Contract = ERC1155Contract;
ERC1155Contract.contractName = 'ERC1155Contract';
