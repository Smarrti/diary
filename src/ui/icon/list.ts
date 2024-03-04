import {ArrowRight} from './icons/arrowRight';
import {Calendar} from './icons/calendar';
import {Check} from './icons/check';
import {CrossClose} from './icons/crossClose';
import {Edit} from './icons/edit';
import {Notes} from './icons/notes';

export enum iconEnum {
  arrowRight = 'arrowRight',
  crossClose = 'crossClose',
  calendar = 'calendar',
  edit = 'edit',
  notes = 'notes',
  check = 'check',
}

export const iconList = {
  [iconEnum.arrowRight]: ArrowRight,
  [iconEnum.crossClose]: CrossClose,
  [iconEnum.calendar]: Calendar,
  [iconEnum.edit]: Edit,
  [iconEnum.notes]: Notes,
  [iconEnum.check]: Check,
};
