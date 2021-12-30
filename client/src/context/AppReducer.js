export default (state, action) => {
  switch (action.type) {
    case "GET_MACHINES":
      return {
        ...state,
        loading: false,
        machines: action.payload,
      };
    case "MACHINE_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
