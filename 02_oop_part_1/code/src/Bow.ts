import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const baseDurability: number = this.getBaseDurability();
    const durabilityModifier: number = this.getDurabilityModifier();
    const polishedDurabilityModifier =
      durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
    const effectiveDurability = baseDurability + polishedDurabilityModifier;

    if (effectiveDurability <= 1) {
      this.setDurabilityModifier(polishedDurabilityModifier);
    }
  }
}
