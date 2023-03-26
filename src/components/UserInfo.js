export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
  }
  setUserInfo(userName, description) {
    this._profileNameElement.textContent = userName;
    this._profileDescriptionElement.textContent = description;
  }
  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
    };
  }
}
