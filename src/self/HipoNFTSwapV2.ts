import { HipoNFTSwapV2Contract } from "../base/hipo_n_f_t_swap_v2";
import { BigNumber } from "web3-contract";

interface IGetTradeBytesParam {
  marketId: string;
  continueIfFailed: string;
  callData: string;
  value: string;
}
export class SelfHipoNFTSwapV2Contract extends HipoNFTSwapV2Contract {
  public static contractName = "SelfHipoNFTSwapV2Contract";
  constructor(props: any) {
    super(props);
  }
  /*
   * get batchBuyWithETH tradeBytes
   *  @param marketId {String} eg: chainId=5(0001=seaport1.1; 0003=seaport1.4) contractAddress=0xd5f86520514ba89c9e9848b517ee08e8ac5fc967
   *  @param callData {String}
   *  @param  {String}
   *  @param value  {String} eg: 10000000000000
   *
   * */
  getTradeBytes({
    marketId,
    continueIfFailed,
    callData,
    value,
  }: IGetTradeBytesParam) {
    const { lengthHex, callData: item } = this.formatCallData(callData);
    const ethValue = this.formatEthValue(value);
    const itemLength = lengthHex;

    return "0x" + marketId + continueIfFailed + ethValue + itemLength + item;
  }

  formatEthValue(ethValue: string) {
    const hex = BigNumber.from(ethValue).toHexString().slice(2);
    const ethValueBytes = 21;
    const zeroStr = new Array(ethValueBytes * 2 - hex.length)
      .fill("0")
      .join("");
    return zeroStr + hex;
  }

  formatCallData(callData: string) {
    let _callData = callData.startsWith("0x") ? callData.slice(2) : callData;
    if (_callData.length % 2 !== 0) {
      _callData += "0";
    }
    const _lengthHex = BigNumber.from(_callData.length / 2 + "")
      .toHexString()
      .slice(2);
    const lengthBytes = 4;
    const lengthHex =
      new Array(lengthBytes * 2 - _lengthHex.length).fill("0").join("") +
      _lengthHex;

    return { lengthHex, callData: _callData };
  }
}
