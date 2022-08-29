import { fetchCartItems } from "../utils/fetchCartItems";
import { fetchLocalUser } from "../utils/fetchLocalUser";

const userInfo = fetchLocalUser();
const cartInfo = fetchCartItems();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
