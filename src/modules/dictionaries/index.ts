import {BibleQuoteData} from './BibleQuote';
import {BiblePlanData} from './BiblePlan';

export enum DictionaryData {
  Bible = 'Bible',
  BiblePlace = 'BibleQuote',
}

//функция возвращает 28 день, если год высокосный. так как на 29 февраля нет в плане
const checkDay = (day: number, month: number) => {
  if (day === 29 && month === 2) {
    return 28;
  }

  return day;
};

export const getTodayData = (
  type: DictionaryData,
  day: number,
  month: number,
) => {
  const newDay = checkDay(day, month);

  if (type === DictionaryData.BiblePlace) {
    return BibleQuoteData[month][newDay];
  }

  return BiblePlanData[month][newDay];
};
