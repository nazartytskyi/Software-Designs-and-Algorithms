import { App } from "./App";
import { currencies } from "./constants/currencies";
import { IState } from "./store/Store";

const initialState: IState = {
  viewType: "Number",
  lastUpdatedField: "",
  mode: "A",
  rate: {
    EUR: currencies.EUR.toEUR,
    BTC: currencies.BTC.toEUR,
    USD: currencies.USD.toEUR,
    RUB: currencies.RUB.toEUR,
    TRY: currencies.TRY.toEUR,
    UAH: currencies.UAH.toEUR,
  },
  converterValues: {
    BTC: { currency: 0, EUR: 0 },
    USD: { currency: 0, EUR: 0 },
    RUB: { currency: 0, EUR: 0 },
    TRY: { currency: 0, EUR: 0 },
    UAH: { currency: 0, EUR: 0 },
  },
};

new App(initialState).start();
