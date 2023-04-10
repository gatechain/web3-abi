import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";

export class HipoNFTSwapV2Contract extends ContractAbstract {
    public static contractName = 'HipoNFTSwapV2Contract';
		constructor(props: any) {
			super(props)
		}
	  public async approveERC20(token:string,operator:string,amount:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.approveERC20(token,operator,amount,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.approveERC20(token,operator,amount,options)

		};
	  public async batchBuyWithERC20s(erc20Pairs:Array<{token: string;amount: BigNumber}>,tradeBytes:string,dustTokens:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.batchBuyWithERC20s(erc20Pairs,tradeBytes,dustTokens,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.batchBuyWithERC20s(erc20Pairs,tradeBytes,dustTokens,options)

		};
	  public async batchBuyWithETH(tradeBytes:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.batchBuyWithETH(tradeBytes,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.batchBuyWithETH(tradeBytes,options)

		};
	  public async onERC1155BatchReceived(index_0:string,index_1:string,index_2:BigNumber[],index_3:BigNumber[],index_4:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.onERC1155BatchReceived(index_0,index_1,index_2,index_3,index_4,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.onERC1155BatchReceived(index_0,index_1,index_2,index_3,index_4,options)

		};
	  public async onERC1155Received(index_0:string,index_1:string,index_2:BigNumber,index_3:BigNumber,index_4:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.onERC1155Received(index_0,index_1,index_2,index_3,index_4,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.onERC1155Received(index_0,index_1,index_2,index_3,index_4,options)

		};
	  public async onERC721Received1(index_0:string,index_1:string,index_2:BigNumber,index_3:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.onERC721Received1(index_0,index_1,index_2,index_3,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.onERC721Received1(index_0,index_1,index_2,index_3,options)

		};
	  public async onERC721Received2(index_0:string,index_1:BigNumber,index_2:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.onERC721Received2(index_0,index_1,index_2,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.onERC721Received2(index_0,index_1,index_2,options)

		};
	  public owner(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.owner()

		};
	  public async registerFeature(feature:{feature: string;name: string;methods: Array<{methodID: string;methodName: string}>},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.registerFeature(feature,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.registerFeature(feature,options)

		};
	  public async registerFeatures(features:Array<{feature: string;name: string;methods: Array<{methodID: string;methodName: string}>}>,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.registerFeatures(features,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.registerFeatures(features,options)

		};
	  public async rescueERC20(asset:string,recipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.rescueERC20(asset,recipient,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.rescueERC20(asset,recipient,options)

		};
	  public async rescueERC721(asset:string,ids:BigNumber[],recipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.rescueERC721(asset,ids,recipient,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.rescueERC721(asset,ids,recipient,options)

		};
	  public async rescueETH(recipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.rescueETH(recipient,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.rescueETH(recipient,options)

		};
	  public async supportsInterface(interfaceId:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.supportsInterface(interfaceId,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.supportsInterface(interfaceId,options)

		};
	  public async transferOwnership(newOwner:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.transferOwnership(newOwner,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.transferOwnership(newOwner,options)

		};
	  public async unregister(methodIDs:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.unregister(methodIDs,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.unregister(methodIDs,options)

		};
		Abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes4","name":"methodID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"oldFeature","type":"address"},{"indexed":false,"internalType":"address","name":"newFeature","type":"address"}],"name":"FeatureFunctionUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approveERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct IAggregator.ERC20Pair[]","name":"erc20Pairs","type":"tuple[]"},{"internalType":"bytes","name":"tradeBytes","type":"bytes"},{"internalType":"address[]","name":"dustTokens","type":"address[]"}],"name":"batchBuyWithERC20s","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"tradeBytes","type":"bytes"}],"name":"batchBuyWithETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"index_0","type":"address"},{"internalType":"address","name":"index_1","type":"address"},{"internalType":"uint256[]","name":"index_2","type":"uint256[]"},{"internalType":"uint256[]","name":"index_3","type":"uint256[]"},{"internalType":"bytes","name":"index_4","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"index_0","type":"address"},{"internalType":"address","name":"index_1","type":"address"},{"internalType":"uint256","name":"index_2","type":"uint256"},{"internalType":"uint256","name":"index_3","type":"uint256"},{"internalType":"bytes","name":"index_4","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"index_0","type":"address"},{"internalType":"address","name":"index_1","type":"address"},{"internalType":"uint256","name":"index_2","type":"uint256"},{"internalType":"bytes","name":"index_3","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"index_0","type":"address"},{"internalType":"uint256","name":"index_1","type":"uint256"},{"internalType":"bytes","name":"index_2","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"feature","type":"address"},{"internalType":"string","name":"name","type":"string"},{"components":[{"internalType":"bytes4","name":"methodID","type":"bytes4"},{"internalType":"string","name":"methodName","type":"string"}],"internalType":"struct HipoNFTSwapV2.Method[]","name":"methods","type":"tuple[]"}],"internalType":"struct HipoNFTSwapV2.Feature","name":"feature","type":"tuple"}],"name":"registerFeature","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"feature","type":"address"},{"internalType":"string","name":"name","type":"string"},{"components":[{"internalType":"bytes4","name":"methodID","type":"bytes4"},{"internalType":"string","name":"methodName","type":"string"}],"internalType":"struct HipoNFTSwapV2.Method[]","name":"methods","type":"tuple[]"}],"internalType":"struct HipoNFTSwapV2.Feature[]","name":"features","type":"tuple[]"}],"name":"registerFeatures","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"recipient","type":"address"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"address","name":"recipient","type":"address"}],"name":"rescueERC721","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"rescueETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4[]","name":"methodIDs","type":"bytes4[]"}],"name":"unregister","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}] 
}

