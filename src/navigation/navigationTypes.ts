import {Routes} from './routes';

export type DiaryScreenType = undefined;
export type MonthlyPlanScreenType = undefined;
export type PlanScreenType = undefined;
export type DayNotesScreenType = undefined;
export type CalendarScreenType = undefined;
export type SummaryScreenType = undefined;

export type DiaryNavigatorType = {
  [Routes.Diary]: DiaryScreenType;
  [Routes.MonthlyPlan]: MonthlyPlanScreenType;
  [Routes.DayNotes]: DayNotesScreenType;
  [Routes.Calendar]: CalendarScreenType;
  [Routes.Summary]: SummaryScreenType;
};

export type PlanNavigatorType = {
  [Routes.Plan]: PlanScreenType;
  [Routes.Calendar]: CalendarScreenType;
  [Routes.MonthlyPlan]: MonthlyPlanScreenType;
  [Routes.Summary]: SummaryScreenType;
};
