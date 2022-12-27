import ContractAbstract from "hipo-contract/dist/contract/ContractAbstract.js";
import ERC20Abi from '../abis/ERC20.json'

type BigNumber = any 
interface IOption {
	gasLimit?: Number
	from?: string 
	value?: string 
} 

export class ERC20Contract extends ContractAbstract {
    public static contractName = 'ERC20Contract';
		Abi = ERC20Abi 
		constructor(props: any) {
			super(props)
		}
	  public DOMAIN_SEPARATOR(){

			const provider = this.getContractProvider(this.address)
			return provider.DOMAIN_SEPARATOR()

		};
	  public PERMIT_TYPEHASH(){

			const provider = this.getContractProvider(this.address)
			return provider.PERMIT_TYPEHASH()

		};
	  public allowance(index_0:string,index_1:string){

			const provider = this.getContractProvider(this.address)
			return provider.allowance(index_0,index_1)

		};
	  public async approve(spender:string,value:BigNumber,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const gasLimit = await signer.estimateGas.approve(spender,value)

			const options = Object.assign({
				gasLimit
			}, opt)
			return signer.approve(spender,value,options)

		};
	  public balanceOf(index_0:string){

			const provider = this.getContractProvider(this.address)
			return provider.balanceOf(index_0)

		};
	  public decimals(){

			const provider = this.getContractProvider(this.address)
			return provider.decimals()

		};
	  public nonces(index_0:string){

			const provider = this.getContractProvider(this.address)
			return provider.nonces(index_0)

		};
	  public async permit(owner:string,spender:string,value:BigNumber,deadline:BigNumber,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const gasLimit = await signer.estimateGas.permit(owner,spender,value,deadline,v,r,s)

			const options = Object.assign({
				gasLimit
			}, opt)
			return signer.permit(owner,spender,value,deadline,v,r,s,options)

		};
	  public symbol(){

			const provider = this.getContractProvider(this.address)
			return provider.symbol()

		};
	  public totalSupply(){

			const provider = this.getContractProvider(this.address)
			return provider.totalSupply()

		};
	  public async transfer(to:string,value:BigNumber,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const gasLimit = await signer.estimateGas.transfer(to,value)

			const options = Object.assign({
				gasLimit
			}, opt)
			return signer.transfer(to,value,options)

		};
	  public async transferFrom(from:string,to:string,value:BigNumber,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const gasLimit = await signer.estimateGas.transferFrom(from,to,value)

			const options = Object.assign({
				gasLimit
			}, opt)
			return signer.transferFrom(from,to,value,options)

		};
}

