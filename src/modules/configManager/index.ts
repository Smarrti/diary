import {ConfigState} from '../../stores/configStore';
import {getEmptyConfig} from '../../utils/stateContent';
import {FileStorage, emptyFileContent} from '../fileStorage';

const defaultFileStorageId = 'config';

export class ConfigManager {
  private static instance: ConfigManager;

  private constructor() {}

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }

    return ConfigManager.instance;
  }

  public async createData() {
    const content = getEmptyConfig();
    const contentString = JSON.stringify(content);
    await this.setData(contentString);
    return contentString;
  }

  public async getData(): Promise<ConfigState> {
    const instance = FileStorage.getInstance();

    let configString = await instance.getFile(defaultFileStorageId);

    if (configString === emptyFileContent) {
      configString = await this.createData();
    }

    return JSON.parse(configString);
  }

  public async setData(content: string) {
    const instance = FileStorage.getInstance();
    await instance.setFile(defaultFileStorageId, content);
  }
}
