import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class UniswapV3SwapRouterContract extends ContractAbstract {
    static contractName: string;
    Abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    constructor(props: any);
    WETH9(opt?: IOption): any;
    exactInput(params: {
        path: string;
        recipient: string;
        deadline: BigNumber;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
    }, opt?: IOption): Promise<any>;
    exactInputSingle(params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumber;
        recipient: string;
        deadline: BigNumber;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    }, opt?: IOption): Promise<any>;
    exactOutput(params: {
        path: string;
        recipient: string;
        deadline: BigNumber;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
    }, opt?: IOption): Promise<any>;
    exactOutputSingle(params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumber;
        recipient: string;
        deadline: BigNumber;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    }, opt?: IOption): Promise<any>;
    factory(opt?: IOption): any;
    multicall(data: string[], opt?: IOption): Promise<any>;
    refundETH(opt?: IOption): Promise<any>;
    selfPermit(token: string, value: BigNumber, deadline: BigNumber, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    selfPermitAllowed(token: string, nonce: BigNumber, expiry: BigNumber, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    selfPermitAllowedIfNecessary(token: string, nonce: BigNumber, expiry: BigNumber, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    selfPermitIfNecessary(token: string, value: BigNumber, deadline: BigNumber, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    sweepToken(token: string, amountMinimum: BigNumber, recipient: string, opt?: IOption): Promise<any>;
    sweepTokenWithFee(token: string, amountMinimum: BigNumber, recipient: string, feeBips: BigNumber, feeRecipient: string, opt?: IOption): Promise<any>;
    uniswapV3SwapCallback(amount0Delta: BigNumber, amount1Delta: BigNumber, _data: string, opt?: IOption): Promise<any>;
    unwrapWETH9(amountMinimum: BigNumber, recipient: string, opt?: IOption): Promise<any>;
    unwrapWETH9WithFee(amountMinimum: BigNumber, recipient: string, feeBips: BigNumber, feeRecipient: string, opt?: IOption): Promise<any>;
}
