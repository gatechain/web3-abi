import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class HipoCrossAndSwapContract extends ContractAbstract {
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
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
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
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    constructor(props: any);
    executeMessage2(_sender: string, _srcChainId: BigNumber, _message: string, _executor: string, opt?: IOption): Promise<any>;
    executeMessage1(_sender: string, _srcChainId: BigNumber, _message: string, _executor: string, opt?: IOption): Promise<any>;
    executeMessageWithTransfer(index_0: string, _token: string, _amount: BigNumber, _srcChainId: BigNumber, _message: string, index_5: string, opt?: IOption): Promise<any>;
    executeMessageWithTransferFallback(index_0: string, index_1: string, index_2: BigNumber, _srcChainId: BigNumber, _message: string, index_5: string, opt?: IOption): Promise<any>;
    executeMessageWithTransferRefund(_token: string, _amount: BigNumber, _message: string, _executor: string, opt?: IOption): Promise<any>;
    messageBus(opt?: IOption): any;
    minSwapAmounts(index_0: string, opt?: IOption): any;
    nativeWrap(opt?: IOption): any;
    ooSwap(opt?: IOption): any;
    outboundTransferTo(_from: string, _to: string, _data: string, opt?: IOption): Promise<any>;
    owner(opt?: IOption): any;
    rescueFunds(token: string, userAddress: string, amount: BigNumber, opt?: IOption): Promise<any>;
    setMessageBus(_messageBus: string, opt?: IOption): Promise<any>;
    setMinSwapAmount(_token: string, _minSwapAmount: BigNumber, opt?: IOption): Promise<any>;
    setNativeWrap(_nativeWrap: string, opt?: IOption): Promise<any>;
    setOOSwap(_ooSwap: string, opt?: IOption): Promise<any>;
    transferOwnership(newOwner: string, opt?: IOption): Promise<any>;
    transferWithSwap(_from: string, _tokenReceiver: string, _tws: {
        _receiver: string;
        _amountIn: BigNumber;
        _dstChainId: BigNumber;
        _nonce: BigNumber;
        _nativeIn: boolean;
        _nativeOut: boolean;
        _srcSwap: {
            path: string[];
            _srcSwapExtraData: string;
            _dstSwapExtraData: string;
        };
        _dstSwap: {
            path: string[];
            _srcSwapExtraData: string;
            _dstSwapExtraData: string;
        };
        _bridgeData: string;
    }, opt?: IOption): Promise<any>;
    transferWithSwapNative(_tokenReceiver: string, _tws: {
        _receiver: string;
        _amountIn: BigNumber;
        _dstChainId: BigNumber;
        _nonce: BigNumber;
        _nativeIn: boolean;
        _nativeOut: boolean;
        _srcSwap: {
            path: string[];
            _srcSwapExtraData: string;
            _dstSwapExtraData: string;
        };
        _dstSwap: {
            path: string[];
            _srcSwapExtraData: string;
            _dstSwapExtraData: string;
        };
        _bridgeData: string;
    }, opt?: IOption): Promise<any>;
    withdrewNative(opt?: IOption): Promise<any>;
}
