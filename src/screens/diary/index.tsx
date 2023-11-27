import React, {FC} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {Routes} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryNavigatorType} from '../../navigation/navigationTypes';

export const DiaryScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiaryNavigatorType>>();

  const handleButton = () => {
    navigation.push(Routes.MonthlyPlan);
  };

  return (
    <CommonScreenLayout>
      <ScrollView>
        <Text>Ежедневник</Text>
        <Button title="План на месяц" onPress={handleButton} />
      </ScrollView>
    </CommonScreenLayout>
  );
};
