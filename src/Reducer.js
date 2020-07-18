export const Reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INC":
      console.log("inc");
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
