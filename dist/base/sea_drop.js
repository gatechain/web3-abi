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
class SeaDropContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "CreatorPayoutAddressCannotBeZeroAddress", "type": "error" }, { "inputs": [], "name": "DuplicateFeeRecipient", "type": "error" }, { "inputs": [], "name": "DuplicatePayer", "type": "error" }, { "inputs": [], "name": "FeeRecipientCannotBeZeroAddress", "type": "error" }, { "inputs": [], "name": "FeeRecipientNotAllowed", "type": "error" }, { "inputs": [], "name": "FeeRecipientNotPresent", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "got", "type": "uint256" }, { "internalType": "uint256", "name": "want", "type": "uint256" }], "name": "IncorrectPayment", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "feeBps", "type": "uint256" }], "name": "InvalidFeeBps", "type": "error" }, { "inputs": [], "name": "InvalidProof", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "recoveredSigner", "type": "address" }], "name": "InvalidSignature", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "got", "type": "uint256" }, { "internalType": "uint256", "name": "maximum", "type": "uint256" }], "name": "InvalidSignedEndTime", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "got", "type": "uint256" }, { "internalType": "uint256", "name": "minimumOrMaximum", "type": "uint256" }], "name": "InvalidSignedFeeBps", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "got", "type": "uint256" }, { "internalType": "uint256", "name": "maximum", "type": "uint256" }], "name": "InvalidSignedMaxTokenSupplyForStage", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "got", "type": "uint256" }, { "internalType": "uint256", "name": "maximum", "type": "uint256" }], "name": "InvalidSignedMaxTotalMintableByWallet", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "got", "type": "uint256" }, { "internalType": "uint256", "name": "minimum", "type": "uint256" }], "name": "InvalidSignedMintPrice", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "got", "type": "uint256" }, { "internalType": "uint256", "name": "minimum", "type": "uint256" }], "name": "InvalidSignedStartTime", "type": "error" }, { "inputs": [], "name": "MintQuantityCannotBeZero", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "total", "type": "uint256" }, { "internalType": "uint256", "name": "allowed", "type": "uint256" }], "name": "MintQuantityExceedsMaxMintedPerWallet", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "total", "type": "uint256" }, { "internalType": "uint256", "name": "maxSupply", "type": "uint256" }], "name": "MintQuantityExceedsMaxSupply", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "total", "type": "uint256" }, { "internalType": "uint256", "name": "maxTokenSupplyForStage", "type": "uint256" }], "name": "MintQuantityExceedsMaxTokenSupplyForStage", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "currentTimestamp", "type": "uint256" }, { "internalType": "uint256", "name": "startTimestamp", "type": "uint256" }, { "internalType": "uint256", "name": "endTimestamp", "type": "uint256" }], "name": "NotActive", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }], "name": "OnlyINonFungibleSeaDropToken", "type": "error" }, { "inputs": [], "name": "PayerCannotBeZeroAddress", "type": "error" }, { "inputs": [], "name": "PayerNotAllowed", "type": "error" }, { "inputs": [], "name": "PayerNotPresent", "type": "error" }, { "inputs": [], "name": "SignatureAlreadyUsed", "type": "error" }, { "inputs": [], "name": "SignedMintsMustRestrictFeeRecipients", "type": "error" }, { "inputs": [], "name": "SignerCannotBeZeroAddress", "type": "error" }, { "inputs": [], "name": "SignerNotPresent", "type": "error" }, { "inputs": [], "name": "TokenGatedDropAllowedNftTokenCannotBeDropToken", "type": "error" }, { "inputs": [], "name": "TokenGatedDropAllowedNftTokenCannotBeZeroAddress", "type": "error" }, { "inputs": [], "name": "TokenGatedDropStageNotPresent", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "allowedNftToken", "type": "address" }, { "internalType": "uint256", "name": "allowedNftTokenId", "type": "uint256" }], "name": "TokenGatedNotTokenOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "allowedNftToken", "type": "address" }, { "internalType": "uint256", "name": "allowedNftTokenId", "type": "uint256" }], "name": "TokenGatedTokenIdAlreadyRedeemed", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "bytes32", "name": "previousMerkleRoot", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newMerkleRoot", "type": "bytes32" }, { "indexed": false, "internalType": "string[]", "name": "publicKeyURI", "type": "string[]" }, { "indexed": false, "internalType": "string", "name": "allowListURI", "type": "string" }], "name": "AllowListUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "address", "name": "feeRecipient", "type": "address" }, { "indexed": true, "internalType": "bool", "name": "allowed", "type": "bool" }], "name": "AllowedFeeRecipientUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newPayoutAddress", "type": "address" }], "name": "CreatorPayoutAddressUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": false, "internalType": "string", "name": "newDropURI", "type": "string" }], "name": "DropURIUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "address", "name": "payer", "type": "address" }, { "indexed": true, "internalType": "bool", "name": "allowed", "type": "bool" }], "name": "PayerUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "components": [{ "internalType": "uint80", "name": "mintPrice", "type": "uint80" }, { "internalType": "uint48", "name": "startTime", "type": "uint48" }, { "internalType": "uint48", "name": "endTime", "type": "uint48" }, { "internalType": "uint16", "name": "maxTotalMintableByWallet", "type": "uint16" }, { "internalType": "uint16", "name": "feeBps", "type": "uint16" }, { "internalType": "bool", "name": "restrictFeeRecipients", "type": "bool" }], "indexed": false, "internalType": "struct PublicDrop", "name": "publicDrop", "type": "tuple" }], "name": "PublicDropUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "address", "name": "minter", "type": "address" }, { "indexed": true, "internalType": "address", "name": "feeRecipient", "type": "address" }, { "indexed": false, "internalType": "address", "name": "payer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "quantityMinted", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "unitMintPrice", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "feeBps", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dropStageIndex", "type": "uint256" }], "name": "SeaDropMint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "address", "name": "signer", "type": "address" }, { "components": [{ "internalType": "uint80", "name": "minMintPrice", "type": "uint80" }, { "internalType": "uint24", "name": "maxMaxTotalMintableByWallet", "type": "uint24" }, { "internalType": "uint40", "name": "minStartTime", "type": "uint40" }, { "internalType": "uint40", "name": "maxEndTime", "type": "uint40" }, { "internalType": "uint40", "name": "maxMaxTokenSupplyForStage", "type": "uint40" }, { "internalType": "uint16", "name": "minFeeBps", "type": "uint16" }, { "internalType": "uint16", "name": "maxFeeBps", "type": "uint16" }], "indexed": false, "internalType": "struct SignedMintValidationParams", "name": "signedMintValidationParams", "type": "tuple" }], "name": "SignedMintValidationParamsUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "address", "name": "allowedNftToken", "type": "address" }, { "components": [{ "internalType": "uint80", "name": "mintPrice", "type": "uint80" }, { "internalType": "uint16", "name": "maxTotalMintableByWallet", "type": "uint16" }, { "internalType": "uint48", "name": "startTime", "type": "uint48" }, { "internalType": "uint48", "name": "endTime", "type": "uint48" }, { "internalType": "uint8", "name": "dropStageIndex", "type": "uint8" }, { "internalType": "uint32", "name": "maxTokenSupplyForStage", "type": "uint32" }, { "internalType": "uint16", "name": "feeBps", "type": "uint16" }, { "internalType": "bool", "name": "restrictFeeRecipients", "type": "bool" }], "indexed": false, "internalType": "struct TokenGatedDropStage", "name": "dropStage", "type": "tuple" }], "name": "TokenGatedDropStageUpdated", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }], "name": "getAllowListMerkleRoot", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }], "name": "getAllowedFeeRecipients", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "allowedNftToken", "type": "address" }, { "internalType": "uint256", "name": "allowedNftTokenId", "type": "uint256" }], "name": "getAllowedNftTokenIdIsRedeemed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }], "name": "getCreatorPayoutAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "feeRecipient", "type": "address" }], "name": "getFeeRecipientIsAllowed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "payer", "type": "address" }], "name": "getPayerIsAllowed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }], "name": "getPayers", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }], "name": "getPublicDrop", "outputs": [{ "components": [{ "internalType": "uint80", "name": "mintPrice", "type": "uint80" }, { "internalType": "uint48", "name": "startTime", "type": "uint48" }, { "internalType": "uint48", "name": "endTime", "type": "uint48" }, { "internalType": "uint16", "name": "maxTotalMintableByWallet", "type": "uint16" }, { "internalType": "uint16", "name": "feeBps", "type": "uint16" }, { "internalType": "bool", "name": "restrictFeeRecipients", "type": "bool" }], "internalType": "struct PublicDrop", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "signer", "type": "address" }], "name": "getSignedMintValidationParams", "outputs": [{ "components": [{ "internalType": "uint80", "name": "minMintPrice", "type": "uint80" }, { "internalType": "uint24", "name": "maxMaxTotalMintableByWallet", "type": "uint24" }, { "internalType": "uint40", "name": "minStartTime", "type": "uint40" }, { "internalType": "uint40", "name": "maxEndTime", "type": "uint40" }, { "internalType": "uint40", "name": "maxMaxTokenSupplyForStage", "type": "uint40" }, { "internalType": "uint16", "name": "minFeeBps", "type": "uint16" }, { "internalType": "uint16", "name": "maxFeeBps", "type": "uint16" }], "internalType": "struct SignedMintValidationParams", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }], "name": "getSigners", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }], "name": "getTokenGatedAllowedTokens", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "allowedNftToken", "type": "address" }], "name": "getTokenGatedDrop", "outputs": [{ "components": [{ "internalType": "uint80", "name": "mintPrice", "type": "uint80" }, { "internalType": "uint16", "name": "maxTotalMintableByWallet", "type": "uint16" }, { "internalType": "uint48", "name": "startTime", "type": "uint48" }, { "internalType": "uint48", "name": "endTime", "type": "uint48" }, { "internalType": "uint8", "name": "dropStageIndex", "type": "uint8" }, { "internalType": "uint32", "name": "maxTokenSupplyForStage", "type": "uint32" }, { "internalType": "uint16", "name": "feeBps", "type": "uint16" }, { "internalType": "bool", "name": "restrictFeeRecipients", "type": "bool" }], "internalType": "struct TokenGatedDropStage", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "feeRecipient", "type": "address" }, { "internalType": "address", "name": "minterIfNotPayer", "type": "address" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "mintPrice", "type": "uint256" }, { "internalType": "uint256", "name": "maxTotalMintableByWallet", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "dropStageIndex", "type": "uint256" }, { "internalType": "uint256", "name": "maxTokenSupplyForStage", "type": "uint256" }, { "internalType": "uint256", "name": "feeBps", "type": "uint256" }, { "internalType": "bool", "name": "restrictFeeRecipients", "type": "bool" }], "internalType": "struct MintParams", "name": "mintParams", "type": "tuple" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "mintAllowList", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "feeRecipient", "type": "address" }, { "internalType": "address", "name": "minterIfNotPayer", "type": "address" }, { "components": [{ "internalType": "address", "name": "allowedNftToken", "type": "address" }, { "internalType": "uint256[]", "name": "allowedNftTokenIds", "type": "uint256[]" }], "internalType": "struct TokenGatedMintParams", "name": "mintParams", "type": "tuple" }], "name": "mintAllowedTokenHolder", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "feeRecipient", "type": "address" }, { "internalType": "address", "name": "minterIfNotPayer", "type": "address" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "mintPublic", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "address", "name": "feeRecipient", "type": "address" }, { "internalType": "address", "name": "minterIfNotPayer", "type": "address" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "mintPrice", "type": "uint256" }, { "internalType": "uint256", "name": "maxTotalMintableByWallet", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "dropStageIndex", "type": "uint256" }, { "internalType": "uint256", "name": "maxTokenSupplyForStage", "type": "uint256" }, { "internalType": "uint256", "name": "feeBps", "type": "uint256" }, { "internalType": "bool", "name": "restrictFeeRecipients", "type": "bool" }], "internalType": "struct MintParams", "name": "mintParams", "type": "tuple" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "mintSigned", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }, { "internalType": "string[]", "name": "publicKeyURIs", "type": "string[]" }, { "internalType": "string", "name": "allowListURI", "type": "string" }], "internalType": "struct AllowListData", "name": "allowListData", "type": "tuple" }], "name": "updateAllowList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "feeRecipient", "type": "address" }, { "internalType": "bool", "name": "allowed", "type": "bool" }], "name": "updateAllowedFeeRecipient", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_payoutAddress", "type": "address" }], "name": "updateCreatorPayoutAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "dropURI", "type": "string" }], "name": "updateDropURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "payer", "type": "address" }, { "internalType": "bool", "name": "allowed", "type": "bool" }], "name": "updatePayer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint80", "name": "mintPrice", "type": "uint80" }, { "internalType": "uint48", "name": "startTime", "type": "uint48" }, { "internalType": "uint48", "name": "endTime", "type": "uint48" }, { "internalType": "uint16", "name": "maxTotalMintableByWallet", "type": "uint16" }, { "internalType": "uint16", "name": "feeBps", "type": "uint16" }, { "internalType": "bool", "name": "restrictFeeRecipients", "type": "bool" }], "internalType": "struct PublicDrop", "name": "publicDrop", "type": "tuple" }], "name": "updatePublicDrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "signer", "type": "address" }, { "components": [{ "internalType": "uint80", "name": "minMintPrice", "type": "uint80" }, { "internalType": "uint24", "name": "maxMaxTotalMintableByWallet", "type": "uint24" }, { "internalType": "uint40", "name": "minStartTime", "type": "uint40" }, { "internalType": "uint40", "name": "maxEndTime", "type": "uint40" }, { "internalType": "uint40", "name": "maxMaxTokenSupplyForStage", "type": "uint40" }, { "internalType": "uint16", "name": "minFeeBps", "type": "uint16" }, { "internalType": "uint16", "name": "maxFeeBps", "type": "uint16" }], "internalType": "struct SignedMintValidationParams", "name": "signedMintValidationParams", "type": "tuple" }], "name": "updateSignedMintValidationParams", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "allowedNftToken", "type": "address" }, { "components": [{ "internalType": "uint80", "name": "mintPrice", "type": "uint80" }, { "internalType": "uint16", "name": "maxTotalMintableByWallet", "type": "uint16" }, { "internalType": "uint48", "name": "startTime", "type": "uint48" }, { "internalType": "uint48", "name": "endTime", "type": "uint48" }, { "internalType": "uint8", "name": "dropStageIndex", "type": "uint8" }, { "internalType": "uint32", "name": "maxTokenSupplyForStage", "type": "uint32" }, { "internalType": "uint16", "name": "feeBps", "type": "uint16" }, { "internalType": "bool", "name": "restrictFeeRecipients", "type": "bool" }], "internalType": "struct TokenGatedDropStage", "name": "dropStage", "type": "tuple" }], "name": "updateTokenGatedDrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
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
