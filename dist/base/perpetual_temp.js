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
exports.PerpetualTempContract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
const PerpetualTemp_json_1 = __importDefault(require("../abis/PerpetualTemp.json"));
class PerpetualTempContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = PerpetualTemp_json_1.default;
    }
    blacklist(_account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.blacklist(_account, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.blacklist(_account, options);
        });
    }
    ;
    blacklisted(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.blacklisted(index_0);
    }
    ;
    bridge(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.bridge();
    }
    ;
    deposit(user, amount, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.deposit(user, amount, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.deposit(user, amount, options);
        });
    }
    ;
    enableProof(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.enableProof();
    }
    ;
    exitNullifierMap(index_0, index_1, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.exitNullifierMap(index_0, index_1);
    }
    ;
    exitRootsMap(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.exitRootsMap(index_0);
    }
    ;
    feeAccId(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.feeAccId();
    }
    ;
    forgeBatch(newStRoot, newExitRoot, txsData, newOrders, newAccounts, serialNums, verifierIdx, proof, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.forgeBatch(newStRoot, newExitRoot, txsData, newOrders, newAccounts, serialNums, verifierIdx, proof, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.forgeBatch(newStRoot, newExitRoot, txsData, newOrders, newAccounts, serialNums, verifierIdx, proof, options);
        });
    }
    ;
    genesisBlock(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.genesisBlock();
    }
    ;
    getChainId(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.getChainId(_opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.getChainId(options);
        });
    }
    ;
    getDepositBalance(user, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getDepositBalance(user);
    }
    ;
    getDepositToken(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getDepositToken();
    }
    ;
    getHash(user, amount, babyPubKey, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getHash(user, amount, babyPubKey);
    }
    ;
    getInput(newStRoot, newExitRoot, l1L2TxsData, verifierIdx, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getInput(newStRoot, newExitRoot, l1L2TxsData, verifierIdx);
    }
    ;
    idxMap(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.idxMap(index_0);
    }
    ;
    init(_owner, _depositToken, _verifiers, _verifiersParams, _withdrawVerifier, _poseidonElements, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.init(_owner, _depositToken, _verifiers, _verifiersParams, _withdrawVerifier, _poseidonElements, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.init(_owner, _depositToken, _verifiers, _verifiersParams, _withdrawVerifier, _poseidonElements, options);
        });
    }
    ;
    initPerp(_verifiers, _verifiersParams, _withdrawVerifier, _poseidonElements, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.initPerp(_verifiers, _verifiersParams, _withdrawVerifier, _poseidonElements, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.initPerp(_verifiers, _verifiersParams, _withdrawVerifier, _poseidonElements, options);
        });
    }
    ;
    insAccId(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.insAccId();
    }
    ;
    l1L2TxsDataHashMap(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.l1L2TxsDataHashMap(index_0);
    }
    ;
    lastForgedBatch(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.lastForgedBatch();
    }
    ;
    oldUsers(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.oldUsers(index_0);
    }
    ;
    operator(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.operator();
    }
    ;
    owner(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.owner();
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
    pendingWithdrawalTotal(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.pendingWithdrawalTotal(index_0);
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
                gasLimit = gasLimit.mul(120).div(100);
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
    rollupVerifiers(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.rollupVerifiers(index_0);
    }
    ;
    rollupVerifiersLength(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.rollupVerifiersLength();
    }
    ;
    setBridge(_bridge, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setBridge(_bridge, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setBridge(_bridge, options);
        });
    }
    ;
    setDepositToken(_depositToken, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setDepositToken(_depositToken, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setDepositToken(_depositToken, options);
        });
    }
    ;
    setFeeAccId(_feeAccId, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setFeeAccId(_feeAccId, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setFeeAccId(_feeAccId, options);
        });
    }
    ;
    setInsAccId(_insAccId, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setInsAccId(_insAccId, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setInsAccId(_insAccId, options);
        });
    }
    ;
    setOperator(_operator, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.setOperator(_operator, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.setOperator(_operator, options);
        });
    }
    ;
    stateRootMap(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.stateRootMap(index_0);
    }
    ;
    toggleProofVerify(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.toggleProofVerify(_opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.toggleProofVerify(options);
        });
    }
    ;
    transferOwnership(newOwner, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.transferOwnership(newOwner, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.transferOwnership(newOwner, options);
        });
    }
    ;
    unBlacklist(_account, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.unBlacklist(_account, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.unBlacklist(_account, options);
        });
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
    updateVerifier(idx, verifier, maxTx, nLevels, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updateVerifier(idx, verifier, maxTx, nLevels, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updateVerifier(idx, verifier, maxTx, nLevels, options);
        });
    }
    ;
    withdrawCircuit(proofA, proofB, proofC, amount, numExitRoot, idx, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.withdrawCircuit(proofA, proofB, proofC, amount, numExitRoot, idx, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.withdrawCircuit(proofA, proofB, proofC, amount, numExitRoot, idx, options);
        });
    }
    ;
    withdrawMerkleProof(amount, babyPubKey, numExitRoot, siblings, idx, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.withdrawMerkleProof(amount, babyPubKey, numExitRoot, siblings, idx, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.withdrawMerkleProof(amount, babyPubKey, numExitRoot, siblings, idx, options);
        });
    }
    ;
    withdrawMerkleProofTemp(amount, babyPubKey, numExitRoot, siblings, idx, destinationChainID, resourceID, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.withdrawMerkleProofTemp(amount, babyPubKey, numExitRoot, siblings, idx, destinationChainID, resourceID, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.withdrawMerkleProofTemp(amount, babyPubKey, numExitRoot, siblings, idx, destinationChainID, resourceID, options);
        });
    }
    ;
    withdrawSerialNumbers(index_0, index_1, index_2, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.withdrawSerialNumbers(index_0, index_1, index_2);
    }
    ;
    withdrawVerifier(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.withdrawVerifier();
    }
    ;
}
exports.PerpetualTempContract = PerpetualTempContract;
PerpetualTempContract.contractName = 'PerpetualTempContract';
