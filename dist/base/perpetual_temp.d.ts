import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class PerpetualTempContract extends ContractAbstract {
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
    blacklist(_account: string, opt?: IOption): Promise<any>;
    blacklisted(index_0: string, opt?: IOption): any;
    bridge(opt?: IOption): any;
    deposit(user: string, amount: BigNumber, opt?: IOption): Promise<any>;
    enableProof(opt?: IOption): any;
    exitNullifierMap(index_0: number | BigNumber, index_1: BigNumber, opt?: IOption): any;
    exitRootsMap(index_0: number | BigNumber, opt?: IOption): any;
    feeAccId(opt?: IOption): any;
    forgeBatch(newStRoot: BigNumber, newExitRoot: BigNumber, txsData: string, newOrders: string, newAccounts: string, serialNums: BigNumber[], verifierIdx: number | BigNumber, proof: BigNumber[], opt?: IOption): Promise<any>;
    genesisBlock(opt?: IOption): any;
    getChainId(opt?: IOption): Promise<any>;
    getDepositBalance(user: string, opt?: IOption): any;
    getDepositToken(opt?: IOption): any;
    getHash(user: string, amount: BigNumber, babyPubKey: BigNumber, opt?: IOption): any;
    getInput(newStRoot: BigNumber, newExitRoot: BigNumber, l1L2TxsData: string, verifierIdx: number | BigNumber, opt?: IOption): any;
    idxMap(index_0: BigNumber, opt?: IOption): any;
    init(_owner: string, _depositToken: string, _verifiers: string[], _verifiersParams: BigNumber[], _withdrawVerifier: string, _poseidonElements: string[], opt?: IOption): Promise<any>;
    initPerp(_verifiers: string[], _verifiersParams: BigNumber[], _withdrawVerifier: string, _poseidonElements: string[], opt?: IOption): Promise<any>;
    insAccId(opt?: IOption): any;
    l1L2TxsDataHashMap(index_0: number | BigNumber, opt?: IOption): any;
    lastForgedBatch(opt?: IOption): any;
    oldUsers(index_0: string, opt?: IOption): any;
    operator(opt?: IOption): any;
    owner(opt?: IOption): any;
    pause(opt?: IOption): Promise<any>;
    paused(opt?: IOption): any;
    pendingWithdrawalTotal(index_0: string, opt?: IOption): any;
    renounceOwnership(opt?: IOption): Promise<any>;
    rollupVerifiers(index_0: BigNumber, opt?: IOption): any;
    rollupVerifiersLength(opt?: IOption): any;
    setBridge(_bridge: string, opt?: IOption): Promise<any>;
    setDepositToken(_depositToken: string, opt?: IOption): Promise<any>;
    setFeeAccId(_feeAccId: BigNumber, opt?: IOption): Promise<any>;
    setInsAccId(_insAccId: BigNumber, opt?: IOption): Promise<any>;
    setOperator(_operator: string, opt?: IOption): Promise<any>;
    stateRootMap(index_0: number | BigNumber, opt?: IOption): any;
    toggleProofVerify(opt?: IOption): Promise<any>;
    transferOwnership(newOwner: string, opt?: IOption): Promise<any>;
    unBlacklist(_account: string, opt?: IOption): Promise<any>;
    unpause(opt?: IOption): Promise<any>;
    updateVerifier(idx: BigNumber, verifier: string, maxTx: BigNumber, nLevels: BigNumber, opt?: IOption): Promise<any>;
    withdrawCircuit(proofA: BigNumber[], proofB: BigNumber[][], proofC: BigNumber[], amount: BigNumber, numExitRoot: number | BigNumber, idx: BigNumber, opt?: IOption): Promise<any>;
    withdrawMerkleProof(amount: BigNumber, babyPubKey: BigNumber, numExitRoot: number | BigNumber, siblings: BigNumber[], idx: BigNumber, opt?: IOption): Promise<any>;
    withdrawMerkleProofTemp(amount: BigNumber, babyPubKey: BigNumber, numExitRoot: number | BigNumber, siblings: BigNumber[], idx: BigNumber, destinationChainID: number | BigNumber, resourceID: string, opt?: IOption): Promise<any>;
    withdrawSerialNumbers(index_0: number | BigNumber, index_1: BigNumber, index_2: BigNumber, opt?: IOption): any;
    withdrawVerifier(opt?: IOption): any;
}
