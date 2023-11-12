import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {OnboardingScreen} from '../screens/onboarding';
import {defaultScreenOptions} from './common';

const Stack = createNativeStackNavigator();

export const OnboardingNavigator: FC = ({}) => {
  return (
    <Stack.Navigator screenOptions={{...defaultScreenOptions}}>
      <Stack.Screen name={Routes.Onboarding} component={OnboardingScreen} />
    </Stack.Navigator>
  );
};
