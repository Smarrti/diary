import dayjs from 'dayjs';

export const getTime = () => dayjs().valueOf();
export const getYear = () => dayjs().year();
export const getMonth = () => dayjs().month() + 1;
export const getDay = () => dayjs().date();

// Принимает месяц в виде чилса, и выдает месяц в виде строки
export const getStringMonth = (month: number) =>
  dayjs(`1-${month}`, 'D-M').format('MMMM');
