import {BiblePlan} from './plan';

export const getBiblePlan = (day: number, month: number) => {
  if (day === 29 && month === 2) {
    return BiblePlan[2][28];
  }

  return BiblePlan[month][day];
};
