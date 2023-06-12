import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class WGTContract extends ContractAbstract {
    static contractName: string;
    Abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    constructor(props: any);
    name(opt?: IOption): any;
    approve(guy: string, wad: BigNumber, opt?: IOption): Promise<any>;
    totalSupply(opt?: IOption): any;
    transferFrom(src: string, dst: string, wad: BigNumber, opt?: IOption): Promise<any>;
    withdraw(wad: BigNumber, opt?: IOption): Promise<any>;
    decimals(opt?: IOption): any;
    balanceOf(index_0: string, opt?: IOption): any;
    symbol(opt?: IOption): any;
    transfer(dst: string, wad: BigNumber, opt?: IOption): Promise<any>;
    deposit(opt?: IOption): Promise<any>;
    allowance(index_0: string, index_1: string, opt?: IOption): any;
}
