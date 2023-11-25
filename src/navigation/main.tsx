import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {Routes} from './routes';
import {PlanScreen} from '../screens/plan';
import {defaultTabbarScreenOptions} from './common';
import {DiaryNavigator} from './diary';

const Tab = createBottomTabNavigator();

export const MainNavigator: FC = ({}) => {
  return (
    <Tab.Navigator screenOptions={defaultTabbarScreenOptions}>
      <Tab.Screen
        name={Routes.TabDiary}
        component={DiaryNavigator}
        options={{tabBarLabel: 'Ежедневник'}}
      />
      <Tab.Screen
        name={Routes.TabPlan}
        component={PlanScreen}
        options={{tabBarLabel: 'План'}}
      />
    </Tab.Navigator>
  );
};
