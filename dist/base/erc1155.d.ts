import ContractAbstract from "web3-contract/dist/contract/ContractAbstract.js";
type BigNumber = any;
interface IOption {
    gasLimit?: Number;
    from?: string;
    value?: string;
}
export declare class ERC1155Contract extends ContractAbstract {
    static contractName: string;
    Abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
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
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
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
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    constructor(props: any);
    DEFAULT_ADMIN_ROLE(): any;
    MINTER_ROLE(): any;
    PAUSER_ROLE(): any;
    balanceOf(account: string, id: BigNumber): any;
    balanceOfBatch(accounts: string[], ids: BigNumber[]): any;
    burn(account: string, id: BigNumber, value: BigNumber, opt?: IOption): Promise<any>;
    burnBatch(account: string, ids: BigNumber[], values: BigNumber[], opt?: IOption): Promise<any>;
    getRoleAdmin(role: string): any;
    getRoleMember(role: string, index: BigNumber): any;
    getRoleMemberCount(role: string): any;
    grantRole(role: string, account: string, opt?: IOption): Promise<any>;
    hasRole(role: string, account: string): any;
    isApprovedForAll(account: string, operator: string): any;
    mint(to: string, id: BigNumber, amount: BigNumber, data: string, opt?: IOption): Promise<any>;
    mintBatch(to: string, ids: BigNumber[], amounts: BigNumber[], data: string, opt?: IOption): Promise<any>;
    pause(opt?: IOption): Promise<any>;
    paused(): any;
    renounceRole(role: string, account: string, opt?: IOption): Promise<any>;
    revokeRole(role: string, account: string, opt?: IOption): Promise<any>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumber[], amounts: BigNumber[], data: string, opt?: IOption): Promise<any>;
    safeTransferFrom(from: string, to: string, id: BigNumber, amount: BigNumber, data: string, opt?: IOption): Promise<any>;
    setApprovalForAll(operator: string, approved: boolean, opt?: IOption): Promise<any>;
    supportsInterface(interfaceId: string): any;
    unpause(opt?: IOption): Promise<any>;
    uri(index_0: BigNumber): any;
}
export {};
