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
import {SummaryScreen} from '../screens/summary';
import styled from 'styled-components/native';

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
        options={{headerTitle: 'Планы на месяц'}}
      />
      <DiaryStack.Screen
        component={DayNotes}
        name={Routes.DayNotes}
        options={{headerTitle: 'Заметки'}}
      />
      <DiaryStack.Screen
        component={CalendarScreen}
        name={Routes.Calendar}
        options={{headerTitle: 'Календарь'}}
      />
      <DiaryStack.Screen
        component={SummaryScreen}
        name={Routes.Summary}
        options={{headerTitle: 'Итоги месяца'}}
      />
    </DiaryStack.Navigator>
  );
};

const Container = styled(ButtonWrapper)`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const CalendarIcon = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<DiaryNavigatorType>>();

  return (
    <Container onPress={() => navigate(Routes.Calendar)}>
      <Icon name={iconEnum.calendar} />
    </Container>
  );
};
