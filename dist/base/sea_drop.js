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
exports.SeaDropContract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
const SeaDrop_json_1 = __importDefault(require("../abis/SeaDrop.json"));
class SeaDropContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = SeaDrop_json_1.default;
    }
    getAllowListMerkleRoot(nftContract, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getAllowListMerkleRoot(nftContract);
    }
    ;
    getAllowedFeeRecipients(nftContract, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getAllowedFeeRecipients(nftContract);
    }
    ;
    getAllowedNftTokenIdIsRedeemed(nftContract, allowedNftToken, allowedNftTokenId, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getAllowedNftTokenIdIsRedeemed(nftContract, allowedNftToken, allowedNftTokenId);
    }
    ;
    getCreatorPayoutAddress(nftContract, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getCreatorPayoutAddress(nftContract);
    }
    ;
    getFeeRecipientIsAllowed(nftContract, feeRecipient, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getFeeRecipientIsAllowed(nftContract, feeRecipient);
    }
    ;
    getPayerIsAllowed(nftContract, payer, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getPayerIsAllowed(nftContract, payer);
    }
    ;
    getPayers(nftContract, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getPayers(nftContract);
    }
    ;
    getPublicDrop(nftContract, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getPublicDrop(nftContract);
    }
    ;
    getSignedMintValidationParams(nftContract, signer, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getSignedMintValidationParams(nftContract, signer);
    }
    ;
    getSigners(nftContract, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getSigners(nftContract);
    }
    ;
    getTokenGatedAllowedTokens(nftContract, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getTokenGatedAllowedTokens(nftContract);
    }
    ;
    getTokenGatedDrop(nftContract, allowedNftToken, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getTokenGatedDrop(nftContract, allowedNftToken);
    }
    ;
    mintAllowList(nftContract, feeRecipient, minterIfNotPayer, quantity, mintParams, proof, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.mintAllowList(nftContract, feeRecipient, minterIfNotPayer, quantity, mintParams, proof, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.mintAllowList(nftContract, feeRecipient, minterIfNotPayer, quantity, mintParams, proof, options);
        });
    }
    ;
    mintAllowedTokenHolder(nftContract, feeRecipient, minterIfNotPayer, mintParams, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.mintAllowedTokenHolder(nftContract, feeRecipient, minterIfNotPayer, mintParams, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.mintAllowedTokenHolder(nftContract, feeRecipient, minterIfNotPayer, mintParams, options);
        });
    }
    ;
    mintPublic(nftContract, feeRecipient, minterIfNotPayer, quantity, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.mintPublic(nftContract, feeRecipient, minterIfNotPayer, quantity, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.mintPublic(nftContract, feeRecipient, minterIfNotPayer, quantity, options);
        });
    }
    ;
    mintSigned(nftContract, feeRecipient, minterIfNotPayer, quantity, mintParams, salt, signature, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.mintSigned(nftContract, feeRecipient, minterIfNotPayer, quantity, mintParams, salt, signature, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.mintSigned(nftContract, feeRecipient, minterIfNotPayer, quantity, mintParams, salt, signature, options);
        });
    }
    ;
    updateAllowList(allowListData, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updateAllowList(allowListData, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updateAllowList(allowListData, options);
        });
    }
    ;
    updateAllowedFeeRecipient(feeRecipient, allowed, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updateAllowedFeeRecipient(feeRecipient, allowed, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updateAllowedFeeRecipient(feeRecipient, allowed, options);
        });
    }
    ;
    updateCreatorPayoutAddress(_payoutAddress, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updateCreatorPayoutAddress(_payoutAddress, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updateCreatorPayoutAddress(_payoutAddress, options);
        });
    }
    ;
    updateDropURI(dropURI, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updateDropURI(dropURI, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updateDropURI(dropURI, options);
        });
    }
    ;
    updatePayer(payer, allowed, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updatePayer(payer, allowed, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updatePayer(payer, allowed, options);
        });
    }
    ;
    updatePublicDrop(publicDrop, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updatePublicDrop(publicDrop, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updatePublicDrop(publicDrop, options);
        });
    }
    ;
    updateSignedMintValidationParams(signer, signedMintValidationParams, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updateSignedMintValidationParams(signer, signedMintValidationParams, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updateSignedMintValidationParams(signer, signedMintValidationParams, options);
        });
    }
    ;
    updateTokenGatedDrop(allowedNftToken, dropStage, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.updateTokenGatedDrop(allowedNftToken, dropStage, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.updateTokenGatedDrop(allowedNftToken, dropStage, options);
        });
    }
    ;
}
exports.SeaDropContract = SeaDropContract;
SeaDropContract.contractName = 'SeaDropContract';
