import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer);
export default store;

// const state = {
//   user: {
//     name: "user1",
//     email: "fake1.gmail.com",
//     profile_pic: "https://fake-img-url",
//     status: "staus of user 1",
//     user_id: "1",
//   },

//   messages: {
//     contact1: {
//       0: {
//         is_user_msg: false,
//         number: 0,
//         text: "Hello there",
//       },
//       1: {
//         is_user_msg: true,
//         number: 1,
//         text: "sup man",
//       },
//     },
//     contact2: {
//       0: {
//         is_user_msg: false,
//         number: 0,
//         text: "u at lf",
//       },
//       1: {
//         is_user_msg: true,
//         number: 1,
//         text: "ya bro",
//       },
//     },
//   },

//   typing: "",

//   contacts: {
//     contact1: {
//       name: "john-doe",
//       email: "fakeContact1.gmail.com",
//       profile_pic: "https://fake-img-url",
//       status: "bla bla bla",
//       user_id: "contact1",
//     },
//     contact2: {
//       name: "contact No 2",
//       email: "fakeContact1.gmail.com",
//       profile_pic: "https://fake-img-url",
//       status: "bla bla bla",
//       user_id: "contact2",
//     },
//   },
//   activeuserId: "contact2",
// };
