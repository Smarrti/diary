import {makeAutoObservable} from 'mobx';

export class ConfigStore {
  rootStore;
  isAppInitialized = false;
  isOnboarded = false;

  constructor(rootStore: any) {
    makeAutoObservable(this, {rootStore: false});
    this.rootStore = rootStore;
  }

  setAppInitialized = () => {
    this.isAppInitialized = true;
  };

  setOnboarded = () => {
    this.isOnboarded = true;
  };
}
