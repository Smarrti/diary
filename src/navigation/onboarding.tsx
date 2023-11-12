import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';

const Stack = createNativeStackNavigator();

export const OnboardingNavigator: FC = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Onboarding} component={HomeScreen} />
    </Stack.Navigator>
  );
};
