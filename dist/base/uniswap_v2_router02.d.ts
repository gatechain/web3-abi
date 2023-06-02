import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class UniswapV2Router02Contract extends ContractAbstract {
    static contractName: string;
    constructor(props: any);
    WETH(opt?: IOption): any;
    addLiquidity(tokenA: string, tokenB: string, amountADesired: BigNumber, amountBDesired: BigNumber, amountAMin: BigNumber, amountBMin: BigNumber, to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    addLiquidityETH(token: string, amountTokenDesired: BigNumber, amountTokenMin: BigNumber, amountETHMin: BigNumber, to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    factory(opt?: IOption): any;
    getAmountIn(amountOut: BigNumber, reserveIn: BigNumber, reserveOut: BigNumber, opt?: IOption): Promise<any>;
    getAmountOut(amountIn: BigNumber, reserveIn: BigNumber, reserveOut: BigNumber, opt?: IOption): Promise<any>;
    getAmountsIn(amountOut: BigNumber, path: string[], opt?: IOption): any;
    getAmountsOut(amountIn: BigNumber, path: string[], opt?: IOption): any;
    quote(amountA: BigNumber, reserveA: BigNumber, reserveB: BigNumber, opt?: IOption): Promise<any>;
    removeLiquidity(tokenA: string, tokenB: string, liquidity: BigNumber, amountAMin: BigNumber, amountBMin: BigNumber, to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    removeLiquidityETH(token: string, liquidity: BigNumber, amountTokenMin: BigNumber, amountETHMin: BigNumber, to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    removeLiquidityETHSupportingFeeOnTransferTokens(token: string, liquidity: BigNumber, amountTokenMin: BigNumber, amountETHMin: BigNumber, to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    removeLiquidityETHWithPermit(token: string, liquidity: BigNumber, amountTokenMin: BigNumber, amountETHMin: BigNumber, to: string, deadline: BigNumber, approveMax: boolean, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, liquidity: BigNumber, amountTokenMin: BigNumber, amountETHMin: BigNumber, to: string, deadline: BigNumber, approveMax: boolean, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: BigNumber, amountAMin: BigNumber, amountBMin: BigNumber, to: string, deadline: BigNumber, approveMax: boolean, v: number | BigNumber, r: string, s: string, opt?: IOption): Promise<any>;
    swapETHForExactTokens(amountOut: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    swapExactETHForTokens(amountOutMin: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    swapExactTokensForETH(amountIn: BigNumber, amountOutMin: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumber, amountOutMin: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    swapExactTokensForTokens(amountIn: BigNumber, amountOutMin: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumber, amountOutMin: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    swapTokensForExactETH(amountOut: BigNumber, amountInMax: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
    swapTokensForExactTokens(amountOut: BigNumber, amountInMax: BigNumber, path: string[], to: string, deadline: BigNumber, opt?: IOption): Promise<any>;
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
}
