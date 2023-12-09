import {createContext, useContext} from 'react';
import {ConfigStore} from './configStore';
import {DiaryStore} from './diary';

class RootStore {
  configStore: ConfigStore;
  diaryStore: DiaryStore;

  constructor() {
    this.configStore = new ConfigStore(this);
    this.diaryStore = new DiaryStore(this);
  }
}

const store = new RootStore();

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
