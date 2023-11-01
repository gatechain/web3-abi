import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class SpotMainContract extends ContractAbstract {
    static contractName: string;
    Abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
    allSerialNumbers(index_0: BigNumber, opt?: IOption): any;
    blacklist(_account: string, opt?: IOption): Promise<any>;
    blacklisted(index_0: string, opt?: IOption): any;
    bridgeAddress(opt?: IOption): any;
    deposit(user: string, token: string, amount: BigNumber, opt?: IOption): Promise<any>;
    enableProof(opt?: IOption): any;
    exitNullifierMap(index_0: number | BigNumber, index_1: BigNumber, opt?: IOption): any;
    exitRootsMap(index_0: number | BigNumber, opt?: IOption): any;
    feeAccId(opt?: IOption): any;
    forgeBatch(newStRoot: BigNumber, newExitRoot: BigNumber, txsData: string, newOrders: string, newAccounts: string, serialNums: BigNumber[], verifierIdx: number | BigNumber, proof: BigNumber[], opt?: IOption): Promise<any>;
    genesisBlock(opt?: IOption): any;
    getChainId(opt?: IOption): any;
    getDepositBalance(user: string, token: string, opt?: IOption): any;
    getHash(user: string, tokenId: BigNumber, amount: BigNumber, babyPubKey: BigNumber, opt?: IOption): any;
    getInput(newStRoot: BigNumber, newExitRoot: BigNumber, l1L2TxsData: string, verifierIdx: number | BigNumber, opt?: IOption): any;
    idxMap(index_0: BigNumber, opt?: IOption): any;
    init(_owner: string, _verifiers: string[], _verifiersParams: BigNumber[], _poseidonElements: string[], opt?: IOption): Promise<any>;
    initSpot(_verifiers: string[], _verifiersParams: BigNumber[], _poseidonElements: string[], opt?: IOption): Promise<any>;
    insAccId(opt?: IOption): any;
    l1L2TxsDataHashMap(index_0: number | BigNumber, opt?: IOption): any;
    lastForgedBatch(opt?: IOption): any;
    oldUsers(index_0: string, opt?: IOption): any;
    operator(opt?: IOption): any;
    owner(opt?: IOption): any;
    pause(opt?: IOption): Promise<any>;
    paused(opt?: IOption): any;
    renounceOwnership(opt?: IOption): Promise<any>;
    rollupVerifiers(index_0: BigNumber, opt?: IOption): any;
    rollupVerifiersLength(opt?: IOption): any;
    setBridgeAddress(adr: string, opt?: IOption): Promise<any>;
    setFeeAccId(_feeAccId: BigNumber, opt?: IOption): Promise<any>;
    setOperator(_operator: string, opt?: IOption): Promise<any>;
    setTokenMap(token: string, tokenId: BigNumber, opt?: IOption): Promise<any>;
    stateRootMap(index_0: number | BigNumber, opt?: IOption): any;
    supportedTokens(index_0: string, opt?: IOption): any;
    toggleProofVerify(opt?: IOption): Promise<any>;
    tokenMap(index_0: BigNumber, opt?: IOption): any;
    transferOwnership(newOwner: string, opt?: IOption): Promise<any>;
    unBlacklist(_account: string, opt?: IOption): Promise<any>;
    unpause(opt?: IOption): Promise<any>;
    updateVerifier(idx: BigNumber, verifier: string, maxTx: BigNumber, nLevels: BigNumber, opt?: IOption): Promise<any>;
    withdrawMerkleProof(token: string, amount: BigNumber, babyPubKey: BigNumber, numExitRoot: number | BigNumber, siblings: BigNumber[], userIdx: BigNumber, destinationChainID: number | BigNumber, resourceID: string, data: string, opt?: IOption): Promise<any>;
    withdrawSerialNumbers(index_0: number | BigNumber, index_1: BigNumber, index_2: BigNumber, opt?: IOption): any;
}
