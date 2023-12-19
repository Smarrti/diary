import {makeAutoObservable} from 'mobx';
import {DiaryManager} from '../modules/diaryManager';
import {cloneDeep} from 'lodash';
import {getTime} from '../utils/dates';
import {getEmptyDayNotes} from '../utils/stateContent';

interface DateInterface {
  createdAt: number;
  updatedAt: number;
}

interface Notes {
  [key: string]: string;
}

export interface DayReports extends DateInterface {
  dayNumber: number;
  notes: Notes;
}

interface MonthlyPlan extends DateInterface {
  notes: Notes;
}

interface Summary extends DateInterface {
  notes: Notes;
}

interface Date {
  year: number;
  month: number;
}

export interface DiaryState {
  dayReports: DayReports[];
  monthlyPlan: MonthlyPlan;
  summary: Summary;
  date: Date;
}

interface MonthPlansProps {
  reading: string;
  memorization: string;
  pray: string;
  plans: string;
}

interface DayNotesProps {
  notes: string;
  pray: string;
  plans: string;
}

export interface SelectDate {
  day: number;
  month: number;
  year: number;
}

export class DiaryStore {
  rootStore;
  stateId: string | undefined = undefined;
  state: DiaryState | undefined = undefined;
  selectDate: SelectDate | undefined = undefined;

  constructor(rootStore: any) {
    makeAutoObservable(this, {rootStore: false});
    this.rootStore = rootStore;
  }

  public getCloneState(): DiaryState | undefined {
    return cloneDeep(this.state);
  }

  public async setState(
    id: string,
    state: DiaryState,
    setInStorage: boolean = true,
  ) {
    const instance = DiaryManager.getInstance();

    this.stateId = id;
    this.state = state;

    if (setInStorage) {
      await instance.setMonth(id, JSON.stringify(state));
    }
  }

  public getStateFromManager = async (id: string) => {
    const instance = DiaryManager.getInstance();
    const state = await instance.getMonth(id);

    this.setState(id, state, false);
  };

  public setMonthPlans = async ({
    reading,
    memorization,
    pray,
    plans,
  }: MonthPlansProps) => {
    const cloneState = this.getCloneState();

    if (!cloneState || !this.stateId) {
      return;
    }

    cloneState.monthlyPlan.updatedAt = getTime();
    cloneState.monthlyPlan.notes.reading = reading;
    cloneState.monthlyPlan.notes.memorization = memorization;
    cloneState.monthlyPlan.notes.pray = pray;
    cloneState.monthlyPlan.notes.plans = plans;

    this.setState(this.stateId, cloneState);
  };

  public getDayNotes = async (day: number) => {
    const index = this.state?.dayReports.findIndex(
      dayReport => dayReport.dayNumber === day,
    );

    const cloneState = this.getCloneState()!;

    if (index === -1 || index === undefined) {
      const newIndex = cloneState?.dayReports.push(getEmptyDayNotes(day)) - 1;
      this.setState(this.stateId!, cloneState);
      return this.state?.dayReports[newIndex];
    }

    return this.state?.dayReports[index];
  };

  // public setDayNotes = async ({notes, pray, plans}: DayNotesProps) => {
  //   const cloneState = this.getCloneState();

  //   if (!cloneState || !this.stateId) {
  //     return;
  //   }

  //   cloneState.dayReports.updatedAt = getTime();
  //   cloneState.monthlyPlan.notes.reading = reading;
  //   cloneState.monthlyPlan.notes.memorization = memorization;
  //   cloneState.monthlyPlan.notes.pray = pray;
  //   cloneState.monthlyPlan.notes.plans = plans;

  //   this.setState(this.stateId, cloneState);
  // };

  public setSelectDate(date: SelectDate) {
    this.selectDate = date;
  }
}
