import { Shipment } from "./../Shipment";

export class MockGUI {
  private static instance: MockGUI;
  private listeners: { [key: string]: [(state: Shipment) => void] } = {};

  constructor() {
    if (MockGUI.instance) {
      throw new Error("Error: Use MockGUI.getInstance() instead of new.");
    }

    MockGUI.instance = this;
  }

  public static getInstance(): MockGUI {
    if (!MockGUI.instance) {
      MockGUI.instance = new MockGUI();
    }

    return MockGUI.instance;
  }

  public on(eventType: string, callback: (state: Shipment) => void) {
    if (!this.listeners[eventType]) {
      this.listeners[eventType].push(callback);
    } else {
      this.listeners[eventType] = [callback];
    }
  }

  public trigger(eventType: string, state: Shipment) {
    this.listeners?.[eventType].forEach((callback) => callback(state));
  }
}
