import {Platform} from 'react-native';

export const defaultScreenOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export const defaultTabbarScreenOptions = {
  ...defaultScreenOptions,
  tabBarHideOnKeyboard: Platform.OS === 'android',
};
