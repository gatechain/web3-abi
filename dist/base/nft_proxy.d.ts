import ContractAbstract, { IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class NftProxyContract extends ContractAbstract {
    static contractName: string;
    constructor(props: any);
    initialAddressSet(opt?: IOption): any;
    endGrantAuthentication(addr: string, opt?: IOption): Promise<any>;
    revokeAuthentication(addr: string, opt?: IOption): Promise<any>;
    pending(index_0: string, opt?: IOption): any;
    contracts(index_0: string, opt?: IOption): any;
    renounceOwnership(opt?: IOption): Promise<any>;
    owner(opt?: IOption): any;
    delegateProxyImplementation(opt?: IOption): any;
    proxies(index_0: string, opt?: IOption): any;
    startGrantAuthentication(addr: string, opt?: IOption): Promise<any>;
    registerProxy(opt?: IOption): Promise<any>;
    DELAY_PERIOD(opt?: IOption): any;
    transferOwnership(_newOwner: string, opt?: IOption): Promise<any>;
    grantInitialAuthentication(authAddress: string, opt?: IOption): Promise<any>;
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
}
