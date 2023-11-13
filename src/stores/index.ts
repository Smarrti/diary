import {createContext, useContext} from 'react';
import {ConfigStore, ConfigStoreType} from './configStore';

class RootStore {
  configStore: ConfigStoreType;

  constructor() {
    this.configStore = new ConfigStore(this);
  }
}

const store = new RootStore();

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
