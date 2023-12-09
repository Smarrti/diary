import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingNavigator} from './onboarding';
import {MainNavigator} from './main';
import {useStore} from '../stores';
import {observer} from 'mobx-react-lite';
import {HandleStartNavigator} from './handleStart';

const NavigatorContent: FC = observer(() => {
  const {isOnboarded, isAppInitialized} = useStore().configStore;

  if (!isAppInitialized) {
    return <HandleStartNavigator />;
  }

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
