import { BridgeV1Contract } from "../base/bridge_v1";
import { ethers } from "ethers";

export class SelfBridgeV1Contract extends BridgeV1Contract {
  public static contractName = "SelfBridgeV1Contract";
  constructor(props: any) {
    super(props);
  }
  getDepositData(amount: string, account: string): string {
    const data =
      "0x" +
      ethers.utils
        .hexZeroPad(ethers.BigNumber.from(amount).toHexString(), 32)
        .substring(2) + // Deposit Amount        (32 bytes)
      ethers.utils
        .hexZeroPad(ethers.utils.hexlify((account.length - 2) / 2), 32)
        .substring(2) + // len(recipientAddress) (32 bytes)
      account.substring(2);
    return data;
  }
}
