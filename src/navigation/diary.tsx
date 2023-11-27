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
    <DiaryStack.Navigator
      screenOptions={{...defaultScreenOptions, headerBlurEffect: 'regular'}}>
      <DiaryStack.Screen
        component={DiaryScreen}
        name={Routes.Diary}
        options={{title: 'Ежедневник'}}
      />
      <DiaryStack.Screen
        component={MonthlyPlan}
        name={Routes.MonthlyPlan}
        options={{headerTitle: 'Планы месяца'}}
      />
    </DiaryStack.Navigator>
  );
};
