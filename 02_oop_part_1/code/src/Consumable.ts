import { Item } from "./Item";

export abstract class Consumable extends Item {
  private consumed: boolean = false;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.spoiled = spoiled;
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }

  public use(): string {
    if (!this.isSpoiled() && !this.isSpoiled()) {
      return this.eat();
    }

    if (this.isConsumed()) {
      return `There is nothing left of the ${this.getName()} to consume`;
    }

    const spoiledMsg: string = this.isSpoiled() ? `\nYou feel sick.` : ``;

    return `You eat the ${this.getName()}.${spoiledMsg}`;
  }

  abstract eat(): string;
}
