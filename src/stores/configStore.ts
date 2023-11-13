import {makeAutoObservable} from 'mobx';

export type ConfigStoreType = {
  isOnboarded: boolean;
};

export class ConfigStore {
  rootStore;
  isOnboarded = false;

  constructor(rootStore: any) {
    makeAutoObservable(this, {rootStore: false});
    this.rootStore = rootStore;
  }

  setOnboarded = () => {
    this.isOnboarded = true;
  };
}
