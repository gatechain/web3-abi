import ContractAbstract from "hipo-contract/dist/contract/ContractAbstract.js";
type BigNumber = any;
interface IOption {
    gasLimit?: Number;
    from?: string;
    value?: string;
}
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
    DOMAIN_SEPARATOR(): any;
    PERMIT_TYPEHASH(): any;
    allowance(index_0: string, index_1: string): any;
    approve(spender: string, value: BigNumber, opt?: IOption): Promise<any>;
    balanceOf(index_0: string): any;
    decimals(): any;
    nonces(index_0: string): any;
    permit(owner: string, spender: string, value: BigNumber, deadline: BigNumber, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    symbol(): any;
    totalSupply(): any;
    transfer(to: string, value: BigNumber, opt?: IOption): Promise<any>;
    transferFrom(from: string, to: string, value: BigNumber, opt?: IOption): Promise<any>;
}
export {};
