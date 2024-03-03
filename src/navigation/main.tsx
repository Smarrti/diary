import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {Routes} from './routes';
import {defaultTabbarScreenOptions} from './common';
import {DiaryNavigator} from './diary';
import {PlanNavigator} from './plan';

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
        component={PlanNavigator}
        options={{tabBarLabel: 'План'}}
      />
    </Tab.Navigator>
  );
};
