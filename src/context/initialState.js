import { fetchLocalUser } from "../utils/fetchLocalUser";

const userInfo = fetchLocalUser();

export const initialState = {
  user: userInfo,
};
