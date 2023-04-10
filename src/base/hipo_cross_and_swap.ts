import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";

export class HipoCrossAndSwapContract extends ContractAbstract {
    public static contractName = 'HipoCrossAndSwapContract';
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
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.withdrewNative(options)

		};
		Abi = [{"inputs":[{"internalType":"address","name":"_messageBus","type":"address"},{"internalType":"address","name":"_nativeWrap","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"srcChainId","type":"uint64"},{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountOut","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenOut","type":"address"}],"name":"DirectSwap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"messageBus","type":"address"}],"name":"MessageBusUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"dstAmount","type":"uint256"},{"indexed":false,"internalType":"enum OOCrossChainAndSwap.SwapStatus","name":"status","type":"uint8"}],"name":"SwapRequestDone","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"dstChainId","type":"uint64"},{"indexed":false,"internalType":"uint256","name":"srcAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"srcToken","type":"address"},{"indexed":false,"internalType":"address","name":"dstToken","type":"address"}],"name":"SwapRequestSent","type":"event"},{"inputs":[{"internalType":"bytes","name":"_sender","type":"bytes"},{"internalType":"uint64","name":"_srcChainId","type":"uint64"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"address","name":"_executor","type":"address"}],"name":"executeMessage","outputs":[{"internalType":"enum IMessageReceiverApp.ExecutionStatus","name":"","type":"uint8"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint64","name":"_srcChainId","type":"uint64"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"address","name":"_executor","type":"address"}],"name":"executeMessage","outputs":[{"internalType":"enum IMessageReceiverApp.ExecutionStatus","name":"","type":"uint8"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"index_0","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint64","name":"_srcChainId","type":"uint64"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"address","name":"index_5","type":"address"}],"name":"executeMessageWithTransfer","outputs":[{"internalType":"enum IMessageReceiverApp.ExecutionStatus","name":"","type":"uint8"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"index_0","type":"address"},{"internalType":"address","name":"index_1","type":"address"},{"internalType":"uint256","name":"index_2","type":"uint256"},{"internalType":"uint64","name":"_srcChainId","type":"uint64"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"address","name":"index_5","type":"address"}],"name":"executeMessageWithTransferFallback","outputs":[{"internalType":"enum IMessageReceiverApp.ExecutionStatus","name":"","type":"uint8"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"address","name":"_executor","type":"address"}],"name":"executeMessageWithTransferRefund","outputs":[{"internalType":"enum IMessageReceiverApp.ExecutionStatus","name":"","type":"uint8"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"messageBus","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"index_0","type":"address"}],"name":"minSwapAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nativeWrap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ooSwap","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"outboundTransferTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_messageBus","type":"address"}],"name":"setMessageBus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_minSwapAmount","type":"uint256"}],"name":"setMinSwapAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nativeWrap","type":"address"}],"name":"setNativeWrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ooSwap","type":"address"}],"name":"setOOSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_tokenReceiver","type":"address"},{"components":[{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"uint64","name":"_dstChainId","type":"uint64"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bool","name":"_nativeIn","type":"bool"},{"internalType":"bool","name":"_nativeOut","type":"bool"},{"components":[{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"bytes","name":"_srcSwapExtraData","type":"bytes"},{"internalType":"bytes","name":"_dstSwapExtraData","type":"bytes"}],"internalType":"struct OOCrossChainAndSwap.SwapInfo","name":"_srcSwap","type":"tuple"},{"components":[{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"bytes","name":"_srcSwapExtraData","type":"bytes"},{"internalType":"bytes","name":"_dstSwapExtraData","type":"bytes"}],"internalType":"struct OOCrossChainAndSwap.SwapInfo","name":"_dstSwap","type":"tuple"},{"internalType":"bytes","name":"_bridgeData","type":"bytes"}],"internalType":"struct OOCrossChainAndSwap.TransferWithSwap","name":"_tws","type":"tuple"}],"name":"transferWithSwap","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenReceiver","type":"address"},{"components":[{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"uint64","name":"_dstChainId","type":"uint64"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bool","name":"_nativeIn","type":"bool"},{"internalType":"bool","name":"_nativeOut","type":"bool"},{"components":[{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"bytes","name":"_srcSwapExtraData","type":"bytes"},{"internalType":"bytes","name":"_dstSwapExtraData","type":"bytes"}],"internalType":"struct OOCrossChainAndSwap.SwapInfo","name":"_srcSwap","type":"tuple"},{"components":[{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"bytes","name":"_srcSwapExtraData","type":"bytes"},{"internalType":"bytes","name":"_dstSwapExtraData","type":"bytes"}],"internalType":"struct OOCrossChainAndSwap.SwapInfo","name":"_dstSwap","type":"tuple"},{"internalType":"bytes","name":"_bridgeData","type":"bytes"}],"internalType":"struct OOCrossChainAndSwap.TransferWithSwap","name":"_tws","type":"tuple"}],"name":"transferWithSwapNative","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdrewNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}] 
}

