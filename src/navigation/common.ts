import {Platform} from 'react-native';
import {defaultColors} from '../styles/colors';

export const defaultScreenOptions = {
  headerShown: true,
  gestureEnabled: true,
  headerBackTitleVisible: false,
};

export const defaultTabbarScreenOptions = {
  gestureEnabled: true,
  headerShown: false,
  tabBarHideOnKeyboard: Platform.OS === 'android',
  tabBarActiveTintColor: defaultColors.primary,
  tabBarInactiveTintColor: defaultColors.disabled,
};
