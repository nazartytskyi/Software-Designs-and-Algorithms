import { IShipper } from "./interfaces/interfaces";
import { Parcel } from "./Parcel";

export class Shipper {
  private strategy: IShipper;

  constructor(strategy: IShipper) {
    this.strategy = strategy;
  }

  public getCost(parcel: Parcel): number {
    return this.strategy.getCost(parcel);
  }
}
