import RNFS from 'react-native-fs';

const defaultEncoding = 'utf8';
const defaultPlace = RNFS.DocumentDirectoryPath;
const defaultExtension = '.json';
const emptyFileContent = JSON.stringify({});

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

  public setFile(path: string, content: string) {
    return RNFS.writeFile(getPath(path), content, defaultEncoding);
  }

  public async getFile(path: string) {
    const newPath = getPath(path);

    if (!(await this.exists(newPath))) {
      await this.setFile(newPath, emptyFileContent);
    }

    return RNFS.readFile(getPath(newPath), defaultEncoding);
  }

  public exists(path: string) {
    return RNFS.exists(getPath(path));
  }

  public remove(path: string) {
    return RNFS.unlink(getPath(path));
  }
}
