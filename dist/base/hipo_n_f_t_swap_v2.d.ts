import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class HipoNFTSwapV2Contract extends ContractAbstract {
    static contractName: string;
    constructor(props: any);
    approveERC20(token: string, operator: string, amount: BigNumber, opt?: IOption): Promise<any>;
    batchBuyWithERC20s(erc20Pairs: Array<{
        token: string;
        amount: BigNumber;
    }>, tradeBytes: string, dustTokens: string[], opt?: IOption): Promise<any>;
    batchBuyWithETH(tradeBytes: string, opt?: IOption): Promise<any>;
    onERC1155BatchReceived(index_0: string, index_1: string, index_2: BigNumber[], index_3: BigNumber[], index_4: string, opt?: IOption): Promise<any>;
    onERC1155Received(index_0: string, index_1: string, index_2: BigNumber, index_3: BigNumber, index_4: string, opt?: IOption): Promise<any>;
    onERC721Received1(index_0: string, index_1: string, index_2: BigNumber, index_3: string, opt?: IOption): Promise<any>;
    onERC721Received2(index_0: string, index_1: BigNumber, index_2: string, opt?: IOption): Promise<any>;
    owner(opt?: IOption): any;
    registerFeature(feature: {
        feature: string;
        name: string;
        methods: Array<{
            methodID: string;
            methodName: string;
        }>;
    }, opt?: IOption): Promise<any>;
    registerFeatures(features: Array<{
        feature: string;
        name: string;
        methods: Array<{
            methodID: string;
            methodName: string;
        }>;
    }>, opt?: IOption): Promise<any>;
    rescueERC20(asset: string, recipient: string, opt?: IOption): Promise<any>;
    rescueERC721(asset: string, ids: BigNumber[], recipient: string, opt?: IOption): Promise<any>;
    rescueETH(recipient: string, opt?: IOption): Promise<any>;
    supportsInterface(interfaceId: string, opt?: IOption): Promise<any>;
    transferOwnership(newOwner: string, opt?: IOption): Promise<any>;
    unregister(methodIDs: string[], opt?: IOption): Promise<any>;
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
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
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
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: ({
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
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
}
