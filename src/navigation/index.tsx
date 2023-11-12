import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingNavigator} from './onboarding';
import {MainNavigator} from './main';

const NavigatorContent: FC = () => {
  const isOnboarded = false;

  if (!isOnboarded) {
    return <OnboardingNavigator />;
  }

  return <MainNavigator />;
};

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <NavigatorContent />
    </NavigationContainer>
  );
};
