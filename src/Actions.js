import * as ActionTypes from "./ActionTypes";

export const inc = () => ({ type: ActionTypes.INC });
export const dec = () => ({ type: "DEC" });

export const reset = () => ({ type: "RESET", payload: 0 });
