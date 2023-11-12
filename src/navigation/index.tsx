import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {OnboardingScreen} from '../screens/onboarding';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const NavigatorContent: FC = () => {
  const isOnboarded = true;

  if (!isOnboarded) {
    return <></>;
  }

  return <></>;
};

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <NavigatorContent />
    </NavigationContainer>
  );
};
