import React, {FC, useCallback, useEffect, useState} from 'react';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {HorizontalPaddingScreen, fontSizes} from '../../styles/constants';
import styled from 'styled-components/native';
import {Text} from '../../ui/text';
import {useStore} from '../../stores';
import {getMonth, getStringMonth} from '../../utils/dates';
import {useFocusEffect} from '@react-navigation/native';
import {Notes} from '../../stores/diary';
import {ActionButtons} from './ui/actionButtons';
import {PlanFields} from './ui/planFields';
import {EmptyPlans} from './ui/emptyPlans';

const Root = styled.ScrollView`
  padding: 22px ${HorizontalPaddingScreen}px;
`;

const Title = styled(Text)`
  margin-bottom: 22px;
`;

export const PlanScreen: FC = ({}) => {
  const diaryStore = useStore().diaryStore;
  const currentMonth = getStringMonth(diaryStore.selectDate?.month ?? 0);

  const [plans, setPlansState] = useState<Notes | undefined>();
  const [summary, setSummary] = useState<Notes | undefined>();

  const setData = useCallback(() => {
    setPlansState(diaryStore.state?.monthlyPlan.notes);
    setSummary(diaryStore.state?.summary.notes);
  }, [diaryStore.state?.monthlyPlan.notes, diaryStore.state?.summary.notes]);

  useEffect(() => {
    setData();
  }, [setData]);

  useFocusEffect(() => {
    setData(); //TODO: убрать костыль c клонированием стэйта
  });

  const isEmptyPlans = !(
    plans &&
    (plans.reading || plans.memorization || plans.pray || plans.plans)
  );
  const isEmptyPlansInPresentMonth =
    diaryStore.selectDate?.month === getMonth() && isEmptyPlans;

  return (
    <CommonScreenLayout>
      <Root>
        <Title fontSize={fontSizes.fs34} fontWeight={500}>
          Мои планы на {currentMonth}
        </Title>

        {isEmptyPlansInPresentMonth ? (
          <EmptyPlans />
        ) : (
          <>
            <ActionButtons />
            <PlanFields plans={plans} summary={summary} />
          </>
        )}
      </Root>
    </CommonScreenLayout>
  );
};
