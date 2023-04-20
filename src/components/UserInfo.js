export default class UserInfo {
  constructor({
    profileNameSelector,
    profileDescriptionSelector,
    avatarSelector,
  }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
    this._avatarElement = document.querySelector(avatarSelector);
  }
  setUserInfo({ name, about }) {
    this._profileNameElement.textContent = name;
    this._profileDescriptionElement.textContent = about;
  }
  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
    };
  }
  setAvatar({ avatar }) {
    this._avatarElement.src = avatar;
  }
  getAvatar() {
    return {
      avatar: this._avatarElement.src,
    };
  }
}
