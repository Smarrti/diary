import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {DiaryScreen} from '../screens/diary';
import {Routes} from './routes';
import {defaultScreenOptions} from './common';
import {MonthlyPlan} from '../screens/monthlyPlan';
import {DiaryNavigatorType} from './navigationTypes';
import {DayNotes} from '../screens/dayNotes';
import {Icon} from '../ui/icon';
import {iconEnum} from '../ui/icon/list';
import {ButtonWrapper} from '../ui/buttons/buttonWrapper';
import {useNavigation} from '@react-navigation/native';
import {CalendarScreen} from '../screens/calendar';

const DiaryStack = createNativeStackNavigator<DiaryNavigatorType>();

export const DiaryNavigator: FC = ({}) => {
  return (
    <DiaryStack.Navigator
      screenOptions={{...defaultScreenOptions, headerBlurEffect: 'regular'}}>
      <DiaryStack.Screen
        component={DiaryScreen}
        name={Routes.Diary}
        options={{
          title: 'Ежедневник',
          headerRight: CalendarIcon,
        }}
      />
      <DiaryStack.Screen
        component={MonthlyPlan}
        name={Routes.MonthlyPlan}
        options={{headerTitle: 'Планы месяца'}}
      />
      <DiaryStack.Screen
        component={DayNotes}
        name={Routes.DayNotes}
        options={{headerTitle: 'Заметки'}}
      />
      <DiaryStack.Screen
        component={CalendarScreen}
        name={Routes.Calendar}
        options={{headerTitle: 'Каледарь'}}
      />
    </DiaryStack.Navigator>
  );
};

const CalendarIcon = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<DiaryNavigatorType>>();

  return (
    <ButtonWrapper onPress={() => navigate(Routes.Calendar)}>
      <Icon name={iconEnum.calendar} />
    </ButtonWrapper>
  );
};
