import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {MainScreen} from '../screens/main';
import {Routes} from './routes';
import {PlanScreen} from '../screens/plan';
import {defaultTabbarScreenOptions} from './common';

const Tab = createBottomTabNavigator();

export const MainNavigator: FC = ({}) => {
  return (
    <Tab.Navigator screenOptions={defaultTabbarScreenOptions}>
      <Tab.Screen
        name={Routes.TabMain}
        component={MainScreen}
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
