import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import ABI from "../abis/HipoCrossAndSwap.json"

export class HipoCrossAndSwapContract extends ContractAbstract {
    public static contractName = 'HipoCrossAndSwapContract';
		Abi = ABI 
		constructor(props: any) {
			super(props)
		}
	  public async executeMessage2(_sender:string,_srcChainId:BigNumber,_message:string,_executor:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.executeMessage2(_sender,_srcChainId,_message,_executor,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.executeMessage2(_sender,_srcChainId,_message,_executor,options)

		};
	  public async executeMessage1(_sender:string,_srcChainId:BigNumber,_message:string,_executor:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.executeMessage1(_sender,_srcChainId,_message,_executor,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.executeMessage1(_sender,_srcChainId,_message,_executor,options)

		};
	  public async executeMessageWithTransfer(index_0:string,_token:string,_amount:BigNumber,_srcChainId:BigNumber,_message:string,index_5:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.executeMessageWithTransfer(index_0,_token,_amount,_srcChainId,_message,index_5,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.executeMessageWithTransfer(index_0,_token,_amount,_srcChainId,_message,index_5,options)

		};
	  public async executeMessageWithTransferFallback(index_0:string,index_1:string,index_2:BigNumber,_srcChainId:BigNumber,_message:string,index_5:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.executeMessageWithTransferFallback(index_0,index_1,index_2,_srcChainId,_message,index_5,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.executeMessageWithTransferFallback(index_0,index_1,index_2,_srcChainId,_message,index_5,options)

		};
	  public async executeMessageWithTransferRefund(_token:string,_amount:BigNumber,_message:string,_executor:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.executeMessageWithTransferRefund(_token,_amount,_message,_executor,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.executeMessageWithTransferRefund(_token,_amount,_message,_executor,options)

		};
	  public messageBus(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.messageBus()

		};
	  public minSwapAmounts(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.minSwapAmounts(index_0)

		};
	  public nativeWrap(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.nativeWrap()

		};
	  public ooSwap(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.ooSwap()

		};
	  public async outboundTransferTo(_from:string,_to:string,_data:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.outboundTransferTo(_from,_to,_data,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.outboundTransferTo(_from,_to,_data,options)

		};
	  public owner(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.owner()

		};
	  public async rescueFunds(token:string,userAddress:string,amount:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.rescueFunds(token,userAddress,amount,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.rescueFunds(token,userAddress,amount,options)

		};
	  public async setMessageBus(_messageBus:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setMessageBus(_messageBus,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setMessageBus(_messageBus,options)

		};
	  public async setMinSwapAmount(_token:string,_minSwapAmount:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setMinSwapAmount(_token,_minSwapAmount,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setMinSwapAmount(_token,_minSwapAmount,options)

		};
	  public async setNativeWrap(_nativeWrap:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setNativeWrap(_nativeWrap,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setNativeWrap(_nativeWrap,options)

		};
	  public async setOOSwap(_ooSwap:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.setOOSwap(_ooSwap,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.setOOSwap(_ooSwap,options)

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
	  public async transferWithSwap(_from:string,_tokenReceiver:string,_tws:{_receiver: string;_amountIn: BigNumber;_dstChainId: BigNumber;_nonce: BigNumber;_nativeIn: boolean;_nativeOut: boolean;_srcSwap: {path: string[];_srcSwapExtraData: string;_dstSwapExtraData: string};_dstSwap: {path: string[];_srcSwapExtraData: string;_dstSwapExtraData: string};_bridgeData: string},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.transferWithSwap(_from,_tokenReceiver,_tws,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.transferWithSwap(_from,_tokenReceiver,_tws,options)

		};
	  public async transferWithSwapNative(_tokenReceiver:string,_tws:{_receiver: string;_amountIn: BigNumber;_dstChainId: BigNumber;_nonce: BigNumber;_nativeIn: boolean;_nativeOut: boolean;_srcSwap: {path: string[];_srcSwapExtraData: string;_dstSwapExtraData: string};_dstSwap: {path: string[];_srcSwapExtraData: string;_dstSwapExtraData: string};_bridgeData: string},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.transferWithSwapNative(_tokenReceiver,_tws,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.transferWithSwapNative(_tokenReceiver,_tws,options)

		};
	  public async withdrewNative(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.withdrewNative(_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.withdrewNative(options)

		};
}

