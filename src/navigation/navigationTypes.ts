import {Routes} from './routes';

export type DiaryScreenType = undefined;
export type MonthlyPlanScreenType = undefined;
export type PlanScreenType = undefined;

export type DiaryNavigatorType = {
  [Routes.Diary]: DiaryScreenType;
  [Routes.MonthlyPlan]: MonthlyPlanScreenType;
};