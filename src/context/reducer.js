export const actionType = {
  SET_USER: "SET_USER",
  LOGOUT_USER: "LOGOUT_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionType.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
