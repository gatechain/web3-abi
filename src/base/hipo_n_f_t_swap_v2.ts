import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import HipoNFTSwapV2Abi from '../abis/HipoNFTSwapV2.json'


export class HipoNFTSwapV2Contract extends ContractAbstract {
    public static contractName = 'HipoNFTSwapV2Contract';
		Abi = HipoNFTSwapV2Abi 
		constructor(props: any) {
			super(props)
		}
	  public async approveERC20(token:string,operator:string,amount:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.approveERC20(token,operator,amount,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.approveERC20(token,operator,amount,options)

		};
	  public async batchBuyWithERC20s(erc20Pairs:Array<{token: string;amount: BigNumber}>,tradeBytes:string,dustTokens:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.batchBuyWithERC20s(erc20Pairs,tradeBytes,dustTokens,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.batchBuyWithERC20s(erc20Pairs,tradeBytes,dustTokens,options)

		};
	  public async batchBuyWithETH(tradeBytes:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.batchBuyWithETH(tradeBytes,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.batchBuyWithETH(tradeBytes,options)

		};
	  public async onERC1155BatchReceived(index_0:string,index_1:string,index_2:BigNumber[],index_3:BigNumber[],index_4:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.onERC1155BatchReceived(index_0,index_1,index_2,index_3,index_4,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.onERC1155BatchReceived(index_0,index_1,index_2,index_3,index_4,options)

		};
	  public async onERC1155Received(index_0:string,index_1:string,index_2:BigNumber,index_3:BigNumber,index_4:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.onERC1155Received(index_0,index_1,index_2,index_3,index_4,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.onERC1155Received(index_0,index_1,index_2,index_3,index_4,options)

		};
	  public async onERC721Received1(index_0:string,index_1:string,index_2:BigNumber,index_3:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.onERC721Received1(index_0,index_1,index_2,index_3,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.onERC721Received1(index_0,index_1,index_2,index_3,options)

		};
	  public async onERC721Received2(index_0:string,index_1:BigNumber,index_2:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.onERC721Received2(index_0,index_1,index_2,_opt)

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
			const gasLimit = await __signer.estimateGas.registerFeature(feature,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.registerFeature(feature,options)

		};
	  public async registerFeatures(features:Array<{feature: string;name: string;methods: Array<{methodID: string;methodName: string}>}>,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.registerFeatures(features,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.registerFeatures(features,options)

		};
	  public async rescueERC20(asset:string,recipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.rescueERC20(asset,recipient,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.rescueERC20(asset,recipient,options)

		};
	  public async rescueERC721(asset:string,ids:BigNumber[],recipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.rescueERC721(asset,ids,recipient,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.rescueERC721(asset,ids,recipient,options)

		};
	  public async rescueETH(recipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.rescueETH(recipient,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.rescueETH(recipient,options)

		};
	  public async supportsInterface(interfaceId:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.supportsInterface(interfaceId,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.supportsInterface(interfaceId,options)

		};
	  public async transferOwnership(newOwner:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.transferOwnership(newOwner,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.transferOwnership(newOwner,options)

		};
	  public async unregister(methodIDs:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await __signer.estimateGas.unregister(methodIDs,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return __signer.unregister(methodIDs,options)

		};
}

