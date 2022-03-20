export class UserInfo {
    constructor({ profileTitleSelector, profilesubTitleSelector }) {
      this._name = profileTitleSelector;
      this._jobs = profilesubTitleSelector;
    }
  
    getUserInfo() { 
      const userData = {
        name: this._name.textContent,
        job: this._jobs.textContent,
      };
  
      return userData;
    }
  
    setUserInfo(newProfileName, newProfileJobs) {
      this._name.textContent = newProfileName;
      this._jobs.textContent = newProfileJobs;
    }
  };
  