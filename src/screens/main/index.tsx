import React, {FC} from 'react';
import {Text} from 'react-native';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';

export const MainScreen: FC = ({}) => {
  return (
    <CommonScreenLayout>
      <Text>Ежедневник</Text>
    </CommonScreenLayout>
  );
};
