import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import NftExchangeAbi from '../abis/NftExchange.json'


export class NftExchangeContract extends ContractAbstract {
    public static contractName = 'NftExchangeContract';
		Abi = NftExchangeAbi 
		constructor(props: any) {
			super(props)
		}
	  public tokenTransferProxy(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.tokenTransferProxy()

		};
	  public staticCall(target:string,calldata:string,extradata:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.staticCall(target,calldata,extradata)

		};
	  public async changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee,options)

		};
	  public async changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee,options)

		};
	  public async guardedArrayReplace(array:string,desired:string,mask:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.guardedArrayReplace(array,desired,mask,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.guardedArrayReplace(array,desired,mask,options)

		};
	  public minimumTakerProtocolFee(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.minimumTakerProtocolFee()

		};
	  public codename(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.codename()

		};
	  public async testCopyAddress(addr:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.testCopyAddress(addr,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.testCopyAddress(addr,options)

		};
	  public async testCopy(arrToCopy:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.testCopy(arrToCopy,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.testCopy(arrToCopy,options)

		};
	  public calculateCurrentPrice_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.calculateCurrentPrice_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata)

		};
	  public async changeProtocolFeeRecipient(newProtocolFeeRecipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.changeProtocolFeeRecipient(newProtocolFeeRecipient,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.changeProtocolFeeRecipient(newProtocolFeeRecipient,options)

		};
	  public version(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.version()

		};
	  public async orderCalldataCanMatch(buyCalldata:string,buyReplacementPattern:string,sellCalldata:string,sellReplacementPattern:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.orderCalldataCanMatch(buyCalldata,buyReplacementPattern,sellCalldata,sellReplacementPattern,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.orderCalldataCanMatch(buyCalldata,buyReplacementPattern,sellCalldata,sellReplacementPattern,options)

		};
	  public validateOrder_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.validateOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,v,r,s)

		};
	  public calculateFinalPrice(side:number|BigNumber,saleKind:number|BigNumber,basePrice:BigNumber,extra:BigNumber,listingTime:BigNumber,expirationTime:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.calculateFinalPrice(side,saleKind,basePrice,extra,listingTime,expirationTime)

		};
	  public protocolFeeRecipient(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.protocolFeeRecipient()

		};
	  public async renounceOwnership(opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.renounceOwnership(_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.renounceOwnership(options)

		};
	  public async hashOrder_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.hashOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.hashOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,options)

		};
	  public ordersCanMatch_(addrs:string[],uints:BigNumber[],feeMethodsSidesKindsHowToCalls:Array<number|BigNumber>,calldataBuy:string,calldataSell:string,replacementPatternBuy:string,replacementPatternSell:string,staticExtradataBuy:string,staticExtradataSell:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.ordersCanMatch_(addrs,uints,feeMethodsSidesKindsHowToCalls,calldataBuy,calldataSell,replacementPatternBuy,replacementPatternSell,staticExtradataBuy,staticExtradataSell)

		};
	  public async approveOrder_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,orderbookInclusionDesired:boolean,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.approveOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,orderbookInclusionDesired,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.approveOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,orderbookInclusionDesired,options)

		};
	  public registry(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.registry()

		};
	  public minimumMakerProtocolFee(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.minimumMakerProtocolFee()

		};
	  public async hashToSign_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.hashToSign_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.hashToSign_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,options)

		};
	  public cancelledOrFinalized(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.cancelledOrFinalized(index_0)

		};
	  public owner(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.owner()

		};
	  public exchangeToken(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.exchangeToken()

		};
	  public async cancelOrder_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,v:number|BigNumber,r:string,s:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.cancelOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,v,r,s,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.cancelOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,v,r,s,options)

		};
	  public async atomicMatch_(addrs:string[],uints:BigNumber[],feeMethodsSidesKindsHowToCalls:Array<number|BigNumber>,calldataBuy:string,calldataSell:string,replacementPatternBuy:string,replacementPatternSell:string,staticExtradataBuy:string,staticExtradataSell:string,vs:Array<number|BigNumber>,rssMetadata:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.atomicMatch_(addrs,uints,feeMethodsSidesKindsHowToCalls,calldataBuy,calldataSell,replacementPatternBuy,replacementPatternSell,staticExtradataBuy,staticExtradataSell,vs,rssMetadata,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.atomicMatch_(addrs,uints,feeMethodsSidesKindsHowToCalls,calldataBuy,calldataSell,replacementPatternBuy,replacementPatternSell,staticExtradataBuy,staticExtradataSell,vs,rssMetadata,options)

		};
	  public validateOrderParameters_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.validateOrderParameters_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata)

		};
	  public INVERSE_BASIS_POINT(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.INVERSE_BASIS_POINT()

		};
	  public calculateMatchPrice_(addrs:string[],uints:BigNumber[],feeMethodsSidesKindsHowToCalls:Array<number|BigNumber>,calldataBuy:string,calldataSell:string,replacementPatternBuy:string,replacementPatternSell:string,staticExtradataBuy:string,staticExtradataSell:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.calculateMatchPrice_(addrs,uints,feeMethodsSidesKindsHowToCalls,calldataBuy,calldataSell,replacementPatternBuy,replacementPatternSell,staticExtradataBuy,staticExtradataSell)

		};
	  public approvedOrders(index_0:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.approvedOrders(index_0)

		};
	  public async transferOwnership(newOwner:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const signer = this.getContractSigner(address)
			const _opt = rest
			const gasLimit = await signer.estimateGas.transferOwnership(newOwner,_opt)

			const options = Object.assign({
				gasLimit
			}, _opt)
			return signer.transferOwnership(newOwner,options)

		};
}

