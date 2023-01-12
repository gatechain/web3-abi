import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class NftExchangeContract extends ContractAbstract {
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
        inputs: {
            name: string;
            type: string;
        }[];
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
    tokenTransferProxy(opt?: IOption): any;
    staticCall(target: string, calldata: string, extradata: string, opt?: IOption): any;
    changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee: BigNumber, opt?: IOption): Promise<any>;
    changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee: BigNumber, opt?: IOption): Promise<any>;
    guardedArrayReplace(array: string, desired: string, mask: string, opt?: IOption): Promise<any>;
    minimumTakerProtocolFee(opt?: IOption): any;
    codename(opt?: IOption): any;
    testCopyAddress(addr: string, opt?: IOption): Promise<any>;
    testCopy(arrToCopy: string, opt?: IOption): Promise<any>;
    calculateCurrentPrice_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, opt?: IOption): any;
    changeProtocolFeeRecipient(newProtocolFeeRecipient: string, opt?: IOption): Promise<any>;
    version(opt?: IOption): any;
    orderCalldataCanMatch(buyCalldata: string, buyReplacementPattern: string, sellCalldata: string, sellReplacementPattern: string, opt?: IOption): Promise<any>;
    validateOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, v: number | BigNumber, r: string, s: string, opt?: IOption): any;
    calculateFinalPrice(side: number | BigNumber, saleKind: number | BigNumber, basePrice: BigNumber, extra: BigNumber, listingTime: BigNumber, expirationTime: BigNumber, opt?: IOption): any;
    protocolFeeRecipient(opt?: IOption): any;
    renounceOwnership(opt?: IOption): Promise<any>;
    hashOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, opt?: IOption): Promise<any>;
    ordersCanMatch_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string, opt?: IOption): any;
    approveOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, orderbookInclusionDesired: boolean, opt?: IOption): Promise<any>;
    registry(opt?: IOption): any;
    minimumMakerProtocolFee(opt?: IOption): any;
    hashToSign_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, opt?: IOption): Promise<any>;
    cancelledOrFinalized(index_0: string, opt?: IOption): any;
    owner(opt?: IOption): any;
    exchangeToken(opt?: IOption): any;
    cancelOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    atomicMatch_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string, vs: Array<number | BigNumber>, rssMetadata: string[], opt?: IOption): Promise<any>;
    validateOrderParameters_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, opt?: IOption): any;
    INVERSE_BASIS_POINT(opt?: IOption): any;
    calculateMatchPrice_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string, opt?: IOption): any;
    approvedOrders(index_0: string, opt?: IOption): any;
    transferOwnership(newOwner: string, opt?: IOption): Promise<any>;
}
