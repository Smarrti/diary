import RNFS from 'react-native-fs';

const defaultEncoding = 'utf8';
const defaultPlace = RNFS.DocumentDirectoryPath;
const defaultExtension = '.json';
export const emptyFileContent = JSON.stringify({});

const getPath = (path: string) => `${defaultPlace}/${path}${defaultExtension}`;

export class FileStorage {
  private static instance: FileStorage;

  private constructor() {}

  public static getInstance(): FileStorage {
    if (!FileStorage.instance) {
      FileStorage.instance = new FileStorage();
    }

    return FileStorage.instance;
  }

  public async setFile(path: string, content: string) {
    return await RNFS.writeFile(getPath(path), content, defaultEncoding);
  }

  public async getFile(path: string) {
    const newPath = getPath(path);

    if (!(await this.exists(path))) {
      await this.setFile(path, emptyFileContent);
    }

    return await RNFS.readFile(newPath, defaultEncoding);
  }

  public async exists(path: string) {
    return await RNFS.exists(getPath(path));
  }

  public async remove(path: string) {
    return await RNFS.unlink(getPath(path));
  }
}
