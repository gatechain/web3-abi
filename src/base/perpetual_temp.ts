import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ABI from "../abis/PerpetualTemp.json"

export class PerpetualTempContract extends ContractAbstract {
    public static contractName = 'PerpetualTempContract';
		Abi = ABI 
		constructor(props: any) {
			super(props)
		}
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
	  public bridge(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.bridge()

		};
	  public async deposit(user:string,amount:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.deposit(user,amount,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.deposit(user,amount,options)

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
	  public getDepositBalance(user:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getDepositBalance(user)

		};
	  public getDepositToken(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getDepositToken()

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
	  public async init(_owner:string,_depositToken:string,_verifiers:string[],_verifiersParams:BigNumber[],_withdrawVerifier:string,_poseidonElements:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.init(_owner,_depositToken,_verifiers,_verifiersParams,_withdrawVerifier,_poseidonElements,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.init(_owner,_depositToken,_verifiers,_verifiersParams,_withdrawVerifier,_poseidonElements,options)

		};
	  public async initPerp(_verifiers:string[],_verifiersParams:BigNumber[],_withdrawVerifier:string,_poseidonElements:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.initPerp(_verifiers,_verifiersParams,_withdrawVerifier,_poseidonElements,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.initPerp(_verifiers,_verifiersParams,_withdrawVerifier,_poseidonElements,options)

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
	  public pendingWithdrawalTotal(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.pendingWithdrawalTotal(index_0)

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
	  public async setBridge(_bridge:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setBridge(_bridge,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setBridge(_bridge,options)

		};
	  public async setDepositToken(_depositToken:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setDepositToken(_depositToken,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setDepositToken(_depositToken,options)

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
	  public async setInsAccId(_insAccId:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setInsAccId(_insAccId,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setInsAccId(_insAccId,options)

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
	  public stateRootMap(index_0:number|BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.stateRootMap(index_0)

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
	  public async withdrawCircuit(proofA:BigNumber[],proofB:BigNumber[][],proofC:BigNumber[],amount:BigNumber,numExitRoot:number|BigNumber,idx:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.withdrawCircuit(proofA,proofB,proofC,amount,numExitRoot,idx,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.withdrawCircuit(proofA,proofB,proofC,amount,numExitRoot,idx,options)

		};
	  public async withdrawMerkleProof(amount:BigNumber,babyPubKey:BigNumber,numExitRoot:number|BigNumber,siblings:BigNumber[],idx:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.withdrawMerkleProof(amount,babyPubKey,numExitRoot,siblings,idx,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.withdrawMerkleProof(amount,babyPubKey,numExitRoot,siblings,idx,options)

		};
	  public async withdrawMerkleProofTemp(amount:BigNumber,babyPubKey:BigNumber,numExitRoot:number|BigNumber,siblings:BigNumber[],idx:BigNumber,destinationChainID:number|BigNumber,resourceID:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.withdrawMerkleProofTemp(amount,babyPubKey,numExitRoot,siblings,idx,destinationChainID,resourceID,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.withdrawMerkleProofTemp(amount,babyPubKey,numExitRoot,siblings,idx,destinationChainID,resourceID,options)

		};
	  public withdrawSerialNumbers(index_0:number|BigNumber,index_1:BigNumber,index_2:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.withdrawSerialNumbers(index_0,index_1,index_2)

		};
	  public withdrawVerifier(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.withdrawVerifier()

		};
}

