import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ERC1155Abi from '../abis/ERC1155.json'


export class ERC1155Contract extends ContractAbstract {
    public static contractName = 'ERC1155Contract';
		Abi = ERC1155Abi 
		constructor(props: any) {
			super(props)
		}
	  public DEFAULT_ADMIN_ROLE(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.DEFAULT_ADMIN_ROLE()

		};
	  public MINTER_ROLE(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.MINTER_ROLE()

		};
	  public PAUSER_ROLE(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.PAUSER_ROLE()

		};
	  public balanceOf(account:string,id:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.balanceOf(account,id)

		};
	  public balanceOfBatch(accounts:string[],ids:BigNumber[],opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.balanceOfBatch(accounts,ids)

		};
	  public async burn(account:string,id:BigNumber,value:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.burn(account,id,value,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.burn(account,id,value,options)

		};
	  public async burnBatch(account:string,ids:BigNumber[],values:BigNumber[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.burnBatch(account,ids,values,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.burnBatch(account,ids,values,options)

		};
	  public getRoleAdmin(role:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getRoleAdmin(role)

		};
	  public getRoleMember(role:string,index:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getRoleMember(role,index)

		};
	  public getRoleMemberCount(role:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getRoleMemberCount(role)

		};
	  public async grantRole(role:string,account:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.grantRole(role,account,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.grantRole(role,account,options)

		};
	  public hasRole(role:string,account:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.hasRole(role,account)

		};
	  public isApprovedForAll(account:string,operator:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.isApprovedForAll(account,operator)

		};
	  public async mint(to:string,id:BigNumber,amount:BigNumber,data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.mint(to,id,amount,data,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.mint(to,id,amount,data,options)

		};
	  public async mintBatch(to:string,ids:BigNumber[],amounts:BigNumber[],data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.mintBatch(to,ids,amounts,data,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.mintBatch(to,ids,amounts,data,options)

		};
	  public async pause(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.pause(_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.pause(options)

		};
	  public paused(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.paused()

		};
	  public async renounceRole(role:string,account:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.renounceRole(role,account,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.renounceRole(role,account,options)

		};
	  public async revokeRole(role:string,account:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.revokeRole(role,account,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.revokeRole(role,account,options)

		};
	  public async safeBatchTransferFrom(from:string,to:string,ids:BigNumber[],amounts:BigNumber[],data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.safeBatchTransferFrom(from,to,ids,amounts,data,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.safeBatchTransferFrom(from,to,ids,amounts,data,options)

		};
	  public async safeTransferFrom(from:string,to:string,id:BigNumber,amount:BigNumber,data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.safeTransferFrom(from,to,id,amount,data,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.safeTransferFrom(from,to,id,amount,data,options)

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
	  public supportsInterface(interfaceId:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.supportsInterface(interfaceId)

		};
	  public async unpause(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.unpause(_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.unpause(options)

		};
	  public uri(index_0:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.uri(index_0)

		};
}

