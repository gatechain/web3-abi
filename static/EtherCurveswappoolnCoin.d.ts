declare const _default: (nCoin: any) => ({
    name: string;
    inputs: ({
        type: string;
        name: string;
        indexed: boolean;
        unit: string;
    } | {
        type: string;
        name: string;
        indexed: boolean;
        unit?: undefined;
    })[];
    anonymous: boolean;
    type: string;
    outputs?: undefined;
    constant?: undefined;
    payable?: undefined;
    stateMutability?: undefined;
    gas?: undefined;
} | {
    outputs: never[];
    inputs: {
        type: string;
        name: string;
    }[];
    constant: boolean;
    payable: boolean;
    type: string;
    name?: undefined;
    anonymous?: undefined;
    stateMutability?: undefined;
    gas?: undefined;
} | {
    name: string;
    outputs: {
        type: string;
        name: string;
    }[];
    inputs: {
        type: string;
        name: string;
    }[];
    constant: boolean;
    payable: boolean;
    type: string;
    anonymous?: undefined;
    stateMutability?: undefined;
    gas?: undefined;
} | {
    name: string;
    outputs: {
        type: string;
        unit: string;
        name: string;
    }[];
    inputs: never[];
    constant: boolean;
    payable: boolean;
    type: string;
    anonymous?: undefined;
    stateMutability?: undefined;
    gas?: undefined;
} | {
    name: string;
    outputs: never[];
    inputs: {
        type: string;
        name: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
    constant?: undefined;
    payable?: undefined;
    gas?: undefined;
} | {
    name: string;
    outputs: {
        type: string;
        name: string;
    }[];
    inputs: {
        type: string;
        name: string;
    }[];
    stateMutability: string;
    type: string;
    gas: number;
    anonymous?: undefined;
    constant?: undefined;
    payable?: undefined;
})[];
export default _default;
