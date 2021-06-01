import { InputRadioElement } from "./InputElement";

export class Switcher {
  private radioInputs: Array<InputRadioElement>;
  private name: string;

  constructor(
    defaultValue: string,
    name: string,
    values: string[],
    onChange: (value: string) => void
  ) {
    this.name = name;
    this.radioInputs = values.map((value) => {
      const radioEl = new InputRadioElement("radio", onChange);
      radioEl.setName(name);
      radioEl.setValue(value);

      if (value === defaultValue) {
        radioEl.setChecked(true);
      }

      return radioEl;
    });
  }

  getHtmlElement(): HTMLElement {
    const div = document.createElement("div");
    div.innerHTML = `Select ${this.name} <br>`;
    div.classList.add("switcher");

    const labels = this.radioInputs.map((input) => {
      const label = document.createElement("label");
      label.append(input.getValue(), input.getHtmlElement());

      return label;
    });

    div.append(...labels);

    return div;
  }
}
