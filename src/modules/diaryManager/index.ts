import {DiaryState} from '../../stores/diary';
import {FileStorage, emptyFileContent} from '../fileStorage';
import {getMonth, getYear} from '../../utils/dates';
import {getEmptyMonth} from '../../utils/stateContent';

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
    const content = getEmptyMonth();
    const [month, year] = id.split('-');
    content.date.year = Number(year);
    content.date.month = Number(month);
    const contentString = JSON.stringify(content);
    await this.setMonth(id, contentString);

    return contentString;
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
