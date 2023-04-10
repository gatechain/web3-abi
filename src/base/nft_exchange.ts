import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";

export class NftExchangeContract extends ContractAbstract {
    public static contractName = 'NftExchangeContract';
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
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee,options)

		};
	  public async changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee,options)

		};
	  public async guardedArrayReplace(array:string,desired:string,mask:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.guardedArrayReplace(array,desired,mask,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.guardedArrayReplace(array,desired,mask,options)

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
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.testCopyAddress(addr,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.testCopyAddress(addr,options)

		};
	  public async testCopy(arrToCopy:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.testCopy(arrToCopy,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.testCopy(arrToCopy,options)

		};
	  public calculateCurrentPrice_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.calculateCurrentPrice_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata)

		};
	  public async changeProtocolFeeRecipient(newProtocolFeeRecipient:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.changeProtocolFeeRecipient(newProtocolFeeRecipient,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.changeProtocolFeeRecipient(newProtocolFeeRecipient,options)

		};
	  public version(opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.version()

		};
	  public async orderCalldataCanMatch(buyCalldata:string,buyReplacementPattern:string,sellCalldata:string,sellReplacementPattern:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.orderCalldataCanMatch(buyCalldata,buyReplacementPattern,sellCalldata,sellReplacementPattern,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.orderCalldataCanMatch(buyCalldata,buyReplacementPattern,sellCalldata,sellReplacementPattern,options)

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
	  public async hashOrder_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.hashOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.hashOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,options)

		};
	  public ordersCanMatch_(addrs:string[],uints:BigNumber[],feeMethodsSidesKindsHowToCalls:Array<number|BigNumber>,calldataBuy:string,calldataSell:string,replacementPatternBuy:string,replacementPatternSell:string,staticExtradataBuy:string,staticExtradataSell:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.ordersCanMatch_(addrs,uints,feeMethodsSidesKindsHowToCalls,calldataBuy,calldataSell,replacementPatternBuy,replacementPatternSell,staticExtradataBuy,staticExtradataSell)

		};
	  public async approveOrder_(addrs:string[],uints:BigNumber[],feeMethod:number|BigNumber,side:number|BigNumber,saleKind:number|BigNumber,howToCall:number|BigNumber,calldata:string,replacementPattern:string,staticExtradata:string,orderbookInclusionDesired:boolean,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.approveOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,orderbookInclusionDesired,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.approveOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,orderbookInclusionDesired,options)

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
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.hashToSign_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.hashToSign_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,options)

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
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.cancelOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,v,r,s,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.cancelOrder_(addrs,uints,feeMethod,side,saleKind,howToCall,calldata,replacementPattern,staticExtradata,v,r,s,options)

		};
	  public async atomicMatch_(addrs:string[],uints:BigNumber[],feeMethodsSidesKindsHowToCalls:Array<number|BigNumber>,calldataBuy:string,calldataSell:string,replacementPatternBuy:string,replacementPatternSell:string,staticExtradataBuy:string,staticExtradataSell:string,vs:Array<number|BigNumber>,rssMetadata:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.atomicMatch_(addrs,uints,feeMethodsSidesKindsHowToCalls,calldataBuy,calldataSell,replacementPatternBuy,replacementPatternSell,staticExtradataBuy,staticExtradataSell,vs,rssMetadata,_opt)
        gasLimit = gasLimit.mul(120).div(100)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.atomicMatch_(addrs,uints,feeMethodsSidesKindsHowToCalls,calldataBuy,calldataSell,replacementPatternBuy,replacementPatternSell,staticExtradataBuy,staticExtradataSell,vs,rssMetadata,options)

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
		Abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenTransferProxy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"target","type":"address"},{"name":"calldata","type":"bytes"},{"name":"extradata","type":"bytes"}],"name":"staticCall","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newMinimumMakerProtocolFee","type":"uint256"}],"name":"changeMinimumMakerProtocolFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newMinimumTakerProtocolFee","type":"uint256"}],"name":"changeMinimumTakerProtocolFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"array","type":"bytes"},{"name":"desired","type":"bytes"},{"name":"mask","type":"bytes"}],"name":"guardedArrayReplace","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"minimumTakerProtocolFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"codename","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"testCopyAddress","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"arrToCopy","type":"bytes"}],"name":"testCopy","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"addrs","type":"address[7]"},{"name":"uints","type":"uint256[9]"},{"name":"feeMethod","type":"uint8"},{"name":"side","type":"uint8"},{"name":"saleKind","type":"uint8"},{"name":"howToCall","type":"uint8"},{"name":"calldata","type":"bytes"},{"name":"replacementPattern","type":"bytes"},{"name":"staticExtradata","type":"bytes"}],"name":"calculateCurrentPrice_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newProtocolFeeRecipient","type":"address"}],"name":"changeProtocolFeeRecipient","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"buyCalldata","type":"bytes"},{"name":"buyReplacementPattern","type":"bytes"},{"name":"sellCalldata","type":"bytes"},{"name":"sellReplacementPattern","type":"bytes"}],"name":"orderCalldataCanMatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"addrs","type":"address[7]"},{"name":"uints","type":"uint256[9]"},{"name":"feeMethod","type":"uint8"},{"name":"side","type":"uint8"},{"name":"saleKind","type":"uint8"},{"name":"howToCall","type":"uint8"},{"name":"calldata","type":"bytes"},{"name":"replacementPattern","type":"bytes"},{"name":"staticExtradata","type":"bytes"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"validateOrder_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"side","type":"uint8"},{"name":"saleKind","type":"uint8"},{"name":"basePrice","type":"uint256"},{"name":"extra","type":"uint256"},{"name":"listingTime","type":"uint256"},{"name":"expirationTime","type":"uint256"}],"name":"calculateFinalPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"protocolFeeRecipient","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addrs","type":"address[7]"},{"name":"uints","type":"uint256[9]"},{"name":"feeMethod","type":"uint8"},{"name":"side","type":"uint8"},{"name":"saleKind","type":"uint8"},{"name":"howToCall","type":"uint8"},{"name":"calldata","type":"bytes"},{"name":"replacementPattern","type":"bytes"},{"name":"staticExtradata","type":"bytes"}],"name":"hashOrder_","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"addrs","type":"address[14]"},{"name":"uints","type":"uint256[18]"},{"name":"feeMethodsSidesKindsHowToCalls","type":"uint8[8]"},{"name":"calldataBuy","type":"bytes"},{"name":"calldataSell","type":"bytes"},{"name":"replacementPatternBuy","type":"bytes"},{"name":"replacementPatternSell","type":"bytes"},{"name":"staticExtradataBuy","type":"bytes"},{"name":"staticExtradataSell","type":"bytes"}],"name":"ordersCanMatch_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addrs","type":"address[7]"},{"name":"uints","type":"uint256[9]"},{"name":"feeMethod","type":"uint8"},{"name":"side","type":"uint8"},{"name":"saleKind","type":"uint8"},{"name":"howToCall","type":"uint8"},{"name":"calldata","type":"bytes"},{"name":"replacementPattern","type":"bytes"},{"name":"staticExtradata","type":"bytes"},{"name":"orderbookInclusionDesired","type":"bool"}],"name":"approveOrder_","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumMakerProtocolFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addrs","type":"address[7]"},{"name":"uints","type":"uint256[9]"},{"name":"feeMethod","type":"uint8"},{"name":"side","type":"uint8"},{"name":"saleKind","type":"uint8"},{"name":"howToCall","type":"uint8"},{"name":"calldata","type":"bytes"},{"name":"replacementPattern","type":"bytes"},{"name":"staticExtradata","type":"bytes"}],"name":"hashToSign_","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"bytes32"}],"name":"cancelledOrFinalized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addrs","type":"address[7]"},{"name":"uints","type":"uint256[9]"},{"name":"feeMethod","type":"uint8"},{"name":"side","type":"uint8"},{"name":"saleKind","type":"uint8"},{"name":"howToCall","type":"uint8"},{"name":"calldata","type":"bytes"},{"name":"replacementPattern","type":"bytes"},{"name":"staticExtradata","type":"bytes"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelOrder_","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addrs","type":"address[14]"},{"name":"uints","type":"uint256[18]"},{"name":"feeMethodsSidesKindsHowToCalls","type":"uint8[8]"},{"name":"calldataBuy","type":"bytes"},{"name":"calldataSell","type":"bytes"},{"name":"replacementPatternBuy","type":"bytes"},{"name":"replacementPatternSell","type":"bytes"},{"name":"staticExtradataBuy","type":"bytes"},{"name":"staticExtradataSell","type":"bytes"},{"name":"vs","type":"uint8[2]"},{"name":"rssMetadata","type":"bytes32[5]"}],"name":"atomicMatch_","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"addrs","type":"address[7]"},{"name":"uints","type":"uint256[9]"},{"name":"feeMethod","type":"uint8"},{"name":"side","type":"uint8"},{"name":"saleKind","type":"uint8"},{"name":"howToCall","type":"uint8"},{"name":"calldata","type":"bytes"},{"name":"replacementPattern","type":"bytes"},{"name":"staticExtradata","type":"bytes"}],"name":"validateOrderParameters_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVERSE_BASIS_POINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addrs","type":"address[14]"},{"name":"uints","type":"uint256[18]"},{"name":"feeMethodsSidesKindsHowToCalls","type":"uint8[8]"},{"name":"calldataBuy","type":"bytes"},{"name":"calldataSell","type":"bytes"},{"name":"replacementPatternBuy","type":"bytes"},{"name":"replacementPatternSell","type":"bytes"},{"name":"staticExtradataBuy","type":"bytes"},{"name":"staticExtradataSell","type":"bytes"}],"name":"calculateMatchPrice_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"bytes32"}],"name":"approvedOrders","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"registryAddress","type":"address"},{"name":"tokenTransferProxyAddress","type":"address"},{"name":"tokenAddress","type":"address"},{"name":"protocolFeeAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"exchange","type":"address"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"taker","type":"address"},{"indexed":false,"name":"makerRelayerFee","type":"uint256"},{"indexed":false,"name":"takerRelayerFee","type":"uint256"},{"indexed":false,"name":"makerProtocolFee","type":"uint256"},{"indexed":false,"name":"takerProtocolFee","type":"uint256"},{"indexed":true,"name":"feeRecipient","type":"address"},{"indexed":false,"name":"feeMethod","type":"uint8"},{"indexed":false,"name":"side","type":"uint8"},{"indexed":false,"name":"saleKind","type":"uint8"},{"indexed":false,"name":"target","type":"address"}],"name":"OrderApprovedPartOne","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"howToCall","type":"uint8"},{"indexed":false,"name":"calldata","type":"bytes"},{"indexed":false,"name":"replacementPattern","type":"bytes"},{"indexed":false,"name":"staticTarget","type":"address"},{"indexed":false,"name":"staticExtradata","type":"bytes"},{"indexed":false,"name":"paymentToken","type":"address"},{"indexed":false,"name":"basePrice","type":"uint256"},{"indexed":false,"name":"extra","type":"uint256"},{"indexed":false,"name":"listingTime","type":"uint256"},{"indexed":false,"name":"expirationTime","type":"uint256"},{"indexed":false,"name":"salt","type":"uint256"},{"indexed":false,"name":"orderbookInclusionDesired","type":"bool"}],"name":"OrderApprovedPartTwo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"}],"name":"OrderCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"buyHash","type":"bytes32"},{"indexed":false,"name":"sellHash","type":"bytes32"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":true,"name":"metadata","type":"bytes32"}],"name":"OrdersMatched","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}] 
}

