import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingNavigator} from './onboarding';
import {MainNavigator} from './main';
import {useStore} from '../stores';
import {observer} from 'mobx-react-lite';

const NavigatorContent: FC = observer(() => {
  const {isOnboarded} = useStore().configStore;

  if (!isOnboarded) {
    return <OnboardingNavigator />;
  }

  return <MainNavigator />;
});

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <NavigatorContent />
    </NavigationContainer>
  );
};
