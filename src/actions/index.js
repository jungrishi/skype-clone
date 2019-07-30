import { SEND_MESSAGE, SET_TYPING_VALUE } from "../utils/globals";

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
