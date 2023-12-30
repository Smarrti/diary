import {ArrowRight} from './icons/arrowRight';
import {Calendar} from './icons/calendar';
import {CrossClose} from './icons/crossClose';

export enum iconEnum {
  arrowRight = 'arrowRight',
  crossClose = 'crossClose',
  calendar = 'calendar',
}

export const iconList = {
  [iconEnum.arrowRight]: ArrowRight,
  [iconEnum.crossClose]: CrossClose,
  [iconEnum.calendar]: Calendar,
};
