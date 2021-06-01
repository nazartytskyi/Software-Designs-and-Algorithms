import { InputElement } from "./InputElement";
import { Currency } from "../Currency";
import { IState, Store } from "../store/Store";

import { setCurrancy, setRate, setEUR } from "../store/actionCreators";

export class CurrencyConverterElement {
  private currencyFrom: Currency;
  private currencyTo: Currency;
  private rateInput: InputElement;
  private fromInput: InputElement;
  private toInput: InputElement;

  constructor(currencyFrom: Currency, currencyTo: Currency, viewType: string) {
    const store = Store.getInstance();
    this.currencyFrom = currencyFrom;
    this.currencyTo = currencyTo;

    this.rateInput = new InputElement(
      viewType === "range" ? "readonly" : "number",
      (value: string) => {
        setRate(store.dispatch, true)(+value, this.currencyTo.getNameShort());

        const cur = this.currencyFrom.to(this.currencyTo.getNameShort());
        this.currencyTo.setValue(+cur);
        setCurrancy(store.dispatch)(cur, this.currencyTo.getNameShort());
      }
    );
    this.rateInput.setValue(
      store.getState().rate[this.currencyTo.getNameShort()].toString()
    );

    this.fromInput = new InputElement(viewType, (value: string) => {
      this.currencyFrom.setValue(+value);
      setEUR(store.dispatch)(+value, this.currencyTo.getNameShort());

      const cur = this.currencyFrom.to(this.currencyTo.getNameShort());
      this.currencyTo.setValue(+cur);
      setCurrancy(store.dispatch)(cur, this.currencyTo.getNameShort());
    });

    this.toInput = new InputElement(viewType, (value: string) => {
      this.currencyTo.setValue(+value);
      setCurrancy(store.dispatch)(+value, this.currencyTo.getNameShort());

      const eur = this.currencyTo.to(this.currencyFrom.getNameShort());
      this.currencyFrom.setValue(+eur);
      setEUR(store.dispatch)(eur, this.currencyTo.getNameShort());
    });

    store.subscribe(this.onStateChanged);
  }

  private onStateChanged = (state: IState): void => {
    const { viewType, lastUpdatedField, converterValues } = state;

    if (viewType === "Range") {
      this.rateInput.getHtmlElement().setAttribute("readonly", "true");
    } else {
      this.rateInput.getHtmlElement().removeAttribute("readonly");
    }

    this.fromInput.setType(viewType);
    this.toInput.setType(viewType);

    this.currencyTo.setValue(
      converterValues[this.currencyTo.getNameShort()].currency
    );

    this.currencyFrom.setValue(
      converterValues[this.currencyTo.getNameShort()].EUR
    );

    this.toInput.setValue(
      converterValues[this.currencyTo.getNameShort()].currency.toString()
    );

    this.fromInput.setValue(
      converterValues[this.currencyTo.getNameShort()].EUR.toString()
    );

    if (lastUpdatedField === "EUR") {
      const cur = this.currencyFrom.to(this.currencyTo.getNameShort());
      setCurrancy(Store.getInstance().dispatch)(
        cur,
        this.currencyTo.getNameShort()
      );
    }
  };

  getHtmlElement(): HTMLElement {
    const fieldset: HTMLElement = document.createElement("fieldset");
    fieldset.innerHTML = `
      <legend> ${this.currencyTo.getNameLong()}</legend>
      <div>1 ${this.currencyFrom.getNameLong()} is <span class="rate-input"></span> ${this.currencyTo.getNameLong()}</div>
      
      <div class="to-input">
       ${this.currencyTo.getNameLong()} <br /> 
      </div>

      <div class="from-input">
        ${this.currencyFrom.getNameLong()} <br />
      </div>
    `;

    fieldset
      .querySelector(".rate-input")
      .append(this.rateInput.getHtmlElement());

    fieldset.querySelector(".to-input").append(this.toInput.getHtmlElement());

    fieldset
      .querySelector(".from-input")
      .append(this.fromInput.getHtmlElement());

    return fieldset;
  }
}
