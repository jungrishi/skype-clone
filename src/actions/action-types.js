import { SET_ACTIVE_USER_ID } from "../utils/globals";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});
