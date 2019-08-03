import {LocalStorageService} from './localstorage/localstorage';



export class StorageService {

  public static instance = new StorageService();
  localStorage = LocalStorageService.getInstance();

  constructor() {

  }

  getItem(key, isJSONTYPE = false) {
    const data = this.localStorage.getItem(key);
    if (isJSONTYPE) {
      try {
        if (!!data) {
          return JSON.parse(data);
        }
      } catch (e) {
        return false;
      }
    }
    return this.localStorage.getItem(key);
  }

  setItem(key: string, val, isJSONTYPE = false) {
    if (isJSONTYPE && !!val) {
      try {
        this.localStorage.setItem(key, JSON.stringify(val));
        return true;
      } catch (e) {
        return false;
      }
    }
    this.localStorage.setItem(key, val);
    return true;
  }

}

