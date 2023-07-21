import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ABI from "../abis/SpotMain.json"

export class SpotMainContract extends ContractAbstract {
    public static contractName = 'SpotMainContract';
		Abi = ABI 
		constructor(props: any) {
			super(props)
		}
	  public allSerialNumbers(index_0:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.allSerialNumbers(index_0)

		};
	  public async blacklist(_account:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.blacklist(_account,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.blacklist(_account,options)

		};
	  public blacklisted(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.blacklisted(index_0)

		};
	  public async deposit(user:string,token:string,amount:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.deposit(user,token,amount,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.deposit(user,token,amount,options)

		};
	  public enableProof(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.enableProof()

		};
	  public exitNullifierMap(index_0:number|BigNumber,index_1:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.exitNullifierMap(index_0,index_1)

		};
	  public exitRootsMap(index_0:number|BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.exitRootsMap(index_0)

		};
	  public feeAccId(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.feeAccId()

		};
	  public async forgeBatch(newStRoot:BigNumber,newExitRoot:BigNumber,txsData:string,newOrders:string,newAccounts:string,serialNums:BigNumber[],verifierIdx:number|BigNumber,proof:BigNumber[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.forgeBatch(newStRoot,newExitRoot,txsData,newOrders,newAccounts,serialNums,verifierIdx,proof,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.forgeBatch(newStRoot,newExitRoot,txsData,newOrders,newAccounts,serialNums,verifierIdx,proof,options)

		};
	  public genesisBlock(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.genesisBlock()

		};
	  public async getChainId(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.getChainId(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.getChainId(options)

		};
	  public getDepositBalance(user:string,token:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getDepositBalance(user,token)

		};
	  public getHash(user:string,amount:BigNumber,babyPubKey:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getHash(user,amount,babyPubKey)

		};
	  public getInput(newStRoot:BigNumber,newExitRoot:BigNumber,l1L2TxsData:string,verifierIdx:number|BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getInput(newStRoot,newExitRoot,l1L2TxsData,verifierIdx)

		};
	  public idxMap(index_0:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.idxMap(index_0)

		};
	  public async init(_owner:string,_verifiers:string[],_verifiersParams:BigNumber[],_poseidonElements:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.init(_owner,_verifiers,_verifiersParams,_poseidonElements,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.init(_owner,_verifiers,_verifiersParams,_poseidonElements,options)

		};
	  public async initSpot(_verifiers:string[],_verifiersParams:BigNumber[],_poseidonElements:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.initSpot(_verifiers,_verifiersParams,_poseidonElements,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.initSpot(_verifiers,_verifiersParams,_poseidonElements,options)

		};
	  public insAccId(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.insAccId()

		};
	  public l1L2TxsDataHashMap(index_0:number|BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.l1L2TxsDataHashMap(index_0)

		};
	  public lastForgedBatch(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.lastForgedBatch()

		};
	  public oldUsers(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.oldUsers(index_0)

		};
	  public operator(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.operator()

		};
	  public owner(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.owner()

		};
	  public async pause(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.pause(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.pause(options)

		};
	  public paused(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.paused()

		};
	  public async renounceOwnership(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.renounceOwnership(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.renounceOwnership(options)

		};
	  public rollupVerifiers(index_0:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.rollupVerifiers(index_0)

		};
	  public rollupVerifiersLength(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.rollupVerifiersLength()

		};
	  public async setFeeAccId(_feeAccId:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setFeeAccId(_feeAccId,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setFeeAccId(_feeAccId,options)

		};
	  public async setOperator(_operator:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setOperator(_operator,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setOperator(_operator,options)

		};
	  public async setTokenState(token:string,state:boolean,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setTokenState(token,state,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setTokenState(token,state,options)

		};
	  public stateRootMap(index_0:number|BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.stateRootMap(index_0)

		};
	  public supportedTokens(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.supportedTokens(index_0)

		};
	  public async toggleProofVerify(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.toggleProofVerify(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.toggleProofVerify(options)

		};
	  public async transferOwnership(newOwner:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.transferOwnership(newOwner,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.transferOwnership(newOwner,options)

		};
	  public async unBlacklist(_account:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.unBlacklist(_account,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.unBlacklist(_account,options)

		};
	  public async unpause(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.unpause(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.unpause(options)

		};
	  public async updateVerifier(idx:BigNumber,verifier:string,maxTx:BigNumber,nLevels:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updateVerifier(idx,verifier,maxTx,nLevels,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updateVerifier(idx,verifier,maxTx,nLevels,options)

		};
	  public async withdrawMerkleProof(token:string,amount:BigNumber,babyPubKey:BigNumber,numExitRoot:number|BigNumber,siblings:BigNumber[],idx:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.withdrawMerkleProof(token,amount,babyPubKey,numExitRoot,siblings,idx,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.withdrawMerkleProof(token,amount,babyPubKey,numExitRoot,siblings,idx,options)

		};
	  public withdrawSerialNumbers(index_0:number|BigNumber,index_1:BigNumber,index_2:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.withdrawSerialNumbers(index_0,index_1,index_2)

		};
}

