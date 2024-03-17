import {makeAutoObservable, runInAction} from 'mobx';
import {ConfigManager} from '../modules/configManager';

export interface ConfigState {
  isOnboarded: boolean;
  history: string[];
}

export class ConfigStore {
  rootStore;
  isAppInitialized = false;
  state: ConfigState | undefined = undefined;

  constructor(rootStore: any) {
    makeAutoObservable(this, {rootStore: false});
    this.rootStore = rootStore;
  }

  getStateFromManager = async () => {
    const instance = ConfigManager.getInstance();
    const state = await instance.getData();

    runInAction(() => {
      this.state = state;
    });
  };

  setState = async () => {
    const instance = ConfigManager.getInstance();
    instance.setData(JSON.stringify(this.state));
  };

  setAppInitialized = () => {
    this.isAppInitialized = true;
  };

  setOnboarded = () => {
    if (!this.state) {
      return;
    }

    this.state.isOnboarded = true;
    this.setState();
  };

  pushHistory = (month: string) => {
    if (!this.state) {
      return;
    }

    this.state.history.push(month);
    this.setState();
  };
}
