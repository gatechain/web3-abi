import ContractAbstract from "web3-contract/dist/contract/ContractAbstract.js";
interface IOption {
    gasLimit?: Number;
    from?: string;
    value?: string;
}
export declare class NftProxyContract extends ContractAbstract {
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
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
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
    initialAddressSet(): any;
    endGrantAuthentication(addr: string, opt?: IOption): Promise<any>;
    revokeAuthentication(addr: string, opt?: IOption): Promise<any>;
    pending(index_0: string): any;
    contracts(index_0: string): any;
    renounceOwnership(opt?: IOption): Promise<any>;
    owner(): any;
    delegateProxyImplementation(): any;
    proxies(index_0: string): any;
    startGrantAuthentication(addr: string, opt?: IOption): Promise<any>;
    registerProxy(opt?: IOption): Promise<any>;
    DELAY_PERIOD(): any;
    transferOwnership(_newOwner: string, opt?: IOption): Promise<any>;
    grantInitialAuthentication(authAddress: string, opt?: IOption): Promise<any>;
}
export {};
