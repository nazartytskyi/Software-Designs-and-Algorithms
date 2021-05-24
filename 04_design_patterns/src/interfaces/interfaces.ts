import { Parcel } from "../Parcel";

export interface IState {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: [string];
}

export interface IShipper {
  getCost(parcel: Parcel): number;
}

export enum ParcelType {
  LETTER = "LETTER",
  PACKAGE = "PACKAGE",
  OVERSIZE = "OVERSIZE",
}
