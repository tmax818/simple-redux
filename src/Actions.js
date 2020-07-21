import * as ActionTypes from "./ActionTypes";

console.log(typeof ActionTypes, ActionTypes);

export const inc = () => ({ type: ActionTypes.INC });
export const dec = () => ({ type: "DEC" });
