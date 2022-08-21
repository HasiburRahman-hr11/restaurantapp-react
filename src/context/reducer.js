export const actionType = {
  SET_USER: "SET_USER",
  LOGOUT_USER: "LOGOUT_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
};

const reducer = (state, action) => {

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
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
