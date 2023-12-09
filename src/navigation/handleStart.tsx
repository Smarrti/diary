import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {defaultScreenOptions} from './common';
import {HandleStartScreen} from '../screens/handleStart';

const Stack = createNativeStackNavigator();

export const HandleStartNavigator: FC = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{...defaultScreenOptions, headerShown: false}}>
      <Stack.Screen name={Routes.HandleStart} component={HandleStartScreen} />
    </Stack.Navigator>
  );
};
