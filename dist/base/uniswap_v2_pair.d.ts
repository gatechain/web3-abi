import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class UniswapV2PairContract extends ContractAbstract {
    static contractName: string;
    Abi: ({
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    constructor(props: any);
    DOMAIN_SEPARATOR(opt?: IOption): any;
    MINIMUM_LIQUIDITY(opt?: IOption): any;
    PERMIT_TYPEHASH(opt?: IOption): any;
    allowance(index_0: string, index_1: string, opt?: IOption): any;
    approve(spender: string, value: BigNumber, opt?: IOption): Promise<any>;
    balanceOf(index_0: string, opt?: IOption): any;
    burn(to: string, opt?: IOption): Promise<any>;
    decimals(opt?: IOption): any;
    factory(opt?: IOption): any;
    getReserves(opt?: IOption): any;
    initialize(_token0: string, _token1: string, opt?: IOption): Promise<any>;
    kLast(opt?: IOption): any;
    mint(to: string, opt?: IOption): Promise<any>;
    name(opt?: IOption): any;
    nonces(index_0: string, opt?: IOption): any;
    permit(owner: string, spender: string, value: BigNumber, deadline: BigNumber, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    price0CumulativeLast(opt?: IOption): any;
    price1CumulativeLast(opt?: IOption): any;
    skim(to: string, opt?: IOption): Promise<any>;
    swap(amount0Out: BigNumber, amount1Out: BigNumber, to: string, data: string, opt?: IOption): Promise<any>;
    symbol(opt?: IOption): any;
    sync(opt?: IOption): Promise<any>;
    token0(opt?: IOption): any;
    token1(opt?: IOption): any;
    totalSupply(opt?: IOption): any;
    transfer(to: string, value: BigNumber, opt?: IOption): Promise<any>;
    transferFrom(from: string, to: string, value: BigNumber, opt?: IOption): Promise<any>;
}
