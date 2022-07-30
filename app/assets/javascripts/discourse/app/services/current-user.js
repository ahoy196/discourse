import User from "discourse/models/user";

export default class CurrentUserService {
  static isServiceFactory = true;

  static create() {
    return User.current();
  }
}
