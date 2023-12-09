import {DiaryState} from '../../stores/diary';
import {FileStorage, emptyFileContent} from '../fileStorage';

const defaultMonthContent: DiaryState = {
  dayReports: [],
  monthlyPlan: {createdAt: 0, updatedAt: 0, notes: {}},
  summary: {createdAt: 0, updatedAt: 0, notes: {}},
};

export class DiaryManager {
  private static instance: DiaryManager;

  private constructor() {}

  public static getInstance(): DiaryManager {
    if (!DiaryManager.instance) {
      DiaryManager.instance = new DiaryManager();
    }

    return DiaryManager.instance;
  }

  public async createMonth(id: string) {
    const content = JSON.stringify(defaultMonthContent);
    await this.setMonth(id, JSON.stringify(defaultMonthContent));

    return content;
  }

  public async getMonth(id: string): Promise<DiaryState> {
    const instance = FileStorage.getInstance();

    let monthString = await instance.getFile(id);

    if (monthString === emptyFileContent) {
      monthString = await this.createMonth(id);
    }

    return JSON.parse(monthString);
  }

  public async setMonth(id: string, content: string) {
    const instance = FileStorage.getInstance();
    await instance.setFile(id, content);
  }
}
