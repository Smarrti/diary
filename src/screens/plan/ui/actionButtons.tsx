import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ButtonWrapper} from '../../../ui/buttons/buttonWrapper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PlanNavigatorType} from '../../../navigation/navigationTypes';
import {Routes} from '../../../navigation/routes';
import {Icon} from '../../../ui/icon';
import {iconEnum} from '../../../ui/icon/list';
import {fontSizes} from '../../../styles/constants';
import {Text} from '../../../ui/text';
import {defaultColors} from '../../../styles/colors';

interface IProps {}

const Root = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const ButtonAction = styled(ButtonWrapper)`
  flex-direction: row;
  gap: 8px;
`;

export const ActionButtons: FC<IProps> = ({}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<PlanNavigatorType>>();

  return (
    <Root>
      <ButtonAction onPress={() => navigate(Routes.Calendar)}>
        <Icon name={iconEnum.calendar} />
        <Text fontSize={fontSizes.fs16} color={defaultColors.grayText}>
          Сменить месяц
        </Text>
      </ButtonAction>

      <ButtonAction onPress={() => navigate(Routes.MonthlyPlan)}>
        <Icon name={iconEnum.edit} />
        <Text fontSize={fontSizes.fs16} color={defaultColors.grayText}>
          Обновить планы
        </Text>
      </ButtonAction>

      <ButtonAction onPress={() => navigate(Routes.Summary)}>
        <Icon name={iconEnum.edit} />
        <Text fontSize={fontSizes.fs16} color={defaultColors.grayText}>
          Подвести итоги месяца
        </Text>
      </ButtonAction>
    </Root>
  );
};
