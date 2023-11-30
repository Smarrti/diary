import {FileStorage} from '../fileStorage';

const defaultMonthContent = JSON.stringify({
  dayReports: {},
  monthlyPlan: {},
  summary: {},
});

export class FileManager {
  private static instance: FileManager;

  private constructor() {}

  public static getInstance(): FileManager {
    if (!FileManager.instance) {
      FileManager.instance = new FileManager();
    }

    return FileManager.instance;
  }

  public async getMonth(id: string) {
    const instance = FileStorage.getInstance();

    if (!(await instance.exists(id))) {
      console.log('create file');

      await instance.setFile(id, defaultMonthContent);
    }

    console.log('get');
    const content = await instance.getFile(id);
    return content;
  }

  public async setMonth(id: string, content: string) {}
}
