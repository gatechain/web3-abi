import ContractAbstract from "hipo-contract/dist/contract/ContractAbstract.js";
import NftProxyAbi from '../abis/NftProxy.json'

type BigNumber = any 
interface IOption {
	gasLimit?: Number
	from?: string 
	value?: string 
} 

export class NftProxyContract extends ContractAbstract {
    public static contractName = 'NftProxyContract';
		Abi = NftProxyAbi 
		constructor(props: any) {
			super(props)
		}
	  public initialAddressSet(){

			const provider = this.getContractProvider(this.address)
			return provider.initialAddressSet()

		};
	  public async endGrantAuthentication(addr:string,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.endGrantAuthentication(addr,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.endGrantAuthentication(addr,options)

		};
	  public async revokeAuthentication(addr:string,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.revokeAuthentication(addr,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.revokeAuthentication(addr,options)

		};
	  public pending(index_0:string){

			const provider = this.getContractProvider(this.address)
			return provider.pending(index_0)

		};
	  public contracts(index_0:string){

			const provider = this.getContractProvider(this.address)
			return provider.contracts(index_0)

		};
	  public async renounceOwnership(opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.renounceOwnership(_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.renounceOwnership(options)

		};
	  public owner(){

			const provider = this.getContractProvider(this.address)
			return provider.owner()

		};
	  public delegateProxyImplementation(){

			const provider = this.getContractProvider(this.address)
			return provider.delegateProxyImplementation()

		};
	  public proxies(index_0:string){

			const provider = this.getContractProvider(this.address)
			return provider.proxies(index_0)

		};
	  public async startGrantAuthentication(addr:string,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.startGrantAuthentication(addr,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.startGrantAuthentication(addr,options)

		};
	  public async registerProxy(opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.registerProxy(_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.registerProxy(options)

		};
	  public DELAY_PERIOD(){

			const provider = this.getContractProvider(this.address)
			return provider.DELAY_PERIOD()

		};
	  public async transferOwnership(_newOwner:string,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.transferOwnership(_newOwner,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transferOwnership(_newOwner,options)

		};
	  public async grantInitialAuthentication(authAddress:string,opt?: IOption){

			const signer = this.getContractSigner(this.address)
			const _opt = opt || {}
			const gasLimit = await signer.estimateGas.grantInitialAuthentication(authAddress,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.grantInitialAuthentication(authAddress,options)

		};
}

