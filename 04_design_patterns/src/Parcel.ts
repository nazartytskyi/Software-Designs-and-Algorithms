import { IState, ParcelType } from "./interfaces/interfaces";

export class Parcel {
  private _weight: number;
  private _type: ParcelType;

  constructor(state: IState) {
    this._weight = state.weight;
    this._type = this.getParcelType();
  }

  public get type(): ParcelType {
    return this._type;
  }

  public get weight(): number {
    return this._weight;
  }

  private getParcelType() {
    if (this._weight <= 15) {
      return ParcelType.LETTER;
    }

    if (this._weight <= 160) {
      return ParcelType.PACKAGE;
    }

    return ParcelType.OVERSIZE;
  }
}
