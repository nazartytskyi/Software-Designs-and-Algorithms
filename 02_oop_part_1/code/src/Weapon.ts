import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;

  private baseDamage: number = 0;
  private damageModifier: number = 0;
  private baseDurability: number = 0;
  private durabilityModifier: number = 0;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  abstract polish(): void;

  public getBaseDamage(): number {
    return this.baseDamage;
  }

  public getDamageModifier(): number {
    return this.damageModifier;
  }

  public getBaseDurability(): number {
    return this.baseDurability;
  }

  public getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public setBaseDamage(baseDamage: number): void {
    this.baseDamage = baseDamage;
  }

  public setDamageModifier(damageModifier: number): void {
    this.damageModifier = damageModifier;
  }

  public setBaseDurability(baseDurability: number): void {
    this.baseDurability = baseDurability;
  }

  public setDurabilityModifier(durabilityModifier: number): void {
    this.durabilityModifier = durabilityModifier;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  public toString(): string {
    const name: string = this.getName();
    const value: number = this.getValue();
    const weight: string = this.getWeight().toFixed(2);
    const damage: string = this.getDamage().toFixed(2);
    const durability: string = (this.getDurability() * 100).toFixed(2);

    return `${name} − Value: ${value}, Weight : ${weight} , Damage : ${damage}, Durability : ${durability}%`;
  }

  public use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the hammer , it is broken.`;
    }

    const name: string = this.getName();
    const damage: string = this.getDamage().toFixed(2);

    this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;

    const breakMessage: string =
      this.getDurability() > 0 ? "" : "\nThe hammer breaks";

    return `You use the ${name} , dealing ${damage} points of damage${breakMessage}`;
  }
}
