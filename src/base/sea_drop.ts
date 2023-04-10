import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";

export class SeaDropContract extends ContractAbstract {
    public static contractName = 'SeaDropContract';
		constructor(props: any) {
			super(props)
		}
	  public getAllowListMerkleRoot(nftContract:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getAllowListMerkleRoot(nftContract)

		};
	  public getAllowedFeeRecipients(nftContract:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getAllowedFeeRecipients(nftContract)

		};
	  public getAllowedNftTokenIdIsRedeemed(nftContract:string,allowedNftToken:string,allowedNftTokenId:BigNumber,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getAllowedNftTokenIdIsRedeemed(nftContract,allowedNftToken,allowedNftTokenId)

		};
	  public getCreatorPayoutAddress(nftContract:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getCreatorPayoutAddress(nftContract)

		};
	  public getFeeRecipientIsAllowed(nftContract:string,feeRecipient:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getFeeRecipientIsAllowed(nftContract,feeRecipient)

		};
	  public getPayerIsAllowed(nftContract:string,payer:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getPayerIsAllowed(nftContract,payer)

		};
	  public getPayers(nftContract:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getPayers(nftContract)

		};
	  public getPublicDrop(nftContract:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getPublicDrop(nftContract)

		};
	  public getSignedMintValidationParams(nftContract:string,signer:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getSignedMintValidationParams(nftContract,signer)

		};
	  public getSigners(nftContract:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getSigners(nftContract)

		};
	  public getTokenGatedAllowedTokens(nftContract:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getTokenGatedAllowedTokens(nftContract)

		};
	  public getTokenGatedDrop(nftContract:string,allowedNftToken:string,opt?: IOption){

			const [address] = this.parseOption(opt)
			const provider = this.getContractProvider(address)
			return provider.getTokenGatedDrop(nftContract,allowedNftToken)

		};
	  public async mintAllowList(nftContract:string,feeRecipient:string,minterIfNotPayer:string,quantity:BigNumber,mintParams:{mintPrice: BigNumber;maxTotalMintableByWallet: BigNumber;startTime: BigNumber;endTime: BigNumber;dropStageIndex: BigNumber;maxTokenSupplyForStage: BigNumber;feeBps: BigNumber;restrictFeeRecipients: boolean},proof:string[],opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.mintAllowList(nftContract,feeRecipient,minterIfNotPayer,quantity,mintParams,proof,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.mintAllowList(nftContract,feeRecipient,minterIfNotPayer,quantity,mintParams,proof,options)

		};
	  public async mintAllowedTokenHolder(nftContract:string,feeRecipient:string,minterIfNotPayer:string,mintParams:{allowedNftToken: string;allowedNftTokenIds: BigNumber[]},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.mintAllowedTokenHolder(nftContract,feeRecipient,minterIfNotPayer,mintParams,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.mintAllowedTokenHolder(nftContract,feeRecipient,minterIfNotPayer,mintParams,options)

		};
	  public async mintPublic(nftContract:string,feeRecipient:string,minterIfNotPayer:string,quantity:BigNumber,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.mintPublic(nftContract,feeRecipient,minterIfNotPayer,quantity,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.mintPublic(nftContract,feeRecipient,minterIfNotPayer,quantity,options)

		};
	  public async mintSigned(nftContract:string,feeRecipient:string,minterIfNotPayer:string,quantity:BigNumber,mintParams:{mintPrice: BigNumber;maxTotalMintableByWallet: BigNumber;startTime: BigNumber;endTime: BigNumber;dropStageIndex: BigNumber;maxTokenSupplyForStage: BigNumber;feeBps: BigNumber;restrictFeeRecipients: boolean},salt:BigNumber,signature:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.mintSigned(nftContract,feeRecipient,minterIfNotPayer,quantity,mintParams,salt,signature,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.mintSigned(nftContract,feeRecipient,minterIfNotPayer,quantity,mintParams,salt,signature,options)

		};
	  public async updateAllowList(allowListData:{merkleRoot: string;publicKeyURIs: string[];allowListURI: string},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updateAllowList(allowListData,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updateAllowList(allowListData,options)

		};
	  public async updateAllowedFeeRecipient(feeRecipient:string,allowed:boolean,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updateAllowedFeeRecipient(feeRecipient,allowed,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updateAllowedFeeRecipient(feeRecipient,allowed,options)

		};
	  public async updateCreatorPayoutAddress(_payoutAddress:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updateCreatorPayoutAddress(_payoutAddress,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updateCreatorPayoutAddress(_payoutAddress,options)

		};
	  public async updateDropURI(dropURI:string,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updateDropURI(dropURI,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updateDropURI(dropURI,options)

		};
	  public async updatePayer(payer:string,allowed:boolean,opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updatePayer(payer,allowed,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updatePayer(payer,allowed,options)

		};
	  public async updatePublicDrop(publicDrop:{mintPrice: BigNumber;startTime: BigNumber;endTime: BigNumber;maxTotalMintableByWallet: number|BigNumber;feeBps: number|BigNumber;restrictFeeRecipients: boolean},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updatePublicDrop(publicDrop,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updatePublicDrop(publicDrop,options)

		};
	  public async updateSignedMintValidationParams(signer:string,signedMintValidationParams:{minMintPrice: BigNumber;maxMaxTotalMintableByWallet: BigNumber;minStartTime: BigNumber;maxEndTime: BigNumber;maxMaxTokenSupplyForStage: BigNumber;minFeeBps: number|BigNumber;maxFeeBps: number|BigNumber},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updateSignedMintValidationParams(signer,signedMintValidationParams,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updateSignedMintValidationParams(signer,signedMintValidationParams,options)

		};
	  public async updateTokenGatedDrop(allowedNftToken:string,dropStage:{mintPrice: BigNumber;maxTotalMintableByWallet: number|BigNumber;startTime: BigNumber;endTime: BigNumber;dropStageIndex: number|BigNumber;maxTokenSupplyForStage: number|BigNumber;feeBps: number|BigNumber;restrictFeeRecipients: boolean},opt?: IOption){

			const [address, rest] = this.parseOption(opt)
			const __signer = this.getContractSigner(address)
			const _opt = rest
			let  gasLimit: any = null
			try {
				gasLimit = await __signer.estimateGas.updateTokenGatedDrop(allowedNftToken,dropStage,_opt)
			} catch (error) {
			console.log(error)
			}
			const options = Object.assign({
				gasLimit
			}, _opt)

			return __signer.updateTokenGatedDrop(allowedNftToken,dropStage,options)

		};
		Abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CreatorPayoutAddressCannotBeZeroAddress","type":"error"},{"inputs":[],"name":"DuplicateFeeRecipient","type":"error"},{"inputs":[],"name":"DuplicatePayer","type":"error"},{"inputs":[],"name":"FeeRecipientCannotBeZeroAddress","type":"error"},{"inputs":[],"name":"FeeRecipientNotAllowed","type":"error"},{"inputs":[],"name":"FeeRecipientNotPresent","type":"error"},{"inputs":[{"internalType":"uint256","name":"got","type":"uint256"},{"internalType":"uint256","name":"want","type":"uint256"}],"name":"IncorrectPayment","type":"error"},{"inputs":[{"internalType":"uint256","name":"feeBps","type":"uint256"}],"name":"InvalidFeeBps","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[{"internalType":"address","name":"recoveredSigner","type":"address"}],"name":"InvalidSignature","type":"error"},{"inputs":[{"internalType":"uint256","name":"got","type":"uint256"},{"internalType":"uint256","name":"maximum","type":"uint256"}],"name":"InvalidSignedEndTime","type":"error"},{"inputs":[{"internalType":"uint256","name":"got","type":"uint256"},{"internalType":"uint256","name":"minimumOrMaximum","type":"uint256"}],"name":"InvalidSignedFeeBps","type":"error"},{"inputs":[{"internalType":"uint256","name":"got","type":"uint256"},{"internalType":"uint256","name":"maximum","type":"uint256"}],"name":"InvalidSignedMaxTokenSupplyForStage","type":"error"},{"inputs":[{"internalType":"uint256","name":"got","type":"uint256"},{"internalType":"uint256","name":"maximum","type":"uint256"}],"name":"InvalidSignedMaxTotalMintableByWallet","type":"error"},{"inputs":[{"internalType":"uint256","name":"got","type":"uint256"},{"internalType":"uint256","name":"minimum","type":"uint256"}],"name":"InvalidSignedMintPrice","type":"error"},{"inputs":[{"internalType":"uint256","name":"got","type":"uint256"},{"internalType":"uint256","name":"minimum","type":"uint256"}],"name":"InvalidSignedStartTime","type":"error"},{"inputs":[],"name":"MintQuantityCannotBeZero","type":"error"},{"inputs":[{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"allowed","type":"uint256"}],"name":"MintQuantityExceedsMaxMintedPerWallet","type":"error"},{"inputs":[{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"maxSupply","type":"uint256"}],"name":"MintQuantityExceedsMaxSupply","type":"error"},{"inputs":[{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"maxTokenSupplyForStage","type":"uint256"}],"name":"MintQuantityExceedsMaxTokenSupplyForStage","type":"error"},{"inputs":[{"internalType":"uint256","name":"currentTimestamp","type":"uint256"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"endTimestamp","type":"uint256"}],"name":"NotActive","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"OnlyINonFungibleSeaDropToken","type":"error"},{"inputs":[],"name":"PayerCannotBeZeroAddress","type":"error"},{"inputs":[],"name":"PayerNotAllowed","type":"error"},{"inputs":[],"name":"PayerNotPresent","type":"error"},{"inputs":[],"name":"SignatureAlreadyUsed","type":"error"},{"inputs":[],"name":"SignedMintsMustRestrictFeeRecipients","type":"error"},{"inputs":[],"name":"SignerCannotBeZeroAddress","type":"error"},{"inputs":[],"name":"SignerNotPresent","type":"error"},{"inputs":[],"name":"TokenGatedDropAllowedNftTokenCannotBeDropToken","type":"error"},{"inputs":[],"name":"TokenGatedDropAllowedNftTokenCannotBeZeroAddress","type":"error"},{"inputs":[],"name":"TokenGatedDropStageNotPresent","type":"error"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"allowedNftToken","type":"address"},{"internalType":"uint256","name":"allowedNftTokenId","type":"uint256"}],"name":"TokenGatedNotTokenOwner","type":"error"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"allowedNftToken","type":"address"},{"internalType":"uint256","name":"allowedNftTokenId","type":"uint256"}],"name":"TokenGatedTokenIdAlreadyRedeemed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"bytes32","name":"previousMerkleRoot","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newMerkleRoot","type":"bytes32"},{"indexed":false,"internalType":"string[]","name":"publicKeyURI","type":"string[]"},{"indexed":false,"internalType":"string","name":"allowListURI","type":"string"}],"name":"AllowListUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"address","name":"feeRecipient","type":"address"},{"indexed":true,"internalType":"bool","name":"allowed","type":"bool"}],"name":"AllowedFeeRecipientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"address","name":"newPayoutAddress","type":"address"}],"name":"CreatorPayoutAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":false,"internalType":"string","name":"newDropURI","type":"string"}],"name":"DropURIUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":true,"internalType":"bool","name":"allowed","type":"bool"}],"name":"PayerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"indexed":false,"internalType":"struct PublicDrop","name":"publicDrop","type":"tuple"}],"name":"PublicDropUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"address","name":"feeRecipient","type":"address"},{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"uint256","name":"quantityMinted","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unitMintPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeBps","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dropStageIndex","type":"uint256"}],"name":"SeaDropMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"components":[{"internalType":"uint80","name":"minMintPrice","type":"uint80"},{"internalType":"uint24","name":"maxMaxTotalMintableByWallet","type":"uint24"},{"internalType":"uint40","name":"minStartTime","type":"uint40"},{"internalType":"uint40","name":"maxEndTime","type":"uint40"},{"internalType":"uint40","name":"maxMaxTokenSupplyForStage","type":"uint40"},{"internalType":"uint16","name":"minFeeBps","type":"uint16"},{"internalType":"uint16","name":"maxFeeBps","type":"uint16"}],"indexed":false,"internalType":"struct SignedMintValidationParams","name":"signedMintValidationParams","type":"tuple"}],"name":"SignedMintValidationParamsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"address","name":"allowedNftToken","type":"address"},{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint8","name":"dropStageIndex","type":"uint8"},{"internalType":"uint32","name":"maxTokenSupplyForStage","type":"uint32"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"indexed":false,"internalType":"struct TokenGatedDropStage","name":"dropStage","type":"tuple"}],"name":"TokenGatedDropStageUpdated","type":"event"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"getAllowListMerkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"getAllowedFeeRecipients","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"allowedNftToken","type":"address"},{"internalType":"uint256","name":"allowedNftTokenId","type":"uint256"}],"name":"getAllowedNftTokenIdIsRedeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"getCreatorPayoutAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"getFeeRecipientIsAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"payer","type":"address"}],"name":"getPayerIsAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"getPayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"getPublicDrop","outputs":[{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct PublicDrop","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"signer","type":"address"}],"name":"getSignedMintValidationParams","outputs":[{"components":[{"internalType":"uint80","name":"minMintPrice","type":"uint80"},{"internalType":"uint24","name":"maxMaxTotalMintableByWallet","type":"uint24"},{"internalType":"uint40","name":"minStartTime","type":"uint40"},{"internalType":"uint40","name":"maxEndTime","type":"uint40"},{"internalType":"uint40","name":"maxMaxTokenSupplyForStage","type":"uint40"},{"internalType":"uint16","name":"minFeeBps","type":"uint16"},{"internalType":"uint16","name":"maxFeeBps","type":"uint16"}],"internalType":"struct SignedMintValidationParams","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"getSigners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"getTokenGatedAllowedTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"allowedNftToken","type":"address"}],"name":"getTokenGatedDrop","outputs":[{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint8","name":"dropStageIndex","type":"uint8"},{"internalType":"uint32","name":"maxTokenSupplyForStage","type":"uint32"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct TokenGatedDropStage","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"feeRecipient","type":"address"},{"internalType":"address","name":"minterIfNotPayer","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"components":[{"internalType":"uint256","name":"mintPrice","type":"uint256"},{"internalType":"uint256","name":"maxTotalMintableByWallet","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"dropStageIndex","type":"uint256"},{"internalType":"uint256","name":"maxTokenSupplyForStage","type":"uint256"},{"internalType":"uint256","name":"feeBps","type":"uint256"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct MintParams","name":"mintParams","type":"tuple"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"mintAllowList","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"feeRecipient","type":"address"},{"internalType":"address","name":"minterIfNotPayer","type":"address"},{"components":[{"internalType":"address","name":"allowedNftToken","type":"address"},{"internalType":"uint256[]","name":"allowedNftTokenIds","type":"uint256[]"}],"internalType":"struct TokenGatedMintParams","name":"mintParams","type":"tuple"}],"name":"mintAllowedTokenHolder","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"feeRecipient","type":"address"},{"internalType":"address","name":"minterIfNotPayer","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mintPublic","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"feeRecipient","type":"address"},{"internalType":"address","name":"minterIfNotPayer","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"components":[{"internalType":"uint256","name":"mintPrice","type":"uint256"},{"internalType":"uint256","name":"maxTotalMintableByWallet","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"dropStageIndex","type":"uint256"},{"internalType":"uint256","name":"maxTokenSupplyForStage","type":"uint256"},{"internalType":"uint256","name":"feeBps","type":"uint256"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct MintParams","name":"mintParams","type":"tuple"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"mintSigned","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"string[]","name":"publicKeyURIs","type":"string[]"},{"internalType":"string","name":"allowListURI","type":"string"}],"internalType":"struct AllowListData","name":"allowListData","type":"tuple"}],"name":"updateAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"feeRecipient","type":"address"},{"internalType":"bool","name":"allowed","type":"bool"}],"name":"updateAllowedFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_payoutAddress","type":"address"}],"name":"updateCreatorPayoutAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"dropURI","type":"string"}],"name":"updateDropURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"payer","type":"address"},{"internalType":"bool","name":"allowed","type":"bool"}],"name":"updatePayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct PublicDrop","name":"publicDrop","type":"tuple"}],"name":"updatePublicDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"signer","type":"address"},{"components":[{"internalType":"uint80","name":"minMintPrice","type":"uint80"},{"internalType":"uint24","name":"maxMaxTotalMintableByWallet","type":"uint24"},{"internalType":"uint40","name":"minStartTime","type":"uint40"},{"internalType":"uint40","name":"maxEndTime","type":"uint40"},{"internalType":"uint40","name":"maxMaxTokenSupplyForStage","type":"uint40"},{"internalType":"uint16","name":"minFeeBps","type":"uint16"},{"internalType":"uint16","name":"maxFeeBps","type":"uint16"}],"internalType":"struct SignedMintValidationParams","name":"signedMintValidationParams","type":"tuple"}],"name":"updateSignedMintValidationParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"allowedNftToken","type":"address"},{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint8","name":"dropStageIndex","type":"uint8"},{"internalType":"uint32","name":"maxTokenSupplyForStage","type":"uint32"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct TokenGatedDropStage","name":"dropStage","type":"tuple"}],"name":"updateTokenGatedDrop","outputs":[],"stateMutability":"nonpayable","type":"function"}] 
}

