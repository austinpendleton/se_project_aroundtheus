export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileNameElement = profileNameSelector;
    this._profileDescriptionSelector = profileDescriptionSelector;
  }
  setUserInfo(userName, description) {
    this._profileNameElement.textContent = userName;
    this._profileDescriptionSelector.textContent = description;
  }
  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionSelector.textContent,
    };
  }
}
