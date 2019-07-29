import { generateUser } from "../static-data";
console.log(generateUser());

export default function User(state = generateUser(), action) {
  return state;
}
