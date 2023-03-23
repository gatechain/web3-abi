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
exports.BridgeV1Contract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
const BridgeV1_json_1 = __importDefault(require("../abis/BridgeV1.json"));
class BridgeV1Contract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = BridgeV1_json_1.default;
    }
    DEFAULT_ADMIN_ROLE(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.DEFAULT_ADMIN_ROLE();
    }
    ;
    RELAYER_ROLE(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.RELAYER_ROLE();
    }
    ;
    _chainID(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._chainID();
    }
    ;
    _depositCounts(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._depositCounts(index_0);
    }
    ;
    _depositRecords(index_0, index_1, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._depositRecords(index_0, index_1);
    }
    ;
    _expiry(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._expiry();
    }
    ;
    _gasExecute(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._gasExecute();
    }
    ;
    _gasPrice(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._gasPrice(index_0);
    }
    ;
    _gasVote(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._gasVote();
    }
    ;
    _handlerDepositRecords(index_0, index_1, index_2, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._handlerDepositRecords(index_0, index_1, index_2);
    }
    ;
    _hasVotedOnProposal(index_0, index_1, index_2, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._hasVotedOnProposal(index_0, index_1, index_2);
    }
    ;
    _proposals(index_0, index_1, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._proposals(index_0, index_1);
    }
    ;
    _relayerThreshold(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._relayerThreshold();
    }
    ;
    _resourceIDToHandlerAddress(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._resourceIDToHandlerAddress(index_0);
    }
    ;
    _tokenPrice(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._tokenPrice(index_0);
    }
    ;
    _totalProposals(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._totalProposals();
    }
    ;
    _totalRelayers(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider._totalRelayers();
    }
    ;
    adminAddRelayer(relayerAddress, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminAddRelayer(relayerAddress, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminAddRelayer(relayerAddress, options);
        });
    }
    ;
    adminChangeRelayerThreshold(newThreshold, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminChangeRelayerThreshold(newThreshold, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminChangeRelayerThreshold(newThreshold, options);
        });
    }
    ;
    adminPauseTransfers(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminPauseTransfers(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminPauseTransfers(options);
        });
    }
    ;
    adminRemoveRelayer(relayerAddress, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminRemoveRelayer(relayerAddress, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminRemoveRelayer(relayerAddress, options);
        });
    }
    ;
    adminSetBurnable(handlerAddress, tokenAddress, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminSetBurnable(handlerAddress, tokenAddress, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminSetBurnable(handlerAddress, tokenAddress, options);
        });
    }
    ;
    adminSetGasPrice(chainIds, prices, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminSetGasPrice(chainIds, prices, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminSetGasPrice(chainIds, prices, options);
        });
    }
    ;
    adminSetGenericResource(handlerAddress, resourceID, contractAddress, depositFunctionSig, executeFunctionSig, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminSetGenericResource(handlerAddress, resourceID, contractAddress, depositFunctionSig, executeFunctionSig, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminSetGenericResource(handlerAddress, resourceID, contractAddress, depositFunctionSig, executeFunctionSig, options);
        });
    }
    ;
    adminSetResource(handlerAddress, resourceID, tokenAddress, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminSetResource(handlerAddress, resourceID, tokenAddress, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminSetResource(handlerAddress, resourceID, tokenAddress, options);
        });
    }
    ;
    adminSetTokenPrice(chainIds, prices, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminSetTokenPrice(chainIds, prices, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminSetTokenPrice(chainIds, prices, options);
        });
    }
    ;
    adminUnpauseTransfers(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminUnpauseTransfers(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminUnpauseTransfers(options);
        });
    }
    ;
    adminWithdraw(handlerAddress, tokenAddress, recipient, amountOrTokenID, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.adminWithdraw(handlerAddress, tokenAddress, recipient, amountOrTokenID, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.adminWithdraw(handlerAddress, tokenAddress, recipient, amountOrTokenID, options);
        });
    }
    ;
    cancelProposal(chainID, depositNonce, dataHash, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.cancelProposal(chainID, depositNonce, dataHash, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.cancelProposal(chainID, depositNonce, dataHash, options);
        });
    }
    ;
    deposit(destinationChainID, resourceID, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.deposit(destinationChainID, resourceID, data, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.deposit(destinationChainID, resourceID, data, options);
        });
    }
    ;
    depositEventAgain(destinationChainID, resourceID, depositNonce, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.depositEventAgain(destinationChainID, resourceID, depositNonce, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.depositEventAgain(destinationChainID, resourceID, depositNonce, options);
        });
    }
    ;
    executeProposal(chainID, depositNonce, data, resourceID, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.executeProposal(chainID, depositNonce, data, resourceID, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.executeProposal(chainID, depositNonce, data, resourceID, options);
        });
    }
    ;
    getFee(chainIdIn, chainIdOut, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getFee(chainIdIn, chainIdOut);
    }
    ;
    getProposal(originChainID, depositNonce, dataHash, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getProposal(originChainID, depositNonce, dataHash);
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
            const gasLimit = yield __signer.estimateGas.grantRole(role, account, _opt);
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
    isRelayer(relayer, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.isRelayer(relayer);
    }
    ;
    paused(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.paused();
    }
    ;
    renounceAdmin(newAdmin, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.renounceAdmin(newAdmin, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.renounceAdmin(newAdmin, options);
        });
    }
    ;
    renounceRole(role, account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.renounceRole(role, account, _opt);
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
            const gasLimit = yield __signer.estimateGas.revokeRole(role, account, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.revokeRole(role, account, options);
        });
    }
    ;
    transferFunds(addrs, amounts, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.transferFunds(addrs, amounts, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.transferFunds(addrs, amounts, options);
        });
    }
    ;
    voteProposal(chainID, depositNonce, resourceID, dataHash, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield __signer.estimateGas.voteProposal(chainID, depositNonce, resourceID, dataHash, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.voteProposal(chainID, depositNonce, resourceID, dataHash, options);
        });
    }
    ;
}
exports.BridgeV1Contract = BridgeV1Contract;
BridgeV1Contract.contractName = 'BridgeV1Contract';
