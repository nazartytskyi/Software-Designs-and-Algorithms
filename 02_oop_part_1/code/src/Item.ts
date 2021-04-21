import { Comparable } from "./Comparable";

let id = 0;

export abstract class Item implements Comparable<Item> {
  static get numberOfItems(): number {
    return id;
  }

  private id: number;
  private value: number;
  private name: string;
  private weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = id++;
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  static reset(): void {
    id = 0;
  }

  abstract use(): void;

  public compareTo(other: Item): number {
    const otherValue: number = other.getValue();

    if (this.value !== otherValue) {
      return this.value > otherValue ? 1 : -1;
    }

    const otherName: string = other.getName();

    return this.name.localeCompare(otherName, undefined, {
      sensitivity: "base",
    });
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getName(): string {
    return this.name;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setValue(price: number): void {
    this.value = price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }
}
