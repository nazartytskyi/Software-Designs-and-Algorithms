import { IShipper, ParcelType } from "../interfaces/interfaces";
import { Parcel } from "../Parcel";

export class PacificParcelShipper implements IShipper {
  public getCost(parcel: Parcel): number {
    const { weight } = parcel;

    switch (parcel.type) {
      case ParcelType.LETTER:
        return this.getLetterCost(weight);

      case ParcelType.PACKAGE:
        return this.getPackageCost(weight);

      case ParcelType.OVERSIZE:
        return this.getOversizeCost(weight);
    }
  }

  private getLetterCost(weight: number): number {
    return weight * 0.51;
  }

  private getPackageCost(weight: number): number {
    return weight * 0.19;
  }

  private getOversizeCost(weight: number): number {
    return this.getPackageCost(weight) + weight * 0.02;
  }
}
