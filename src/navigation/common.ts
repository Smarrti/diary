import {Platform} from 'react-native';

export const defaultScreenOptions = {
  headerShown: true,
  gestureEnabled: true,
  headerBackTitleVisible: false,
};

export const defaultTabbarScreenOptions = {
  gestureEnabled: true,
  headerShown: false,
  tabBarHideOnKeyboard: Platform.OS === 'android',
};
