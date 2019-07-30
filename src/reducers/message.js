import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../utils/globals";

export default function message(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const lastMessageId = parseInt(Object.keys(allUserMsgs).length, 10);
      console.log(lastMessageId);
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [lastMessageId]: {
            lastMessageId,
            text: message,
            is_user_msg: true,
          },
        },
      };
    default:
      return state;
  }
}
