import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE } from "../utils/globals";
import { SEND_MESSAGE } from "../utils/globals";

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value,
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
  },
});
