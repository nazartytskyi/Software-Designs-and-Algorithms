import { MockGUI } from "./mocks/MockGUI";
import { Shipment } from "./Shipment";

export class Client {
  private static instance: Client;
  private GUI: MockGUI;

  private constructor(gui: MockGUI) {
    if (Client.instance) {
      throw new Error("Error: Use Client.getInstance() instead of new.");
    }

    Client.instance = this;
    this.GUI = gui;
  }

  public static getInstance(GUI: MockGUI): Client {
    if (!Client.instance) {
      Client.instance = new Client(GUI);
    }

    return Client.instance;
  }

  public setGUI(GUI: MockGUI) {
    this.GUI = GUI;
  }

  public onShip(shipment: Shipment): void {
    console.log(shipment.ship());
  }
}
