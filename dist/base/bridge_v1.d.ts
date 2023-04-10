import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class BridgeV1Contract extends ContractAbstract {
    static contractName: string;
    constructor(props: any);
    DEFAULT_ADMIN_ROLE(opt?: IOption): any;
    RELAYER_ROLE(opt?: IOption): any;
    _chainID(opt?: IOption): any;
    _depositCounts(index_0: number | BigNumber, opt?: IOption): any;
    _depositRecords(index_0: BigNumber, index_1: number | BigNumber, opt?: IOption): any;
    _expiry(opt?: IOption): any;
    _gasExecute(opt?: IOption): any;
    _gasPrice(index_0: BigNumber, opt?: IOption): any;
    _gasVote(opt?: IOption): any;
    _handlerDepositRecords(index_0: string, index_1: number | BigNumber, index_2: BigNumber, opt?: IOption): any;
    _hasVotedOnProposal(index_0: BigNumber, index_1: string, index_2: string, opt?: IOption): any;
    _proposals(index_0: BigNumber, index_1: string, opt?: IOption): any;
    _relayerThreshold(opt?: IOption): any;
    _resourceIDToHandlerAddress(index_0: string, opt?: IOption): any;
    _tokenPrice(index_0: BigNumber, opt?: IOption): any;
    _totalProposals(opt?: IOption): any;
    _totalRelayers(opt?: IOption): any;
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
    getFee(chainIdIn: BigNumber, chainIdOut: BigNumber, opt?: IOption): any;
    getProposal(originChainID: number | BigNumber, depositNonce: BigNumber, dataHash: string, opt?: IOption): any;
    getRoleAdmin(role: string, opt?: IOption): any;
    getRoleMember(role: string, index: BigNumber, opt?: IOption): any;
    getRoleMemberCount(role: string, opt?: IOption): any;
    grantRole(role: string, account: string, opt?: IOption): Promise<any>;
    hasRole(role: string, account: string, opt?: IOption): any;
    isRelayer(relayer: string, opt?: IOption): any;
    paused(opt?: IOption): any;
    renounceAdmin(newAdmin: string, opt?: IOption): Promise<any>;
    renounceRole(role: string, account: string, opt?: IOption): Promise<any>;
    revokeRole(role: string, account: string, opt?: IOption): Promise<any>;
    transferFunds(addrs: string[], amounts: BigNumber[], opt?: IOption): Promise<any>;
    voteProposal(chainID: number | BigNumber, depositNonce: BigNumber, resourceID: string, dataHash: string, opt?: IOption): Promise<any>;
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
}
