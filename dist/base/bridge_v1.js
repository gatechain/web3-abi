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
class BridgeV1Contract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = [{ "inputs": [{ "internalType": "uint8", "name": "chainID", "type": "uint8" }, { "internalType": "address[]", "name": "initialRelayers", "type": "address[]" }, { "internalType": "uint256", "name": "initialRelayerThreshold", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint256", "name": "gasVote", "type": "uint256" }, { "internalType": "uint256", "name": "gasExecute", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint8", "name": "destinationChainID", "type": "uint8" }, { "indexed": true, "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }, { "indexed": true, "internalType": "uint64", "name": "depositNonce", "type": "uint64" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint8", "name": "originChainID", "type": "uint8" }, { "indexed": true, "internalType": "uint64", "name": "depositNonce", "type": "uint64" }, { "indexed": true, "internalType": "enum Bridge.ProposalStatus", "name": "status", "type": "uint8" }, { "indexed": false, "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "dataHash", "type": "bytes32" }], "name": "ProposalEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint8", "name": "originChainID", "type": "uint8" }, { "indexed": true, "internalType": "uint64", "name": "depositNonce", "type": "uint64" }, { "indexed": true, "internalType": "enum Bridge.ProposalStatus", "name": "status", "type": "uint8" }, { "indexed": false, "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }], "name": "ProposalVote", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "relayer", "type": "address" }], "name": "RelayerAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "relayer", "type": "address" }], "name": "RelayerRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "newThreshold", "type": "uint256" }], "name": "RelayerThresholdChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "RELAYER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_chainID", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "index_0", "type": "uint8" }], "name": "_depositCounts", "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint64", "name": "index_0", "type": "uint64" }, { "internalType": "uint8", "name": "index_1", "type": "uint8" }], "name": "_depositRecords", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_expiry", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_gasExecute", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index_0", "type": "uint256" }], "name": "_gasPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_gasVote", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "index_0", "type": "bytes32" }, { "internalType": "uint8", "name": "index_1", "type": "uint8" }, { "internalType": "uint64", "name": "index_2", "type": "uint64" }], "name": "_handlerDepositRecords", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint72", "name": "index_0", "type": "uint72" }, { "internalType": "bytes32", "name": "index_1", "type": "bytes32" }, { "internalType": "address", "name": "index_2", "type": "address" }], "name": "_hasVotedOnProposal", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint72", "name": "index_0", "type": "uint72" }, { "internalType": "bytes32", "name": "index_1", "type": "bytes32" }], "name": "_proposals", "outputs": [{ "internalType": "bytes32", "name": "_resourceID", "type": "bytes32" }, { "internalType": "bytes32", "name": "_dataHash", "type": "bytes32" }, { "internalType": "enum Bridge.ProposalStatus", "name": "_status", "type": "uint8" }, { "internalType": "uint256", "name": "_proposedBlock", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_relayerThreshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "index_0", "type": "bytes32" }], "name": "_resourceIDToHandlerAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index_0", "type": "uint256" }], "name": "_tokenPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalProposals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalRelayers", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "relayerAddress", "type": "address" }], "name": "adminAddRelayer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newThreshold", "type": "uint256" }], "name": "adminChangeRelayerThreshold", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "adminPauseTransfers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "relayerAddress", "type": "address" }], "name": "adminRemoveRelayer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "handlerAddress", "type": "address" }, { "internalType": "address", "name": "tokenAddress", "type": "address" }], "name": "adminSetBurnable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "chainIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "prices", "type": "uint256[]" }], "name": "adminSetGasPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "handlerAddress", "type": "address" }, { "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }, { "internalType": "address", "name": "contractAddress", "type": "address" }, { "internalType": "bytes4", "name": "depositFunctionSig", "type": "bytes4" }, { "internalType": "bytes4", "name": "executeFunctionSig", "type": "bytes4" }], "name": "adminSetGenericResource", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "handlerAddress", "type": "address" }, { "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }, { "internalType": "address", "name": "tokenAddress", "type": "address" }], "name": "adminSetResource", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "chainIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "prices", "type": "uint256[]" }], "name": "adminSetTokenPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "adminUnpauseTransfers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "handlerAddress", "type": "address" }, { "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amountOrTokenID", "type": "uint256" }], "name": "adminWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "chainID", "type": "uint8" }, { "internalType": "uint64", "name": "depositNonce", "type": "uint64" }, { "internalType": "bytes32", "name": "dataHash", "type": "bytes32" }], "name": "cancelProposal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "destinationChainID", "type": "uint8" }, { "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "destinationChainID", "type": "uint8" }, { "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }, { "internalType": "uint64", "name": "depositNonce", "type": "uint64" }], "name": "depositEventAgain", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "chainID", "type": "uint8" }, { "internalType": "uint64", "name": "depositNonce", "type": "uint64" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }], "name": "executeProposal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "chainIdIn", "type": "uint256" }, { "internalType": "uint256", "name": "chainIdOut", "type": "uint256" }], "name": "getFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "originChainID", "type": "uint8" }, { "internalType": "uint64", "name": "depositNonce", "type": "uint64" }, { "internalType": "bytes32", "name": "dataHash", "type": "bytes32" }], "name": "getProposal", "outputs": [{ "components": [{ "internalType": "bytes32", "name": "_resourceID", "type": "bytes32" }, { "internalType": "bytes32", "name": "_dataHash", "type": "bytes32" }, { "internalType": "address[]", "name": "_yesVotes", "type": "address[]" }, { "internalType": "address[]", "name": "_noVotes", "type": "address[]" }, { "internalType": "enum Bridge.ProposalStatus", "name": "_status", "type": "uint8" }, { "internalType": "uint256", "name": "_proposedBlock", "type": "uint256" }], "internalType": "struct Bridge.Proposal", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "relayer", "type": "address" }], "name": "isRelayer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "renounceAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable[]", "name": "addrs", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "name": "transferFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "chainID", "type": "uint8" }, { "internalType": "uint64", "name": "depositNonce", "type": "uint64" }, { "internalType": "bytes32", "name": "resourceID", "type": "bytes32" }, { "internalType": "bytes32", "name": "dataHash", "type": "bytes32" }], "name": "voteProposal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminAddRelayer(relayerAddress, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminChangeRelayerThreshold(newThreshold, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminPauseTransfers(_opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminRemoveRelayer(relayerAddress, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminSetBurnable(handlerAddress, tokenAddress, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminSetGasPrice(chainIds, prices, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminSetGenericResource(handlerAddress, resourceID, contractAddress, depositFunctionSig, executeFunctionSig, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminSetResource(handlerAddress, resourceID, tokenAddress, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminSetTokenPrice(chainIds, prices, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminUnpauseTransfers(_opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.adminWithdraw(handlerAddress, tokenAddress, recipient, amountOrTokenID, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.cancelProposal(chainID, depositNonce, dataHash, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.deposit(destinationChainID, resourceID, data, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.depositEventAgain(destinationChainID, resourceID, depositNonce, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.executeProposal(chainID, depositNonce, data, resourceID, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.renounceAdmin(newAdmin, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
    transferFunds(addrs, amounts, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.transferFunds(addrs, amounts, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.voteProposal(chainID, depositNonce, resourceID, dataHash, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
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
