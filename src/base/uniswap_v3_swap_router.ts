import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";

export class UniswapV3SwapRouterContract extends ContractAbstract {
    public static contractName = 'UniswapV3SwapRouterContract';
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
		Abi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactInputParams","name":"params","type":"tuple"}],"name":"exactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactInputSingleParams","name":"params","type":"tuple"}],"name":"exactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactOutputParams","name":"params","type":"tuple"}],"name":"exactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactOutputSingleParams","name":"params","type":"tuple"}],"name":"exactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowed","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowedIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"sweepToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"sweepTokenWithFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"unwrapWETH9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"unwrapWETH9WithFee","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}] 
}

