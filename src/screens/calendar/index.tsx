import React, {FC} from 'react';
import {Calendar, DateData} from 'react-native-calendars';
import {useStore} from '../../stores';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryNavigatorType} from '../../navigation/navigationTypes';
import {generateDiaryId} from '../../utils/generateDiaryId';
import {Routes} from '../../navigation/routes';
import {reaction} from 'mobx';
import {defaultColors} from '../../styles/colors';
import {fonts} from '../../styles/constants';
import {Alert} from 'react-native';

interface IProps {}

export const CalendarScreen: FC<IProps> = ({}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<DiaryNavigatorType>>();

  const {diaryStore} = useStore();

  const selectedDateString = dayjs({
    day: diaryStore.selectDate?.day,
    month: diaryStore.selectDate?.month! - 1,
    year: diaryStore.selectDate?.year,
  }).format('YYYY-MM-DD');

  const onSelect = async (date: DateData) => {
    const {day, month, year} = date;

    if (
      dayjs().isBefore({day: date.day, month: date.month - 1, year: date.year})
    ) {
      Alert.alert('Календарь', 'Нет возможности открыть более позднюю дату');
      return;
    }

    const id = generateDiaryId(month, year);
    await diaryStore.getStateFromManager(id);

    diaryStore.setSelectDate({day, month, year});
  };

  reaction(
    () => diaryStore.selectDate,
    () => {
      navigate(Routes.Diary);
    },
  );

  return (
    <Calendar
      onDayPress={onSelect}
      current={selectedDateString}
      enableSwipeMonths
      markedDates={{
        [selectedDateString]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
      theme={{
        selectedDayBackgroundColor: defaultColors.primary,
        textDayFontFamily: fonts.main,
        textMonthFontFamily: fonts.main,
        textDayHeaderFontFamily: fonts.main,
        textDayFontWeight: '400',
        textMonthFontWeight: '400',
        textDayHeaderFontWeight: '400',
        arrowColor: defaultColors.primary,
        todayTextColor: defaultColors.primary,
      }}
    />
  );
};
