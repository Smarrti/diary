import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {Routes} from './routes';
import {defaultTabbarScreenOptions} from './common';
import {DiaryNavigator} from './diary';
import {PlanNavigator} from './plan';
import {Icon, IconListProps} from '../ui/icon';
import {iconEnum} from '../ui/icon/list';

const Tab = createBottomTabNavigator();

export const MainNavigator: FC = ({}) => {
  return (
    <Tab.Navigator screenOptions={defaultTabbarScreenOptions}>
      <Tab.Screen
        name={Routes.TabDiary}
        component={DiaryNavigator}
        options={{
          tabBarLabel: 'Ежедневник',
          tabBarIcon: ({color, size}) => (
            <TabIcon
              name={iconEnum.notes}
              width={size}
              height={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.TabPlan}
        component={PlanNavigator}
        options={{
          tabBarLabel: 'План',
          tabBarIcon: ({color, size}) => (
            <TabIcon
              name={iconEnum.check}
              width={size}
              height={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabIcon: FC<IconListProps> = props => {
  return <Icon {...props} />;
};
