import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ERC721Abi from '../abis/ERC721.json'


export class ERC721Contract extends ContractAbstract {
    public static contractName = 'ERC721Contract';
		Abi = ERC721Abi 
		constructor(props: any) {
			super(props)
		}
	  public async approve(to:string,tokenId:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.approve(to,tokenId,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.approve(to,tokenId,options)

		};
	  public balanceOf(owner:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.balanceOf(owner)

		};
	  public getApproved(tokenId:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getApproved(tokenId)

		};
	  public getStage(_stage:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getStage(_stage)

		};
	  public getSystemAddress(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getSystemAddress()

		};
	  public hashToSign(sender:string,stage:BigNumber,quantity:BigNumber,price:BigNumber,max:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.hashToSign(sender,stage,quantity,price,max)

		};
	  public isApprovedForAll(owner:string,operator:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.isApprovedForAll(owner,operator)

		};
	  public nextOwnerToExplicitlySet(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.nextOwnerToExplicitlySet()

		};
	  public numberMinted(stage:number|BigNumber,owner:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.numberMinted(stage,owner)

		};
	  public owner(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.owner()

		};
	  public ownerOf(tokenId:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.ownerOf(tokenId)

		};
	  public async renounceOwnership(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.renounceOwnership(_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.renounceOwnership(options)

		};
	  public async safeTransferFrom1(from:string,to:string,tokenId:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.safeTransferFrom1(from,to,tokenId,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.safeTransferFrom1(from,to,tokenId,options)

		};
	  public async safeTransferFrom2(from:string,to:string,tokenId:BigNumber,_data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.safeTransferFrom2(from,to,tokenId,_data,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.safeTransferFrom2(from,to,tokenId,_data,options)

		};
	  public async saleMint(stage:BigNumber,quantity:BigNumber,price:BigNumber,max:BigNumber,hash:string,signature:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.saleMint(stage,quantity,price,max,hash,signature,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.saleMint(stage,quantity,price,max,hash,signature,options)

		};
	  public async setApprovalForAll(operator:string,approved:boolean,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.setApprovalForAll(operator,approved,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.setApprovalForAll(operator,approved,options)

		};
	  public async setStage(_stage:BigNumber,_startTime:BigNumber,_endTime:BigNumber,_price:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.setStage(_stage,_startTime,_endTime,_price,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.setStage(_stage,_startTime,_endTime,_price,options)

		};
	  public async setSystemAddress(_address:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.setSystemAddress(_address,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.setSystemAddress(_address,options)

		};
	  public supportsInterface(interfaceId:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.supportsInterface(interfaceId)

		};
	  public symbol(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.symbol()

		};
	  public tokenByIndex(index:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.tokenByIndex(index)

		};
	  public tokenOfOwnerByIndex(owner:string,index:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.tokenOfOwnerByIndex(owner,index)

		};
	  public tokenURI(tokenId:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.tokenURI(tokenId)

		};
	  public totalSupply(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.totalSupply()

		};
	  public async transferFrom(from:string,to:string,tokenId:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.transferFrom(from,to,tokenId,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transferFrom(from,to,tokenId,options)

		};
	  public async transferOwnership(newOwner:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.transferOwnership(newOwner,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transferOwnership(newOwner,options)

		};
}

