import {environment} from 'src/environments/environment';

export class LocalStorageService {

  private constructor() {

  }

  static getInstance() {
    return new LocalStorageService();
  }

  setItem(key: string, val: string) {
    try {
      (<any> window).localStorage.setItem(key, val);
    } catch (e) {
      if (!environment.production) {
        // console.log(e);
      }
    }
  }

  getItem(key: string) {

    try {
      return (<any> window).localStorage.getItem(key);

    } catch (e) {
      if (!environment.production) {
        // console.log(e);
      }
      return '';
    }
  }

}
