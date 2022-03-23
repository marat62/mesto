export class UserInfo {
    constructor({ profileTitle, profilesubTitle }) {
      this._name = profileTitle;
      this._jobs = profilesubTitle;
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
  