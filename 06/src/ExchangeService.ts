import { Store } from "./store/Store";

export class ExchangeService {
  private static instance: ExchangeService;
  private rate: { [key: string]: number };

  private constructor() {
    if (ExchangeService.instance) {
      throw new Error(
        "ExchangeService is already initialized, please use ExchangeService.getInstance()"
      );
    }

    const store = Store.getInstance();
    this.rate = store.getState().rate;

    store.subscribe((state) => {
      this.rate = state.rate;
    });

    ExchangeService.instance = this;
  }

  public static getInstance(): ExchangeService {
    if (!ExchangeService.instance) {
      ExchangeService.instance = new ExchangeService();
    }

    return ExchangeService.instance;
  }

  private toEUR(from: string, value: number = 1): number {
    return value / this.rate[from];
  }

  public exchange(from: string, to: string, value: number): number {
    return this.toEUR(from, value) / this.toEUR(to);
  }
}
