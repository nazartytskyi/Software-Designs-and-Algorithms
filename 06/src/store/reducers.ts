import { IState, IAction, IConverterValues } from "./Store";
import actions from "./actionsTypes";

export function rootReducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case actions.SET_VIEW:
      return { ...state, viewType: action.payload, lastUpdatedField: "VIEW" };

    case actions.SET_MODE:
      return { ...state, mode: action.payload, lastUpdatedField: "MODE" };

    case actions.SET_RATE:
      return setRate(
        state,
        action.payload.currencyShortName,
        action.payload.rate
      );

    case actions.SET_CURRANCIE_VALUE:
      return setCurrancieValue(
        state,
        action.payload.value,
        action.payload.currencyShortName
      );

    case actions.SET_CONVERTER_EUR_VALUE:
      return state.mode === "A"
        ? updatedConverterEUR(
            state,
            action.payload.value,
            action.payload.currencyShortName
          )
        : updateAllConverterEUR(state, action.payload.value);
  }
}

const setRate = (
  state: IState,
  currencyShortName: string,
  rate: number
): IState => {
  return {
    ...state,
    rate: {
      ...state.rate,
      [currencyShortName]: rate,
    },
  };
};

const setCurrancieValue = (
  state: IState,
  value: number,
  currencyShortName: string
): IState => {
  return {
    ...state,
    lastUpdatedField: "CURR",
    converterValues: {
      ...state.converterValues,
      [currencyShortName]: {
        ...state.converterValues[currencyShortName],
        currency: value,
      },
    },
  };
};

const updatedConverterEUR = (
  state: IState,
  value: number,
  currencyShortName: string
): IState => {
  return {
    ...state,
    lastUpdatedField: "EUR",
    converterValues: {
      ...state.converterValues,
      [currencyShortName]: {
        ...state.converterValues[currencyShortName],
        EUR: value,
      },
    },
  };
};

const updateAllConverterEUR = (state: IState, value: number): IState => {
  const updatedConverterValues = Object.keys(state.converterValues).reduce(
    (acc: any, key: string) => {
      acc[key] = {
        ...state.converterValues[key],
        EUR: value,
      };

      return acc;
    },
    {}
  );

  return {
    ...state,
    lastUpdatedField: "EUR",
    converterValues: {
      ...updatedConverterValues,
    },
  };
};
