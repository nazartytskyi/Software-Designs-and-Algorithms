import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    const firstWeight: number = first.getWeight();
    const secondWeight: number = second.getWeight();

    if (firstWeight !== secondWeight) {
      return firstWeight > secondWeight ? 1 : 0;
    }

    return first.compareTo(second);
  }
}
