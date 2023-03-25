export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileNameSelector = profileNameSelector;
    this._profileDescriptionSelector = profileDescriptionSelector;
  }
  setUserInfo(userName, description) {
    this._profileNameSelector.textContent = userName;
    this._profileDescriptionSelector.textContent = description;
  }
  getUserInfo() {
    return {
      name: this._profileNameSelector.textContent,
      description: this._profileDescriptionSelector.textContent,
    };
  }
}
