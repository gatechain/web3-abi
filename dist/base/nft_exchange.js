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
const NftExchange_json_1 = __importDefault(require("../abis/NftExchange.json"));
class NftExchangeContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = NftExchange_json_1.default;
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee, options);
        });
    }
    ;
    changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee, options);
        });
    }
    ;
    guardedArrayReplace(array, desired, mask, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.guardedArrayReplace(array, desired, mask, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.guardedArrayReplace(array, desired, mask, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.testCopyAddress(addr, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.testCopyAddress(addr, options);
        });
    }
    ;
    testCopy(arrToCopy, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.testCopy(arrToCopy, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.testCopy(arrToCopy, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.changeProtocolFeeRecipient(newProtocolFeeRecipient, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.changeProtocolFeeRecipient(newProtocolFeeRecipient, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.orderCalldataCanMatch(buyCalldata, buyReplacementPattern, sellCalldata, sellReplacementPattern, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.orderCalldataCanMatch(buyCalldata, buyReplacementPattern, sellCalldata, sellReplacementPattern, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.renounceOwnership(_opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.renounceOwnership(options);
        });
    }
    ;
    hashOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.hashOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.hashOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.approveOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, orderbookInclusionDesired, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.approveOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, orderbookInclusionDesired, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.hashToSign_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.hashToSign_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.cancelOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.cancelOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s, options);
        });
    }
    ;
    atomicMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, vs, rssMetadata, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.atomicMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, vs, rssMetadata, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.atomicMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, vs, rssMetadata, options);
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
            const signer = this.getContractSigner(address);
            const _opt = rest;
            const gasLimit = yield signer.estimateGas.transferOwnership(newOwner, _opt);
            const options = Object.assign({
                gasLimit
            }, _opt);
            return signer.transferOwnership(newOwner, options);
        });
    }
    ;
}
exports.NftExchangeContract = NftExchangeContract;
NftExchangeContract.contractName = 'NftExchangeContract';
