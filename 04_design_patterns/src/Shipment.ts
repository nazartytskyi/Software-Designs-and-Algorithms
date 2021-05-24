import { AirEastShipper } from "./shippers/AirEastShipper";
import { PacificParcelShipper } from "./shippers/PacificParcelShipper";
import { ChicagoSprintShipper } from "./shippers/ChicagoSprintShipper";
import { IShipper, IState } from "./interfaces/interfaces";
import { Parcel } from "./Parcel";

export class Shipment {
  private static shipmentsCount: number = 0;

  private state: IState;
  private shipper: IShipper;

  constructor(state: IState) {
    this.state = state;
    this.shipper = this.getShipper();
  }

  public getShipmentID(): string {
    Shipment.shipmentsCount++;

    return String(this.state.shipmentId || Shipment.shipmentsCount);
  }

  public ship(): string {
    return `Shipment id: ${this.getShipmentID()}, from: ${
      this.state.fromZipCode
    } ${this.state.fromAddress}, to: ${this.state.toZipCode} ${
      this.state.toAddress
    }, cost: ${this.getCost()}\n ${this.getMarksDescription()}`;
  }

  private getMarksDescription(): string {
    return this.state.marks
      .map((mark) => `**MARK ${mark.toUpperCase()}**`)
      .join("\n");
  }

  private getCost(): number {
    const parcel = new Parcel(this.state);

    return this.shipper.getCost(parcel);
  }

  private getShipper(): IShipper {
    const shipperID: number = +this.state.fromZipCode[0];

    if (shipperID < 3) {
      return new AirEastShipper();
    }

    if (shipperID < 7) {
      return new ChicagoSprintShipper();
    }

    return new PacificParcelShipper();
  }
}
