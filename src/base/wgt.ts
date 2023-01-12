import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import WGTAbi from '../abis/WGT.json'


export class WGTContract extends ContractAbstract {
    public static contractName = 'WGTContract';
		Abi = WGTAbi 
		constructor(props: any) {
			super(props)
		}
	  public async approve(guy:string,wad:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.approve(guy,wad,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.approve(guy,wad,options)

		};
	  public totalSupply(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.totalSupply()

		};
	  public async transferFrom(src:string,dst:string,wad:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.transferFrom(src,dst,wad,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transferFrom(src,dst,wad,options)

		};
	  public async withdraw(wad:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.withdraw(wad,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.withdraw(wad,options)

		};
	  public decimals(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.decimals()

		};
	  public balanceOf(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.balanceOf(index_0)

		};
	  public symbol(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.symbol()

		};
	  public async transfer(dst:string,wad:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.transfer(dst,wad,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transfer(dst,wad,options)

		};
	  public async deposit(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.deposit(_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.deposit(options)

		};
	  public allowance(index_0:string,index_1:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.allowance(index_0,index_1)

		};
}

