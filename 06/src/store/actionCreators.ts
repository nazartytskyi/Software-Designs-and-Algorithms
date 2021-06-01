import { Store } from "./Store";
import actions from "./actionsTypes";

export const setView = (dispatch: Store["dispatch"]) => (viewType: string) =>
  dispatch({ type: actions.SET_VIEW, payload: viewType });

export const setMode = (dispatch: Store["dispatch"]) => (mode: string) =>
  dispatch({ type: actions.SET_MODE, payload: mode });

export const setRate =
  (dispatch: Store["dispatch"], isSync: boolean = false) =>
  (rate: number, currencyShortName: string) =>
    dispatch(
      { type: actions.SET_RATE, payload: { rate, currencyShortName } },
      isSync
    );

export const setCurrancy =
  (dispatch: Store["dispatch"]) => (value: number, currencyShortName: string) =>
    dispatch({
      type: actions.SET_CURRANCIE_VALUE,
      payload: { value, currencyShortName },
    });

export const setEUR =
  (dispatch: Store["dispatch"]) =>
  (value: number, currencyShortName: string) => {
    dispatch({
      type: actions.SET_CONVERTER_EUR_VALUE,
      payload: { value, currencyShortName },
    });
  };
