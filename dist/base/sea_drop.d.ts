import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class SeaDropContract extends ContractAbstract {
    static contractName: string;
    constructor(props: any);
    getAllowListMerkleRoot(nftContract: string, opt?: IOption): any;
    getAllowedFeeRecipients(nftContract: string, opt?: IOption): any;
    getAllowedNftTokenIdIsRedeemed(nftContract: string, allowedNftToken: string, allowedNftTokenId: BigNumber, opt?: IOption): any;
    getCreatorPayoutAddress(nftContract: string, opt?: IOption): any;
    getFeeRecipientIsAllowed(nftContract: string, feeRecipient: string, opt?: IOption): any;
    getPayerIsAllowed(nftContract: string, payer: string, opt?: IOption): any;
    getPayers(nftContract: string, opt?: IOption): any;
    getPublicDrop(nftContract: string, opt?: IOption): any;
    getSignedMintValidationParams(nftContract: string, signer: string, opt?: IOption): any;
    getSigners(nftContract: string, opt?: IOption): any;
    getTokenGatedAllowedTokens(nftContract: string, opt?: IOption): any;
    getTokenGatedDrop(nftContract: string, allowedNftToken: string, opt?: IOption): any;
    mintAllowList(nftContract: string, feeRecipient: string, minterIfNotPayer: string, quantity: BigNumber, mintParams: {
        mintPrice: BigNumber;
        maxTotalMintableByWallet: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        dropStageIndex: BigNumber;
        maxTokenSupplyForStage: BigNumber;
        feeBps: BigNumber;
        restrictFeeRecipients: boolean;
    }, proof: string[], opt?: IOption): Promise<any>;
    mintAllowedTokenHolder(nftContract: string, feeRecipient: string, minterIfNotPayer: string, mintParams: {
        allowedNftToken: string;
        allowedNftTokenIds: BigNumber[];
    }, opt?: IOption): Promise<any>;
    mintPublic(nftContract: string, feeRecipient: string, minterIfNotPayer: string, quantity: BigNumber, opt?: IOption): Promise<any>;
    mintSigned(nftContract: string, feeRecipient: string, minterIfNotPayer: string, quantity: BigNumber, mintParams: {
        mintPrice: BigNumber;
        maxTotalMintableByWallet: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        dropStageIndex: BigNumber;
        maxTokenSupplyForStage: BigNumber;
        feeBps: BigNumber;
        restrictFeeRecipients: boolean;
    }, salt: BigNumber, signature: string, opt?: IOption): Promise<any>;
    updateAllowList(allowListData: {
        merkleRoot: string;
        publicKeyURIs: string[];
        allowListURI: string;
    }, opt?: IOption): Promise<any>;
    updateAllowedFeeRecipient(feeRecipient: string, allowed: boolean, opt?: IOption): Promise<any>;
    updateCreatorPayoutAddress(_payoutAddress: string, opt?: IOption): Promise<any>;
    updateDropURI(dropURI: string, opt?: IOption): Promise<any>;
    updatePayer(payer: string, allowed: boolean, opt?: IOption): Promise<any>;
    updatePublicDrop(publicDrop: {
        mintPrice: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        maxTotalMintableByWallet: number | BigNumber;
        feeBps: number | BigNumber;
        restrictFeeRecipients: boolean;
    }, opt?: IOption): Promise<any>;
    updateSignedMintValidationParams(signer: string, signedMintValidationParams: {
        minMintPrice: BigNumber;
        maxMaxTotalMintableByWallet: BigNumber;
        minStartTime: BigNumber;
        maxEndTime: BigNumber;
        maxMaxTokenSupplyForStage: BigNumber;
        minFeeBps: number | BigNumber;
        maxFeeBps: number | BigNumber;
    }, opt?: IOption): Promise<any>;
    updateTokenGatedDrop(allowedNftToken: string, dropStage: {
        mintPrice: BigNumber;
        maxTotalMintableByWallet: number | BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        dropStageIndex: number | BigNumber;
        maxTokenSupplyForStage: number | BigNumber;
        feeBps: number | BigNumber;
        restrictFeeRecipients: boolean;
    }, opt?: IOption): Promise<any>;
    Abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
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
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
}
