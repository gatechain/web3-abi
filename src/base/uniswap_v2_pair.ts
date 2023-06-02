import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";

export class UniswapV2PairContract extends ContractAbstract {
    public static contractName = 'UniswapV2PairContract';
		constructor(props: any) {
			super(props)
		}
	  public DOMAIN_SEPARATOR(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.DOMAIN_SEPARATOR()

		};
	  public MINIMUM_LIQUIDITY(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.MINIMUM_LIQUIDITY()

		};
	  public PERMIT_TYPEHASH(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.PERMIT_TYPEHASH()

		};
	  public allowance(index_0:string,index_1:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.allowance(index_0,index_1)

		};
	  public async approve(spender:string,value:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.approve(spender,value,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.approve(spender,value,options)

		};
	  public balanceOf(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.balanceOf(index_0)

		};
	  public async burn(to:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.burn(to,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.burn(to,options)

		};
	  public decimals(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.decimals()

		};
	  public factory(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.factory()

		};
	  public getReserves(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getReserves()

		};
	  public async initialize(_token0:string,_token1:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.initialize(_token0,_token1,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.initialize(_token0,_token1,options)

		};
	  public kLast(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.kLast()

		};
	  public async mint(to:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.mint(to,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.mint(to,options)

		};
	  public nonces(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.nonces(index_0)

		};
	  public async permit(owner:string,spender:string,value:BigNumber,deadline:BigNumber,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.permit(owner,spender,value,deadline,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.permit(owner,spender,value,deadline,v,r,s,options)

		};
	  public price0CumulativeLast(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.price0CumulativeLast()

		};
	  public price1CumulativeLast(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.price1CumulativeLast()

		};
	  public async skim(to:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.skim(to,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.skim(to,options)

		};
	  public async swap(amount0Out:BigNumber,amount1Out:BigNumber,to:string,data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.swap(amount0Out,amount1Out,to,data,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.swap(amount0Out,amount1Out,to,data,options)

		};
	  public symbol(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.symbol()

		};
	  public async sync(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.sync(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.sync(options)

		};
	  public token0(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.token0()

		};
	  public token1(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.token1()

		};
	  public totalSupply(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.totalSupply()

		};
	  public async transfer(to:string,value:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.transfer(to,value,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.transfer(to,value,options)

		};
	  public async transferFrom(from:string,to:string,value:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.transferFrom(from,to,value,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.transferFrom(from,to,value,options)

		};
		Abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"index_0","type":"address"},{"internalType":"address","name":"index_1","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"index_0","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"index_0","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}] 
}

