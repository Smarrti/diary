import dayjs from 'dayjs';

export const getTime = () => dayjs().valueOf();
export const getYear = () => dayjs().year();
export const getMonth = () => dayjs().month() + 1;
export const getDay = () => dayjs().date();
