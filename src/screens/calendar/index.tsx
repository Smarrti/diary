import React, {FC} from 'react';
import {Calendar, DateData} from 'react-native-calendars';
import {useStore} from '../../stores';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryNavigatorType} from '../../navigation/navigationTypes';
import {generateDiaryId} from '../../utils/generateDiaryId';
import {Routes} from '../../navigation/routes';

interface IProps {}

export const CalendarScreen: FC<IProps> = ({}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<DiaryNavigatorType>>();

  const {selectDate, setSelectDate, getDayNotes, getStateFromManager} =
    useStore().diaryStore;
  const selectedDateString = dayjs({
    day: selectDate?.day,
    month: selectDate?.month! - 1,
    year: selectDate?.year,
  }).format('YYYY-MM-DD');

  const onSelect = async (date: DateData) => {
    const {day, month, year} = date;
    const id = generateDiaryId(month, year);
    await getStateFromManager(id);

    setSelectDate({day, month, year});
    getDayNotes(day);
    navigate(Routes.Diary);
  };

  return (
    <Calendar
      onDayPress={onSelect}
      markedDates={{
        [selectedDateString]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
    />
  );
};
