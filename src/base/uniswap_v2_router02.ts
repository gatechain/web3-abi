import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ABI from "../abis/UniswapV2Router02.json"

export class UniswapV2Router02Contract extends ContractAbstract {
    public static contractName = 'UniswapV2Router02Contract';
		Abi = ABI 
		constructor(props: any) {
			super(props)
		}
	  public WETH(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.WETH()

		};
	  public async addLiquidity(tokenA:string,tokenB:string,amountADesired:BigNumber,amountBDesired:BigNumber,amountAMin:BigNumber,amountBMin:BigNumber,to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.addLiquidity(tokenA,tokenB,amountADesired,amountBDesired,amountAMin,amountBMin,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.addLiquidity(tokenA,tokenB,amountADesired,amountBDesired,amountAMin,amountBMin,to,deadline,options)

		};
	  public async addLiquidityETH(token:string,amountTokenDesired:BigNumber,amountTokenMin:BigNumber,amountETHMin:BigNumber,to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.addLiquidityETH(token,amountTokenDesired,amountTokenMin,amountETHMin,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.addLiquidityETH(token,amountTokenDesired,amountTokenMin,amountETHMin,to,deadline,options)

		};
	  public factory(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.factory()

		};
	  public async getAmountIn(amountOut:BigNumber,reserveIn:BigNumber,reserveOut:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.getAmountIn(amountOut,reserveIn,reserveOut,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.getAmountIn(amountOut,reserveIn,reserveOut,options)

		};
	  public async getAmountOut(amountIn:BigNumber,reserveIn:BigNumber,reserveOut:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.getAmountOut(amountIn,reserveIn,reserveOut,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.getAmountOut(amountIn,reserveIn,reserveOut,options)

		};
	  public getAmountsIn(amountOut:BigNumber,path:string[],opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getAmountsIn(amountOut,path)

		};
	  public getAmountsOut(amountIn:BigNumber,path:string[],opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getAmountsOut(amountIn,path)

		};
	  public async quote(amountA:BigNumber,reserveA:BigNumber,reserveB:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.quote(amountA,reserveA,reserveB,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.quote(amountA,reserveA,reserveB,options)

		};
	  public async removeLiquidity(tokenA:string,tokenB:string,liquidity:BigNumber,amountAMin:BigNumber,amountBMin:BigNumber,to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.removeLiquidity(tokenA,tokenB,liquidity,amountAMin,amountBMin,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.removeLiquidity(tokenA,tokenB,liquidity,amountAMin,amountBMin,to,deadline,options)

		};
	  public async removeLiquidityETH(token:string,liquidity:BigNumber,amountTokenMin:BigNumber,amountETHMin:BigNumber,to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.removeLiquidityETH(token,liquidity,amountTokenMin,amountETHMin,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.removeLiquidityETH(token,liquidity,amountTokenMin,amountETHMin,to,deadline,options)

		};
	  public async removeLiquidityETHSupportingFeeOnTransferTokens(token:string,liquidity:BigNumber,amountTokenMin:BigNumber,amountETHMin:BigNumber,to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.removeLiquidityETHSupportingFeeOnTransferTokens(token,liquidity,amountTokenMin,amountETHMin,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.removeLiquidityETHSupportingFeeOnTransferTokens(token,liquidity,amountTokenMin,amountETHMin,to,deadline,options)

		};
	  public async removeLiquidityETHWithPermit(token:string,liquidity:BigNumber,amountTokenMin:BigNumber,amountETHMin:BigNumber,to:string,deadline:BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.removeLiquidityETHWithPermit(token,liquidity,amountTokenMin,amountETHMin,to,deadline,approveMax,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.removeLiquidityETHWithPermit(token,liquidity,amountTokenMin,amountETHMin,to,deadline,approveMax,v,r,s,options)

		};
	  public async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token:string,liquidity:BigNumber,amountTokenMin:BigNumber,amountETHMin:BigNumber,to:string,deadline:BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token,liquidity,amountTokenMin,amountETHMin,to,deadline,approveMax,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token,liquidity,amountTokenMin,amountETHMin,to,deadline,approveMax,v,r,s,options)

		};
	  public async removeLiquidityWithPermit(tokenA:string,tokenB:string,liquidity:BigNumber,amountAMin:BigNumber,amountBMin:BigNumber,to:string,deadline:BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.removeLiquidityWithPermit(tokenA,tokenB,liquidity,amountAMin,amountBMin,to,deadline,approveMax,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.removeLiquidityWithPermit(tokenA,tokenB,liquidity,amountAMin,amountBMin,to,deadline,approveMax,v,r,s,options)

		};
	  public async swapETHForExactTokens(amountOut:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapETHForExactTokens(amountOut,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapETHForExactTokens(amountOut,path,to,deadline,options)

		};
	  public async swapExactETHForTokens(amountOutMin:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapExactETHForTokens(amountOutMin,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapExactETHForTokens(amountOutMin,path,to,deadline,options)

		};
	  public async swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin,path,to,deadline,options)

		};
	  public async swapExactTokensForETH(amountIn:BigNumber,amountOutMin:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapExactTokensForETH(amountIn,amountOutMin,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapExactTokensForETH(amountIn,amountOutMin,path,to,deadline,options)

		};
	  public async swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn:BigNumber,amountOutMin:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn,amountOutMin,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn,amountOutMin,path,to,deadline,options)

		};
	  public async swapExactTokensForTokens(amountIn:BigNumber,amountOutMin:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapExactTokensForTokens(amountIn,amountOutMin,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapExactTokensForTokens(amountIn,amountOutMin,path,to,deadline,options)

		};
	  public async swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn:BigNumber,amountOutMin:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn,amountOutMin,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn,amountOutMin,path,to,deadline,options)

		};
	  public async swapTokensForExactETH(amountOut:BigNumber,amountInMax:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapTokensForExactETH(amountOut,amountInMax,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapTokensForExactETH(amountOut,amountInMax,path,to,deadline,options)

		};
	  public async swapTokensForExactTokens(amountOut:BigNumber,amountInMax:BigNumber,path:string[],to:string,deadline:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swapTokensForExactTokens(amountOut,amountInMax,path,to,deadline,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swapTokensForExactTokens(amountOut,amountInMax,path,to,deadline,options)

		};
}

