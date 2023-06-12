import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ABI from "../abis/BridgeV1.json"

export class BridgeV1Contract extends ContractAbstract {
    public static contractName = 'BridgeV1Contract';
		Abi = ABI 
		constructor(props: any) {
			super(props)
		}
	  public DEFAULT_ADMIN_ROLE(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.DEFAULT_ADMIN_ROLE()

		};
	  public RELAYER_ROLE(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.RELAYER_ROLE()

		};
	  public _chainID(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._chainID()

		};
	  public _depositCounts(index_0:number|BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._depositCounts(index_0)

		};
	  public _depositRecords(index_0:BigNumber,index_1:number|BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._depositRecords(index_0,index_1)

		};
	  public _expiry(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._expiry()

		};
	  public _gasExecute(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._gasExecute()

		};
	  public _gasPrice(index_0:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._gasPrice(index_0)

		};
	  public _gasVote(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._gasVote()

		};
	  public _handlerDepositRecords(index_0:string,index_1:number|BigNumber,index_2:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._handlerDepositRecords(index_0,index_1,index_2)

		};
	  public _hasVotedOnProposal(index_0:BigNumber,index_1:string,index_2:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._hasVotedOnProposal(index_0,index_1,index_2)

		};
	  public _proposals(index_0:BigNumber,index_1:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._proposals(index_0,index_1)

		};
	  public _relayerThreshold(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._relayerThreshold()

		};
	  public _resourceIDToHandlerAddress(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._resourceIDToHandlerAddress(index_0)

		};
	  public _tokenPrice(index_0:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._tokenPrice(index_0)

		};
	  public _totalProposals(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._totalProposals()

		};
	  public _totalRelayers(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider._totalRelayers()

		};
	  public async adminAddRelayer(relayerAddress:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminAddRelayer(relayerAddress,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminAddRelayer(relayerAddress,options)

		};
	  public async adminChangeRelayerThreshold(newThreshold:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminChangeRelayerThreshold(newThreshold,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminChangeRelayerThreshold(newThreshold,options)

		};
	  public async adminPauseTransfers(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminPauseTransfers(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminPauseTransfers(options)

		};
	  public async adminRemoveRelayer(relayerAddress:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminRemoveRelayer(relayerAddress,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminRemoveRelayer(relayerAddress,options)

		};
	  public async adminSetBurnable(handlerAddress:string,tokenAddress:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminSetBurnable(handlerAddress,tokenAddress,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminSetBurnable(handlerAddress,tokenAddress,options)

		};
	  public async adminSetGasPrice(chainIds:BigNumber[],prices:BigNumber[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminSetGasPrice(chainIds,prices,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminSetGasPrice(chainIds,prices,options)

		};
	  public async adminSetGenericResource(handlerAddress:string,resourceID:string,contractAddress:string,depositFunctionSig:string,executeFunctionSig:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminSetGenericResource(handlerAddress,resourceID,contractAddress,depositFunctionSig,executeFunctionSig,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminSetGenericResource(handlerAddress,resourceID,contractAddress,depositFunctionSig,executeFunctionSig,options)

		};
	  public async adminSetResource(handlerAddress:string,resourceID:string,tokenAddress:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminSetResource(handlerAddress,resourceID,tokenAddress,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminSetResource(handlerAddress,resourceID,tokenAddress,options)

		};
	  public async adminSetTokenPrice(chainIds:BigNumber[],prices:BigNumber[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminSetTokenPrice(chainIds,prices,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminSetTokenPrice(chainIds,prices,options)

		};
	  public async adminUnpauseTransfers(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminUnpauseTransfers(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminUnpauseTransfers(options)

		};
	  public async adminWithdraw(handlerAddress:string,tokenAddress:string,recipient:string,amountOrTokenID:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.adminWithdraw(handlerAddress,tokenAddress,recipient,amountOrTokenID,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.adminWithdraw(handlerAddress,tokenAddress,recipient,amountOrTokenID,options)

		};
	  public async cancelProposal(chainID:number|BigNumber,depositNonce:BigNumber,dataHash:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.cancelProposal(chainID,depositNonce,dataHash,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.cancelProposal(chainID,depositNonce,dataHash,options)

		};
	  public async deposit(destinationChainID:number|BigNumber,resourceID:string,data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.deposit(destinationChainID,resourceID,data,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.deposit(destinationChainID,resourceID,data,options)

		};
	  public async depositEventAgain(destinationChainID:number|BigNumber,resourceID:string,depositNonce:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.depositEventAgain(destinationChainID,resourceID,depositNonce,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.depositEventAgain(destinationChainID,resourceID,depositNonce,options)

		};
	  public async executeProposal(chainID:number|BigNumber,depositNonce:BigNumber,data:string,resourceID:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.executeProposal(chainID,depositNonce,data,resourceID,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.executeProposal(chainID,depositNonce,data,resourceID,options)

		};
	  public getFee(chainIdIn:BigNumber,chainIdOut:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getFee(chainIdIn,chainIdOut)

		};
	  public getProposal(originChainID:number|BigNumber,depositNonce:BigNumber,dataHash:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getProposal(originChainID,depositNonce,dataHash)

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
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.grantRole(role,account,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.grantRole(role,account,options)

		};
	  public hasRole(role:string,account:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.hasRole(role,account)

		};
	  public isRelayer(relayer:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.isRelayer(relayer)

		};
	  public paused(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.paused()

		};
	  public async renounceAdmin(newAdmin:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.renounceAdmin(newAdmin,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.renounceAdmin(newAdmin,options)

		};
	  public async renounceRole(role:string,account:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.renounceRole(role,account,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.renounceRole(role,account,options)

		};
	  public async revokeRole(role:string,account:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.revokeRole(role,account,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.revokeRole(role,account,options)

		};
	  public async transferFunds(addrs:string[],amounts:BigNumber[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.transferFunds(addrs,amounts,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.transferFunds(addrs,amounts,options)

		};
	  public async voteProposal(chainID:number|BigNumber,depositNonce:BigNumber,resourceID:string,dataHash:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.voteProposal(chainID,depositNonce,resourceID,dataHash,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.voteProposal(chainID,depositNonce,resourceID,dataHash,options)

		};
}

