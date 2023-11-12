import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface IProps {}

export const PlanScreen: FC<IProps> = ({}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>Plan screen</Text>
    </View>
  );
};
