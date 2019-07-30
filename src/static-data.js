import shortid from "shortid"; // shortid.generate() returns a unique "short" id
import faker from "faker"; // faker is used for generating random fake data.
import _ from "lodash"; // lodash is a utility lib for Javascript
import { NO_OF_USERS } from "./utils/globals";
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences

const users = generateUsers(NO_OF_USERS);

function generateUsers(numberOfUsers) {
  const check = Array.from({ length: numberOfUsers }, () => generateUser());
  return check; //return array of users
}

export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: faker.internet.avatar(),
    status: txtgen.sentence(),
    user_id: shortid.generate(),
  };
}

export const contacts = _.mapKeys(users, "user_id");
console.log(contacts);

export const getMessages = messagesPerUser => {
  let messages = {};
  users.forEach(user => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), "number"),
    };
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  user: users,
  messages: getMessages(10),
  typing: "",
  contacts,
  activeUserId: null,
};

console.log(getMessages);

function generateMsg(number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.random.boolean(),
  };
}

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}
