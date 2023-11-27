import {makeAutoObservable} from 'mobx';

export type ConfigStoreType = {
  isOnboarded: boolean;
  setOnboarded: () => void;
};

export class ConfigStore {
  rootStore;
  isOnboarded = true;

  constructor(rootStore: any) {
    makeAutoObservable(this, {rootStore: false});
    this.rootStore = rootStore;
  }

  setOnboarded = () => {
    this.isOnboarded = true;
  };
}
