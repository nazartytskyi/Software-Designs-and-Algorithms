import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number = 0;

  constructor(
    numberOfSlices: number,
    spoilet: boolean,
    value: number = 0,
    weight: number = 0
  ) {
    super("pizza", value, weight, spoilet);

    this.numberOfSlices = numberOfSlices;
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      return "You eat a slice of the pizza.";
    }

    this.setConsumed(true);

    return "";
  }
}
