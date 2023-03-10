import { HipoNFTSwapV2Contract } from "../base/hipo_n_f_t_swap_v2";
interface IGetTradeBytesParam {
    marketId: string;
    continueIfFailed: string;
    callData: string;
    value: string;
}
export declare class SelfHipoNFTSwapV2Contract extends HipoNFTSwapV2Contract {
    static contractName: string;
    constructor(props: any);
    getTradeBytes({ marketId, continueIfFailed, callData, value, }: IGetTradeBytesParam): string;
    formatEthValue(ethValue: string): string;
    formatCallData(callData: string): {
        lengthHex: string;
        callData: string;
    };
}
export {};
