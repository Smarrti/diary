import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Text} from '../../../ui/text';
import {fontSizes} from '../../../styles/constants';
import {Button} from '../../../ui/buttons/button';
import {useNavigation} from '@react-navigation/native';
import {PlanNavigatorType} from '../../../navigation/navigationTypes';
import {Routes} from '../../../navigation/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IProps {}

const Root = styled.View`
  align-items: center;
  margin-top: 64px;
`;

const ButtonView = styled.View`
  margin-top: 32px;
  width: 300px;
`;

export const EmptyPlans: FC<IProps> = ({}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<PlanNavigatorType>>();

  return (
    <Root>
      <Text fontSize={fontSizes.fs22}>Планов пока нет</Text>
      <ButtonView>
        <Button onPress={() => navigate(Routes.MonthlyPlan)}>
          Добавить планы
        </Button>
      </ButtonView>
    </Root>
  );
};
