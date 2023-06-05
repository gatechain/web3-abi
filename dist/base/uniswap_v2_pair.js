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
exports.UniswapV2PairContract = void 0;
const ContractAbstract_js_1 = __importDefault(require("web3-contract/dist/contract/ContractAbstract.js"));
class UniswapV2PairContract extends ContractAbstract_js_1.default {
    constructor(props) {
        super(props);
        this.Abi = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Swap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint112", "name": "reserve0", "type": "uint112" }, { "indexed": false, "internalType": "uint112", "name": "reserve1", "type": "uint112" }], "name": "Sync", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }, { "internalType": "address", "name": "index_1", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "burn", "outputs": [{ "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "internalType": "uint256", "name": "amount1", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "kLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "index_0", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "price0CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "price1CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "skim", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "swap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "sync", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token1", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
    }
    DOMAIN_SEPARATOR(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.DOMAIN_SEPARATOR();
    }
    ;
    MINIMUM_LIQUIDITY(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.MINIMUM_LIQUIDITY();
    }
    ;
    PERMIT_TYPEHASH(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.PERMIT_TYPEHASH();
    }
    ;
    allowance(index_0, index_1, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.allowance(index_0, index_1);
    }
    ;
    approve(spender, value, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.approve(spender, value, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.approve(spender, value, options);
        });
    }
    ;
    balanceOf(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.balanceOf(index_0);
    }
    ;
    burn(to, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.burn(to, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.burn(to, options);
        });
    }
    ;
    decimals(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.decimals();
    }
    ;
    factory(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.factory();
    }
    ;
    getReserves(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.getReserves();
    }
    ;
    initialize(_token0, _token1, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.initialize(_token0, _token1, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.initialize(_token0, _token1, options);
        });
    }
    ;
    kLast(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.kLast();
    }
    ;
    mint(to, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.mint(to, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.mint(to, options);
        });
    }
    ;
    nonces(index_0, opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.nonces(index_0);
    }
    ;
    permit(owner, spender, value, deadline, v, r, s, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.permit(owner, spender, value, deadline, v, r, s, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.permit(owner, spender, value, deadline, v, r, s, options);
        });
    }
    ;
    price0CumulativeLast(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.price0CumulativeLast();
    }
    ;
    price1CumulativeLast(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.price1CumulativeLast();
    }
    ;
    skim(to, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.skim(to, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.skim(to, options);
        });
    }
    ;
    swap(amount0Out, amount1Out, to, data, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.swap(amount0Out, amount1Out, to, data, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.swap(amount0Out, amount1Out, to, data, options);
        });
    }
    ;
    symbol(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.symbol();
    }
    ;
    sync(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.sync(_opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.sync(options);
        });
    }
    ;
    token0(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.token0();
    }
    ;
    token1(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.token1();
    }
    ;
    totalSupply(opt) {
        const [address] = this.parseOption(opt);
        const provider = this.getContractProvider(address);
        return provider.totalSupply();
    }
    ;
    transfer(to, value, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.transfer(to, value, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.transfer(to, value, options);
        });
    }
    ;
    transferFrom(from, to, value, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            const [address, rest] = this.parseOption(opt);
            const __signer = this.getContractSigner(address);
            const _opt = rest;
            let gasLimit = null;
            try {
                gasLimit = yield __signer.estimateGas.transferFrom(from, to, value, _opt);
                gasLimit = gasLimit.mul(120).div(100);
            }
            catch (error) {
                console.log(error);
            }
            const options = Object.assign({
                gasLimit
            }, _opt);
            return __signer.transferFrom(from, to, value, options);
        });
    }
    ;
}
exports.UniswapV2PairContract = UniswapV2PairContract;
UniswapV2PairContract.contractName = 'UniswapV2PairContract';
