import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ERC20Abi from '../abis/ERC20.json'


export class ERC20Contract extends ContractAbstract {
    public static contractName = 'ERC20Contract';
		Abi = ERC20Abi 
		constructor(props: any) {
			super(props)
		}
	  public DOMAIN_SEPARATOR(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.DOMAIN_SEPARATOR()

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
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.approve(spender,value,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.approve(spender,value,options)

		};
	  public balanceOf(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.balanceOf(index_0)

		};
	  public decimals(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.decimals()

		};
	  public nonces(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.nonces(index_0)

		};
	  public async permit(owner:string,spender:string,value:BigNumber,deadline:BigNumber,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.permit(owner,spender,value,deadline,v,r,s,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.permit(owner,spender,value,deadline,v,r,s,options)

		};
	  public symbol(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.symbol()

		};
	  public totalSupply(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.totalSupply()

		};
	  public async transfer(to:string,value:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.transfer(to,value,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transfer(to,value,options)

		};
	  public async transferFrom(from:string,to:string,value:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.transferFrom(from,to,value,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transferFrom(from,to,value,options)

		};
}

