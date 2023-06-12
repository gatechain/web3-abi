import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ABI from "../abis/UniswapV3SwapRouter.json"

export class UniswapV3SwapRouterContract extends ContractAbstract {
    public static contractName = 'UniswapV3SwapRouterContract';
		Abi = ABI 
		constructor(props: any) {
			super(props)
		}
	  public WETH9(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.WETH9()

		};
	  public async exactInput(params:{path: string;recipient: string;deadline: BigNumber;amountIn: BigNumber;amountOutMinimum: BigNumber},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.exactInput(params,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.exactInput(params,options)

		};
	  public async exactInputSingle(params:{tokenIn: string;tokenOut: string;fee: BigNumber;recipient: string;deadline: BigNumber;amountIn: BigNumber;amountOutMinimum: BigNumber;sqrtPriceLimitX96: BigNumber},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.exactInputSingle(params,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.exactInputSingle(params,options)

		};
	  public async exactOutput(params:{path: string;recipient: string;deadline: BigNumber;amountOut: BigNumber;amountInMaximum: BigNumber},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.exactOutput(params,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.exactOutput(params,options)

		};
	  public async exactOutputSingle(params:{tokenIn: string;tokenOut: string;fee: BigNumber;recipient: string;deadline: BigNumber;amountOut: BigNumber;amountInMaximum: BigNumber;sqrtPriceLimitX96: BigNumber},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.exactOutputSingle(params,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.exactOutputSingle(params,options)

		};
	  public factory(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.factory()

		};
	  public async multicall(data:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.multicall(data,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.multicall(data,options)

		};
	  public async refundETH(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.refundETH(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.refundETH(options)

		};
	  public async selfPermit(token:string,value:BigNumber,deadline:BigNumber,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.selfPermit(token,value,deadline,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.selfPermit(token,value,deadline,v,r,s,options)

		};
	  public async selfPermitAllowed(token:string,nonce:BigNumber,expiry:BigNumber,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.selfPermitAllowed(token,nonce,expiry,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.selfPermitAllowed(token,nonce,expiry,v,r,s,options)

		};
	  public async selfPermitAllowedIfNecessary(token:string,nonce:BigNumber,expiry:BigNumber,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.selfPermitAllowedIfNecessary(token,nonce,expiry,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.selfPermitAllowedIfNecessary(token,nonce,expiry,v,r,s,options)

		};
	  public async selfPermitIfNecessary(token:string,value:BigNumber,deadline:BigNumber,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.selfPermitIfNecessary(token,value,deadline,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.selfPermitIfNecessary(token,value,deadline,v,r,s,options)

		};
	  public async sweepToken(token:string,amountMinimum:BigNumber,recipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.sweepToken(token,amountMinimum,recipient,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.sweepToken(token,amountMinimum,recipient,options)

		};
	  public async sweepTokenWithFee(token:string,amountMinimum:BigNumber,recipient:string,feeBips:BigNumber,feeRecipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.sweepTokenWithFee(token,amountMinimum,recipient,feeBips,feeRecipient,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.sweepTokenWithFee(token,amountMinimum,recipient,feeBips,feeRecipient,options)

		};
	  public async uniswapV3SwapCallback(amount0Delta:BigNumber,amount1Delta:BigNumber,_data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.uniswapV3SwapCallback(amount0Delta,amount1Delta,_data,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.uniswapV3SwapCallback(amount0Delta,amount1Delta,_data,options)

		};
	  public async unwrapWETH9(amountMinimum:BigNumber,recipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.unwrapWETH9(amountMinimum,recipient,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.unwrapWETH9(amountMinimum,recipient,options)

		};
	  public async unwrapWETH9WithFee(amountMinimum:BigNumber,recipient:string,feeBips:BigNumber,feeRecipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.unwrapWETH9WithFee(amountMinimum,recipient,feeBips,feeRecipient,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.unwrapWETH9WithFee(amountMinimum,recipient,feeBips,feeRecipient,options)

		};
}

