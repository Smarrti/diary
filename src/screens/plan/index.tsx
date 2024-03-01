import React, {FC, useCallback, useEffect, useState} from 'react';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {HorizontalPaddingScreen, fontSizes} from '../../styles/constants';
import styled from 'styled-components/native';
import {Text} from '../../ui/text';
import {useStore} from '../../stores';
import {getStringMonth} from '../../utils/dates';
import {defaultColors} from '../../styles/colors';
import {useFocusEffect} from '@react-navigation/native';
import {Notes} from '../../stores/diary';

const Root = styled.ScrollView`
  padding: 22px ${HorizontalPaddingScreen}px;
`;

const Title = styled(Text)`
  margin-bottom: 22px;
`;

const Field = styled.View`
  margin: 16px 0;
`;

export const PlanScreen: FC = ({}) => {
  const diaryStore = useStore().diaryStore;
  const currentMonth = getStringMonth(diaryStore.selectDate?.month ?? 0);

  const [plans, setPlansState] = useState<Notes | undefined>();

  const setPlans = useCallback(() => {
    setPlansState(diaryStore.state?.monthlyPlan.notes);
  }, [diaryStore.state?.monthlyPlan.notes]);

  useEffect(() => {
    setPlans();
  }, [setPlans]);

  useFocusEffect(() => {
    setPlans(); //TODO: убрать костыль c клонированием стэйта
  });

  return (
    <CommonScreenLayout>
      <Root>
        <Title fontSize={fontSizes.fs34} fontWeight={500}>
          Мои планы на {currentMonth}
        </Title>
        <Text italic fontSize={fontSizes.fs14} color={defaultColors.grayText}>
          Для смены месяца измените дату в календаре
        </Text>

        <Field>
          <Text>Чтение Библии</Text>
          <Text>{plans?.reading}</Text>
        </Field>
      </Root>
    </CommonScreenLayout>
  );
};
