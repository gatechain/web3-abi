import ContractAbstract from "hipo-contract/dist/contract/ContractAbstract.js";
declare type BigNumber = any;
interface IOption {
    gasLimit?: Number;
    from?: string;
    value?: string;
}
export declare class BridgeV1Contract extends ContractAbstract {
    static contractName: string;
    Abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    RELAYER_ROLE(): any;
    _chainID(): any;
    _depositCounts(index_0: number | BigNumber): any;
    _depositRecords(index_0: BigNumber, index_1: number | BigNumber): any;
    _expiry(): any;
    _gasExecute(): any;
    _gasPrice(index_0: BigNumber): any;
    _gasVote(): any;
    _handlerDepositRecords(index_0: string, index_1: number | BigNumber, index_2: BigNumber): any;
    _hasVotedOnProposal(index_0: BigNumber, index_1: string, index_2: string): any;
    _proposals(index_0: BigNumber, index_1: string): any;
    _relayerThreshold(): any;
    _resourceIDToHandlerAddress(index_0: string): any;
    _tokenPrice(index_0: BigNumber): any;
    _totalProposals(): any;
    _totalRelayers(): any;
    adminAddRelayer(relayerAddress: string, opt?: IOption): Promise<any>;
    adminChangeRelayerThreshold(newThreshold: BigNumber, opt?: IOption): Promise<any>;
    adminPauseTransfers(opt?: IOption): Promise<any>;
    adminRemoveRelayer(relayerAddress: string, opt?: IOption): Promise<any>;
    adminSetBurnable(handlerAddress: string, tokenAddress: string, opt?: IOption): Promise<any>;
    adminSetGasPrice(chainIds: BigNumber[], prices: BigNumber[], opt?: IOption): Promise<any>;
    adminSetGenericResource(handlerAddress: string, resourceID: string, contractAddress: string, depositFunctionSig: string, executeFunctionSig: string, opt?: IOption): Promise<any>;
    adminSetResource(handlerAddress: string, resourceID: string, tokenAddress: string, opt?: IOption): Promise<any>;
    adminSetTokenPrice(chainIds: BigNumber[], prices: BigNumber[], opt?: IOption): Promise<any>;
    adminUnpauseTransfers(opt?: IOption): Promise<any>;
    adminWithdraw(handlerAddress: string, tokenAddress: string, recipient: string, amountOrTokenID: BigNumber, opt?: IOption): Promise<any>;
    cancelProposal(chainID: number | BigNumber, depositNonce: BigNumber, dataHash: string, opt?: IOption): Promise<any>;
    deposit(destinationChainID: number | BigNumber, resourceID: string, data: string, opt?: IOption): Promise<any>;
    depositEventAgain(destinationChainID: number | BigNumber, resourceID: string, depositNonce: BigNumber, opt?: IOption): Promise<any>;
    executeProposal(chainID: number | BigNumber, depositNonce: BigNumber, data: string, resourceID: string, opt?: IOption): Promise<any>;
    getFee(chainIdIn: BigNumber, chainIdOut: BigNumber): any;
    getProposal(originChainID: number | BigNumber, depositNonce: BigNumber, dataHash: string): any;
    getRoleAdmin(role: string): any;
    getRoleMember(role: string, index: BigNumber): any;
    getRoleMemberCount(role: string): any;
    grantRole(role: string, account: string, opt?: IOption): Promise<any>;
    hasRole(role: string, account: string): any;
    isRelayer(relayer: string): any;
    paused(): any;
    renounceAdmin(newAdmin: string, opt?: IOption): Promise<any>;
    renounceRole(role: string, account: string, opt?: IOption): Promise<any>;
    revokeRole(role: string, account: string, opt?: IOption): Promise<any>;
    transferFunds(addrs: string[], amounts: BigNumber[], opt?: IOption): Promise<any>;
    voteProposal(chainID: number | BigNumber, depositNonce: BigNumber, resourceID: string, dataHash: string, opt?: IOption): Promise<any>;
}
export {};
