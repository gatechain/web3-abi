import { BridgeV1Contract } from "../base/bridge_v1";
export declare class SelfBridgeV1Contract extends BridgeV1Contract {
    constructor(props: any);
    getDepositData(amount: string, account: string): string;
}
