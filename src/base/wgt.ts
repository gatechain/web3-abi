import ContractAbstract from "web3-contract/dist/contract/ContractAbstract.js";
import WGTAbi from '../abis/WGT.json'

type BigNumber = any 
interface IOption {
	gasLimit?: Number
	from?: string 
	value?: string 
} 

export class WGTContract extends ContractAbstract {
    public static contractName = 'WGTContract';
		Abi = WGTAbi 
		constructor(props: any) {
			super(props)
		}
	  public async approve(guy:string,wad:BigNumber,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.approve(guy,wad,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.approve(guy,wad,options)

		};
	  public totalSupply(){

			const provider = this.getContractProvider(this.address)
			return provider.totalSupply()

		};
	  public async transferFrom(src:string,dst:string,wad:BigNumber,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.transferFrom(src,dst,wad,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transferFrom(src,dst,wad,options)

		};
	  public async withdraw(wad:BigNumber,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.withdraw(wad,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.withdraw(wad,options)

		};
	  public decimals(){

			const provider = this.getContractProvider(this.address)
			return provider.decimals()

		};
	  public balanceOf(index_0:string){

			const provider = this.getContractProvider(this.address)
			return provider.balanceOf(index_0)

		};
	  public symbol(){

			const provider = this.getContractProvider(this.address)
			return provider.symbol()

		};
	  public async transfer(dst:string,wad:BigNumber,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.transfer(dst,wad,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transfer(dst,wad,options)

		};
	  public async deposit(opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.deposit(_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.deposit(options)

		};
	  public allowance(index_0:string,index_1:string){

			const provider = this.getContractProvider(this.address)
			return provider.allowance(index_0,index_1)

		};
}

