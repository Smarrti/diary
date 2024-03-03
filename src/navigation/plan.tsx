import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Routes} from './routes';
import {defaultScreenOptions} from './common';
import {PlanNavigatorType} from './navigationTypes';
import {CalendarScreen} from '../screens/calendar';
import {PlanScreen} from '../screens/plan';
import {MonthlyPlan} from '../screens/monthlyPlan';

const Plan = createNativeStackNavigator<PlanNavigatorType>();

export const PlanNavigator: FC = ({}) => {
  return (
    <Plan.Navigator
      screenOptions={{...defaultScreenOptions, headerBlurEffect: 'regular'}}>
      <Plan.Screen
        component={PlanScreen}
        name={Routes.Plan}
        options={{headerShown: false}}
      />
      <Plan.Screen
        component={CalendarScreen}
        name={Routes.Calendar}
        options={{headerTitle: 'Календарь'}}
      />
      <Plan.Screen
        component={MonthlyPlan}
        name={Routes.MonthlyPlan}
        options={{headerTitle: 'Планы на месяц'}}
      />
    </Plan.Navigator>
  );
};
