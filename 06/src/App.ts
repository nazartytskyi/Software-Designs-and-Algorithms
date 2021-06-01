import { Store, IState } from "./store/Store";
import { rootReducer } from "./store/reducers";

import { VIEW_MODES, CALC_MODES } from "./constants/constants";

import { Currency } from "./Currency";
import { CurrencyConverterElement } from "./elements/CurrencyConverterElement";
import { currencies } from "./constants/currencies";
import { Switcher } from "./elements/SwitcherElement";
import { setView, setMode } from "./store/actionCreators";

export class App {
  private store: Store;

  constructor(initialState: IState) {
    this.store = new Store(initialState, rootReducer);
  }

  private createConverters(currencies: string[]): CurrencyConverterElement[] {
    const converters: Array<CurrencyConverterElement> = [];

    currencies.forEach((currency: string) => {
      if (currency === "EUR") {
        return;
      }

      const fromCurrency = new Currency(currency, 1);
      const converter = new CurrencyConverterElement(
        new Currency("EUR", 1),
        fromCurrency,
        this.store.getState().viewType
      );

      converters.push(converter);
    });

    return converters;
  }

  public start() {
    document.body.append(
      new Switcher(
        this.store.getState().viewType,
        "View Mode",
        VIEW_MODES,
        (value) => setView(this.store.dispatch)(value)
      ).getHtmlElement(),

      new Switcher(
        this.store.getState().mode,
        "Calc Mode",
        CALC_MODES,
        (value) => setMode(this.store.dispatch)(value)
      ).getHtmlElement()
    );

    const converters = this.createConverters(Object.keys(currencies));
    converters.forEach((con) => document.body.append(con.getHtmlElement()));
  }
}
