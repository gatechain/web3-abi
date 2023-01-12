import ContractAbstract, { BigNumber, IOption } from "web3-contract/dist/contract/ContractAbstract.js";
export declare class ERC721Contract extends ContractAbstract {
    static contractName: string;
    Abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    constructor(props: any);
    approve(to: string, tokenId: BigNumber, opt?: IOption): Promise<any>;
    balanceOf(owner: string, opt?: IOption): any;
    getApproved(tokenId: BigNumber, opt?: IOption): any;
    getStage(_stage: BigNumber, opt?: IOption): any;
    getSystemAddress(opt?: IOption): any;
    hashToSign(sender: string, stage: BigNumber, quantity: BigNumber, price: BigNumber, max: BigNumber, opt?: IOption): any;
    isApprovedForAll(owner: string, operator: string, opt?: IOption): any;
    nextOwnerToExplicitlySet(opt?: IOption): any;
    numberMinted(stage: number | BigNumber, owner: string, opt?: IOption): any;
    owner(opt?: IOption): any;
    ownerOf(tokenId: BigNumber, opt?: IOption): any;
    renounceOwnership(opt?: IOption): Promise<any>;
    safeTransferFrom1(from: string, to: string, tokenId: BigNumber, opt?: IOption): Promise<any>;
    safeTransferFrom2(from: string, to: string, tokenId: BigNumber, _data: string, opt?: IOption): Promise<any>;
    saleMint(stage: BigNumber, quantity: BigNumber, price: BigNumber, max: BigNumber, hash: string, signature: string, opt?: IOption): Promise<any>;
    setApprovalForAll(operator: string, approved: boolean, opt?: IOption): Promise<any>;
    setStage(_stage: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _price: BigNumber, opt?: IOption): Promise<any>;
    setSystemAddress(_address: string, opt?: IOption): Promise<any>;
    supportsInterface(interfaceId: string, opt?: IOption): any;
    symbol(opt?: IOption): any;
    tokenByIndex(index: BigNumber, opt?: IOption): any;
    tokenOfOwnerByIndex(owner: string, index: BigNumber, opt?: IOption): any;
    tokenURI(tokenId: BigNumber, opt?: IOption): any;
    totalSupply(opt?: IOption): any;
    transferFrom(from: string, to: string, tokenId: BigNumber, opt?: IOption): Promise<any>;
    transferOwnership(newOwner: string, opt?: IOption): Promise<any>;
}
