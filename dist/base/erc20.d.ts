import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class ERC20Contract extends ContractAbstract {
    static contractName: string;
    Abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    PERMIT_TYPEHASH(opt?: IOption): any;
    allowance(index_0: string, index_1: string, opt?: IOption): any;
    approve(spender: string, value: BigNumber, opt?: IOption): Promise<any>;
    balanceOf(index_0: string, opt?: IOption): any;
    decimals(opt?: IOption): any;
    name(opt?: IOption): any;
    nonces(index_0: string, opt?: IOption): any;
    permit(owner: string, spender: string, value: BigNumber, deadline: BigNumber, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    symbol(opt?: IOption): any;
    totalSupply(opt?: IOption): any;
    transfer(to: string, value: BigNumber, opt?: IOption): Promise<any>;
    transferFrom(from: string, to: string, value: BigNumber, opt?: IOption): Promise<any>;
}
