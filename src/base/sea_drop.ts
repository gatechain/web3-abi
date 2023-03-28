import ContractAbstract, {BigNumber, IOption} from "web3-contract/dist/contract/ContractAbstract.js";
import SeaDropAbi from '../abis/SeaDrop.json'


export class SeaDropContract extends ContractAbstract {
    public static contractName = 'SeaDropContract';
		Abi = SeaDropAbi 
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
}

