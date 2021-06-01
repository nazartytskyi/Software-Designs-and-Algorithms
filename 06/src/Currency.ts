import { ExchangeService } from "./ExchangeService";
import { currencies } from "./constants/currencies";
import { debug } from "webpack";

export class Currency {
  private nameShort: string;
  private nameLong: string;
  private value: number;

  constructor(nameShort: string, value: number) {
    this.nameShort = nameShort;
    if (!currencies[nameShort]) {
      console.log(currencies, nameShort);
    }
    this.nameLong = currencies[nameShort].longName;

    this.value = value;
  }

  getNameLong(): string {
    return this.nameLong;
  }

  getNameShort(): string {
    return this.nameShort;
  }

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }

  to(to: string): number {
    return ExchangeService.getInstance().exchange(
      this.nameShort,
      to,
      this.value
    );
  }
}
