import {cloneDeep} from 'lodash';
import {DayReports, DiaryState} from '../stores/diary';

const defaultMonthContent: DiaryState = {
  dayReports: [],
  monthlyPlan: {createdAt: 0, updatedAt: 0, notes: {}},
  summary: {createdAt: 0, updatedAt: 0, notes: {}},
  date: {year: 0, month: 0},
};

const defaultDayNotes: DayReports = {
  dayNumber: 1,
  createdAt: 0,
  updatedAt: 0,
  notes: {},
};

export const getEmptyMonth = () => cloneDeep(defaultMonthContent);

export const getEmptyDayNotes = (dayNumber: number) => {
  const dayNotes = cloneDeep(defaultDayNotes);
  dayNotes.dayNumber = dayNumber;
  return dayNotes;
};
