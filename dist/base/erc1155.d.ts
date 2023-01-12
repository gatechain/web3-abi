import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
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
    DEFAULT_ADMIN_ROLE(opt?: IOption): any;
    MINTER_ROLE(opt?: IOption): any;
    PAUSER_ROLE(opt?: IOption): any;
    balanceOf(account: string, id: BigNumber, opt?: IOption): any;
    balanceOfBatch(accounts: string[], ids: BigNumber[], opt?: IOption): any;
    burn(account: string, id: BigNumber, value: BigNumber, opt?: IOption): Promise<any>;
    burnBatch(account: string, ids: BigNumber[], values: BigNumber[], opt?: IOption): Promise<any>;
    getRoleAdmin(role: string, opt?: IOption): any;
    getRoleMember(role: string, index: BigNumber, opt?: IOption): any;
    getRoleMemberCount(role: string, opt?: IOption): any;
    grantRole(role: string, account: string, opt?: IOption): Promise<any>;
    hasRole(role: string, account: string, opt?: IOption): any;
    isApprovedForAll(account: string, operator: string, opt?: IOption): any;
    mint(to: string, id: BigNumber, amount: BigNumber, data: string, opt?: IOption): Promise<any>;
    mintBatch(to: string, ids: BigNumber[], amounts: BigNumber[], data: string, opt?: IOption): Promise<any>;
    pause(opt?: IOption): Promise<any>;
    paused(opt?: IOption): any;
    renounceRole(role: string, account: string, opt?: IOption): Promise<any>;
    revokeRole(role: string, account: string, opt?: IOption): Promise<any>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumber[], amounts: BigNumber[], data: string, opt?: IOption): Promise<any>;
    safeTransferFrom(from: string, to: string, id: BigNumber, amount: BigNumber, data: string, opt?: IOption): Promise<any>;
    setApprovalForAll(operator: string, approved: boolean, opt?: IOption): Promise<any>;
    supportsInterface(interfaceId: string, opt?: IOption): any;
    unpause(opt?: IOption): Promise<any>;
    uri(index_0: BigNumber, opt?: IOption): any;
}
