export interface IConverterValues {
  currency: number;
  EUR: number;
}

export interface IState {
  viewType: string;
  mode: string;
  lastUpdatedField: string;
  rate: { [key: string]: number };
  converterValues: { [key: string]: IConverterValues };
}

export interface IAction {
  type: string;
  payload: any;
  field?: string;
}

export class Store {
  private static instance: Store;
  private state: IState;
  private subscriptions: Array<(state: IState) => void> = [];
  private rootReducer: (state: IState, action: IAction) => IState;

  private notify(): void {
    this.subscriptions.forEach((cb) => cb(this.state));
  }

  constructor(
    init: IState,
    rootReducer: (state: IState, action: IAction) => IState
  ) {
    if (Store.instance) {
      throw new Error(
        "State is already initialized, please use State.getInstance()"
      );
    }

    this.state = init;
    this.rootReducer = rootReducer;

    Store.instance = this;
  }

  public static getInstance(): Store {
    if (!Store.instance) {
      throw new Error(
        "Store is not initialized, please use new Store(state, reducer)"
      );
    }

    return Store.instance;
  }

  public subscribe(callback: (state: IState) => void): void {
    this.subscriptions.push(callback);
  }

  private updateState(action: IAction) {
    this.state = this.rootReducer(this.state, action);

    console.log(this.state, action);
    this.notify();
  }

  public dispatch = (action: IAction, isSync: boolean = false): void => {
    isSync
      ? this.updateState(action)
      : Promise.resolve().then(() => {
          this.updateState(action);
        });
  };

  public getState(): IState {
    return this.state;
  }
}
