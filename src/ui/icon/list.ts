import {ArrowRight} from './icons/arrowRight';
import {Calendar} from './icons/calendar';
import {CrossClose} from './icons/crossClose';
import {Edit} from './icons/edit';

export enum iconEnum {
  arrowRight = 'arrowRight',
  crossClose = 'crossClose',
  calendar = 'calendar',
  edit = 'edit',
}

export const iconList = {
  [iconEnum.arrowRight]: ArrowRight,
  [iconEnum.crossClose]: CrossClose,
  [iconEnum.calendar]: Calendar,
  [iconEnum.edit]: Edit,
};
