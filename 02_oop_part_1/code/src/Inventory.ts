import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[];

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;

  public sort(comparator?: ItemComparator): void {
    switch (typeof comparator) {
      case "object":
        this.items = this.items.sort(comparator.compare);
      case "undefined":
        this.items = this.items.sort((a, b) => {
          const aValue = a.getValue();
          const bValue = b.getValue();

          if (aValue === bValue) {
            return 0;
          }

          return aValue > bValue ? 1 : -1;
        });
    }
  }

  public toString(): string {
    return this.items.join(", ");
  }
}
