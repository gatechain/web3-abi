import ContractAbstract from "web3-contract/dist/contract/ContractAbstract.js";
type BigNumber = any;
interface IOption {
    gasLimit?: Number;
    from?: string;
    value?: string;
}
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
    tokenTransferProxy(): any;
    staticCall(target: string, calldata: string, extradata: string): any;
    changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee: BigNumber, opt?: IOption): Promise<any>;
    changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee: BigNumber, opt?: IOption): Promise<any>;
    guardedArrayReplace(array: string, desired: string, mask: string, opt?: IOption): Promise<any>;
    minimumTakerProtocolFee(): any;
    codename(): any;
    testCopyAddress(addr: string, opt?: IOption): Promise<any>;
    testCopy(arrToCopy: string, opt?: IOption): Promise<any>;
    calculateCurrentPrice_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string): any;
    changeProtocolFeeRecipient(newProtocolFeeRecipient: string, opt?: IOption): Promise<any>;
    version(): any;
    orderCalldataCanMatch(buyCalldata: string, buyReplacementPattern: string, sellCalldata: string, sellReplacementPattern: string, opt?: IOption): Promise<any>;
    validateOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, v: number | BigNumber, r: string, s: string): any;
    calculateFinalPrice(side: number | BigNumber, saleKind: number | BigNumber, basePrice: BigNumber, extra: BigNumber, listingTime: BigNumber, expirationTime: BigNumber): any;
    protocolFeeRecipient(): any;
    renounceOwnership(opt?: IOption): Promise<any>;
    hashOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, opt?: IOption): Promise<any>;
    ordersCanMatch_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string): any;
    approveOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, orderbookInclusionDesired: boolean, opt?: IOption): Promise<any>;
    registry(): any;
    minimumMakerProtocolFee(): any;
    hashToSign_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, opt?: IOption): Promise<any>;
    cancelledOrFinalized(index_0: string): any;
    owner(): any;
    exchangeToken(): any;
    cancelOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    atomicMatch_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string, vs: Array<number | BigNumber>, rssMetadata: string[], opt?: IOption): Promise<any>;
    validateOrderParameters_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string): any;
    INVERSE_BASIS_POINT(): any;
    calculateMatchPrice_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string): any;
    approvedOrders(index_0: string): any;
    transferOwnership(newOwner: string, opt?: IOption): Promise<any>;
}
export {};
