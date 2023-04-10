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
exports.NftExchangeContract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
class NftExchangeContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenTransferProxy", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "target", "type": "address" }, { "name": "calldata", "type": "bytes" }, { "name": "extradata", "type": "bytes" }], "name": "staticCall", "outputs": [{ "name": "result", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newMinimumMakerProtocolFee", "type": "uint256" }], "name": "changeMinimumMakerProtocolFee", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newMinimumTakerProtocolFee", "type": "uint256" }], "name": "changeMinimumTakerProtocolFee", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "array", "type": "bytes" }, { "name": "desired", "type": "bytes" }, { "name": "mask", "type": "bytes" }], "name": "guardedArrayReplace", "outputs": [{ "name": "", "type": "bytes" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "minimumTakerProtocolFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "codename", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "addr", "type": "address" }], "name": "testCopyAddress", "outputs": [{ "name": "", "type": "bytes" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "arrToCopy", "type": "bytes" }], "name": "testCopy", "outputs": [{ "name": "", "type": "bytes" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "addrs", "type": "address[7]" }, { "name": "uints", "type": "uint256[9]" }, { "name": "feeMethod", "type": "uint8" }, { "name": "side", "type": "uint8" }, { "name": "saleKind", "type": "uint8" }, { "name": "howToCall", "type": "uint8" }, { "name": "calldata", "type": "bytes" }, { "name": "replacementPattern", "type": "bytes" }, { "name": "staticExtradata", "type": "bytes" }], "name": "calculateCurrentPrice_", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newProtocolFeeRecipient", "type": "address" }], "name": "changeProtocolFeeRecipient", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "buyCalldata", "type": "bytes" }, { "name": "buyReplacementPattern", "type": "bytes" }, { "name": "sellCalldata", "type": "bytes" }, { "name": "sellReplacementPattern", "type": "bytes" }], "name": "orderCalldataCanMatch", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "addrs", "type": "address[7]" }, { "name": "uints", "type": "uint256[9]" }, { "name": "feeMethod", "type": "uint8" }, { "name": "side", "type": "uint8" }, { "name": "saleKind", "type": "uint8" }, { "name": "howToCall", "type": "uint8" }, { "name": "calldata", "type": "bytes" }, { "name": "replacementPattern", "type": "bytes" }, { "name": "staticExtradata", "type": "bytes" }, { "name": "v", "type": "uint8" }, { "name": "r", "type": "bytes32" }, { "name": "s", "type": "bytes32" }], "name": "validateOrder_", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "side", "type": "uint8" }, { "name": "saleKind", "type": "uint8" }, { "name": "basePrice", "type": "uint256" }, { "name": "extra", "type": "uint256" }, { "name": "listingTime", "type": "uint256" }, { "name": "expirationTime", "type": "uint256" }], "name": "calculateFinalPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "protocolFeeRecipient", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "addrs", "type": "address[7]" }, { "name": "uints", "type": "uint256[9]" }, { "name": "feeMethod", "type": "uint8" }, { "name": "side", "type": "uint8" }, { "name": "saleKind", "type": "uint8" }, { "name": "howToCall", "type": "uint8" }, { "name": "calldata", "type": "bytes" }, { "name": "replacementPattern", "type": "bytes" }, { "name": "staticExtradata", "type": "bytes" }], "name": "hashOrder_", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "addrs", "type": "address[14]" }, { "name": "uints", "type": "uint256[18]" }, { "name": "feeMethodsSidesKindsHowToCalls", "type": "uint8[8]" }, { "name": "calldataBuy", "type": "bytes" }, { "name": "calldataSell", "type": "bytes" }, { "name": "replacementPatternBuy", "type": "bytes" }, { "name": "replacementPatternSell", "type": "bytes" }, { "name": "staticExtradataBuy", "type": "bytes" }, { "name": "staticExtradataSell", "type": "bytes" }], "name": "ordersCanMatch_", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "addrs", "type": "address[7]" }, { "name": "uints", "type": "uint256[9]" }, { "name": "feeMethod", "type": "uint8" }, { "name": "side", "type": "uint8" }, { "name": "saleKind", "type": "uint8" }, { "name": "howToCall", "type": "uint8" }, { "name": "calldata", "type": "bytes" }, { "name": "replacementPattern", "type": "bytes" }, { "name": "staticExtradata", "type": "bytes" }, { "name": "orderbookInclusionDesired", "type": "bool" }], "name": "approveOrder_", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "registry", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "minimumMakerProtocolFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "addrs", "type": "address[7]" }, { "name": "uints", "type": "uint256[9]" }, { "name": "feeMethod", "type": "uint8" }, { "name": "side", "type": "uint8" }, { "name": "saleKind", "type": "uint8" }, { "name": "howToCall", "type": "uint8" }, { "name": "calldata", "type": "bytes" }, { "name": "replacementPattern", "type": "bytes" }, { "name": "staticExtradata", "type": "bytes" }], "name": "hashToSign_", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "index_0", "type": "bytes32" }], "name": "cancelledOrFinalized", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "exchangeToken", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "addrs", "type": "address[7]" }, { "name": "uints", "type": "uint256[9]" }, { "name": "feeMethod", "type": "uint8" }, { "name": "side", "type": "uint8" }, { "name": "saleKind", "type": "uint8" }, { "name": "howToCall", "type": "uint8" }, { "name": "calldata", "type": "bytes" }, { "name": "replacementPattern", "type": "bytes" }, { "name": "staticExtradata", "type": "bytes" }, { "name": "v", "type": "uint8" }, { "name": "r", "type": "bytes32" }, { "name": "s", "type": "bytes32" }], "name": "cancelOrder_", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "addrs", "type": "address[14]" }, { "name": "uints", "type": "uint256[18]" }, { "name": "feeMethodsSidesKindsHowToCalls", "type": "uint8[8]" }, { "name": "calldataBuy", "type": "bytes" }, { "name": "calldataSell", "type": "bytes" }, { "name": "replacementPatternBuy", "type": "bytes" }, { "name": "replacementPatternSell", "type": "bytes" }, { "name": "staticExtradataBuy", "type": "bytes" }, { "name": "staticExtradataSell", "type": "bytes" }, { "name": "vs", "type": "uint8[2]" }, { "name": "rssMetadata", "type": "bytes32[5]" }], "name": "atomicMatch_", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "addrs", "type": "address[7]" }, { "name": "uints", "type": "uint256[9]" }, { "name": "feeMethod", "type": "uint8" }, { "name": "side", "type": "uint8" }, { "name": "saleKind", "type": "uint8" }, { "name": "howToCall", "type": "uint8" }, { "name": "calldata", "type": "bytes" }, { "name": "replacementPattern", "type": "bytes" }, { "name": "staticExtradata", "type": "bytes" }], "name": "validateOrderParameters_", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "INVERSE_BASIS_POINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "addrs", "type": "address[14]" }, { "name": "uints", "type": "uint256[18]" }, { "name": "feeMethodsSidesKindsHowToCalls", "type": "uint8[8]" }, { "name": "calldataBuy", "type": "bytes" }, { "name": "calldataSell", "type": "bytes" }, { "name": "replacementPatternBuy", "type": "bytes" }, { "name": "replacementPatternSell", "type": "bytes" }, { "name": "staticExtradataBuy", "type": "bytes" }, { "name": "staticExtradataSell", "type": "bytes" }], "name": "calculateMatchPrice_", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "index_0", "type": "bytes32" }], "name": "approvedOrders", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "registryAddress", "type": "address" }, { "name": "tokenTransferProxyAddress", "type": "address" }, { "name": "tokenAddress", "type": "address" }, { "name": "protocolFeeAddress", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "hash", "type": "bytes32" }, { "indexed": false, "name": "exchange", "type": "address" }, { "indexed": true, "name": "maker", "type": "address" }, { "indexed": false, "name": "taker", "type": "address" }, { "indexed": false, "name": "makerRelayerFee", "type": "uint256" }, { "indexed": false, "name": "takerRelayerFee", "type": "uint256" }, { "indexed": false, "name": "makerProtocolFee", "type": "uint256" }, { "indexed": false, "name": "takerProtocolFee", "type": "uint256" }, { "indexed": true, "name": "feeRecipient", "type": "address" }, { "indexed": false, "name": "feeMethod", "type": "uint8" }, { "indexed": false, "name": "side", "type": "uint8" }, { "indexed": false, "name": "saleKind", "type": "uint8" }, { "indexed": false, "name": "target", "type": "address" }], "name": "OrderApprovedPartOne", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "hash", "type": "bytes32" }, { "indexed": false, "name": "howToCall", "type": "uint8" }, { "indexed": false, "name": "calldata", "type": "bytes" }, { "indexed": false, "name": "replacementPattern", "type": "bytes" }, { "indexed": false, "name": "staticTarget", "type": "address" }, { "indexed": false, "name": "staticExtradata", "type": "bytes" }, { "indexed": false, "name": "paymentToken", "type": "address" }, { "indexed": false, "name": "basePrice", "type": "uint256" }, { "indexed": false, "name": "extra", "type": "uint256" }, { "indexed": false, "name": "listingTime", "type": "uint256" }, { "indexed": false, "name": "expirationTime", "type": "uint256" }, { "indexed": false, "name": "salt", "type": "uint256" }, { "indexed": false, "name": "orderbookInclusionDesired", "type": "bool" }], "name": "OrderApprovedPartTwo", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "hash", "type": "bytes32" }], "name": "OrderCancelled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "buyHash", "type": "bytes32" }, { "indexed": false, "name": "sellHash", "type": "bytes32" }, { "indexed": true, "name": "maker", "type": "address" }, { "indexed": true, "name": "taker", "type": "address" }, { "indexed": false, "name": "price", "type": "uint256" }, { "indexed": true, "name": "metadata", "type": "bytes32" }], "name": "OrdersMatched", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }], "name": "OwnershipRenounced", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }];
    }
    tokenTransferProxy(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.tokenTransferProxy();
    }
    ;
    staticCall(target, calldata, extradata, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.staticCall(target, calldata, extradata);
    }
    ;
    changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee, options);
        });
    }
    ;
    changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee, options);
        });
    }
    ;
    guardedArrayReplace(array, desired, mask, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.guardedArrayReplace(array, desired, mask, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.guardedArrayReplace(array, desired, mask, options);
        });
    }
    ;
    minimumTakerProtocolFee(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.minimumTakerProtocolFee();
    }
    ;
    codename(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.codename();
    }
    ;
    testCopyAddress(addr, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.testCopyAddress(addr, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.testCopyAddress(addr, options);
        });
    }
    ;
    testCopy(arrToCopy, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.testCopy(arrToCopy, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.testCopy(arrToCopy, options);
        });
    }
    ;
    calculateCurrentPrice_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.calculateCurrentPrice_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata);
    }
    ;
    changeProtocolFeeRecipient(newProtocolFeeRecipient, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.changeProtocolFeeRecipient(newProtocolFeeRecipient, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.changeProtocolFeeRecipient(newProtocolFeeRecipient, options);
        });
    }
    ;
    version(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.version();
    }
    ;
    orderCalldataCanMatch(buyCalldata, buyReplacementPattern, sellCalldata, sellReplacementPattern, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.orderCalldataCanMatch(buyCalldata, buyReplacementPattern, sellCalldata, sellReplacementPattern, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.orderCalldataCanMatch(buyCalldata, buyReplacementPattern, sellCalldata, sellReplacementPattern, options);
        });
    }
    ;
    validateOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.validateOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s);
    }
    ;
    calculateFinalPrice(side, saleKind, basePrice, extra, listingTime, expirationTime, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.calculateFinalPrice(side, saleKind, basePrice, extra, listingTime, expirationTime);
    }
    ;
    protocolFeeRecipient(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.protocolFeeRecipient();
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
    hashOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.hashOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.hashOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, options);
        });
    }
    ;
    ordersCanMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.ordersCanMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell);
    }
    ;
    approveOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, orderbookInclusionDesired, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.approveOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, orderbookInclusionDesired, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.approveOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, orderbookInclusionDesired, options);
        });
    }
    ;
    registry(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.registry();
    }
    ;
    minimumMakerProtocolFee(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.minimumMakerProtocolFee();
    }
    ;
    hashToSign_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.hashToSign_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.hashToSign_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, options);
        });
    }
    ;
    cancelledOrFinalized(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.cancelledOrFinalized(index_0);
    }
    ;
    owner(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.owner();
    }
    ;
    exchangeToken(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.exchangeToken();
    }
    ;
    cancelOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.cancelOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.cancelOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s, options);
        });
    }
    ;
    atomicMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, vs, rssMetadata, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.atomicMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, vs, rssMetadata, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.atomicMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, vs, rssMetadata, options);
        });
    }
    ;
    validateOrderParameters_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.validateOrderParameters_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata);
    }
    ;
    INVERSE_BASIS_POINT(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.INVERSE_BASIS_POINT();
    }
    ;
    calculateMatchPrice_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.calculateMatchPrice_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell);
    }
    ;
    approvedOrders(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.approvedOrders(index_0);
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
}
exports.NftExchangeContract = NftExchangeContract;
NftExchangeContract.contractName = 'NftExchangeContract';
