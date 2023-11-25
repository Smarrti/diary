import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {DiaryScreen} from '../screens/diary';
import {Routes} from './routes';
import {defaultScreenOptions} from './common';
import {MonthlyPlan} from '../screens/monthlyPlan';
import {DiaryNavigatorType} from './navigationTypes';

const DiaryStack = createNativeStackNavigator<DiaryNavigatorType>();

export const DiaryNavigator: FC = ({}) => {
  return (
    <DiaryStack.Navigator screenOptions={defaultScreenOptions}>
      <DiaryStack.Screen component={DiaryScreen} name={Routes.Diary} />
      <DiaryStack.Screen component={MonthlyPlan} name={Routes.MonthlyPlan} />
    </DiaryStack.Navigator>
  );
};
