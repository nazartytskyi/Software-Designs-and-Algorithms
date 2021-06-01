export class InputElement {
  protected element: HTMLInputElement;
  protected onChange: (value: string) => void;
  protected listeners: Array<{ type: string; callback: EventListener }> = [];

  constructor(type: string, onChange: (value: string) => void) {
    this.onChange = onChange;

    this.element = document.createElement("input");
    this.setType(type);
    this.addEventListeners();
  }

  public setType(type: string) {
    this.element.type = type;
  }

  private addEventListeners() {
    this.listeners.push({
      type: "change",
      callback: (e: InputEvent) => {
        this.onChange(this.element.value);
      },
    });

    this.listeners.forEach((listener) =>
      this.element.addEventListener(listener.type, listener.callback)
    );
  }

  private removeEventListeners() {
    this.listeners.forEach((listener) => {
      this.element.removeEventListener(listener.type, listener.callback);
    });
  }

  public removeElement() {
    this.removeEventListeners();
    this.element.remove();
  }

  public setValue(value: string): void {
    this.element.value = value;
  }

  public getValue(): string {
    return this.element.value;
  }

  public setName(value: string): void {
    this.element.name = value;
  }

  public getHtmlElement(): HTMLInputElement {
    return this.element;
  }
}

export class InputRadioElement extends InputElement {
  constructor(type: string, onChange: (value: string) => void) {
    super(type, onChange);
  }

  public setChecked(value: boolean) {
    this.getHtmlElement().checked = value;
  }
}
