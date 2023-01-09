import ContractAbstract from "web3-contract/dist/contract/ContractAbstract.js";
type BigNumber = any;
interface IOption {
    gasLimit?: Number;
    from?: string;
    value?: string;
}
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
    balanceOf(owner: string): any;
    getApproved(tokenId: BigNumber): any;
    getStage(_stage: BigNumber): any;
    getSystemAddress(): any;
    hashToSign(sender: string, stage: BigNumber, quantity: BigNumber, price: BigNumber, max: BigNumber): any;
    isApprovedForAll(owner: string, operator: string): any;
    nextOwnerToExplicitlySet(): any;
    numberMinted(stage: number | BigNumber, owner: string): any;
    owner(): any;
    ownerOf(tokenId: BigNumber): any;
    renounceOwnership(opt?: IOption): Promise<any>;
    safeTransferFrom1(from: string, to: string, tokenId: BigNumber, opt?: IOption): Promise<any>;
    safeTransferFrom2(from: string, to: string, tokenId: BigNumber, _data: string, opt?: IOption): Promise<any>;
    saleMint(stage: BigNumber, quantity: BigNumber, price: BigNumber, max: BigNumber, hash: string, signature: string, opt?: IOption): Promise<any>;
    setApprovalForAll(operator: string, approved: boolean, opt?: IOption): Promise<any>;
    setStage(_stage: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _price: BigNumber, opt?: IOption): Promise<any>;
    setSystemAddress(_address: string, opt?: IOption): Promise<any>;
    supportsInterface(interfaceId: string): any;
    symbol(): any;
    tokenByIndex(index: BigNumber): any;
    tokenOfOwnerByIndex(owner: string, index: BigNumber): any;
    tokenURI(tokenId: BigNumber): any;
    totalSupply(): any;
    transferFrom(from: string, to: string, tokenId: BigNumber, opt?: IOption): Promise<any>;
    transferOwnership(newOwner: string, opt?: IOption): Promise<any>;
}
export {};
