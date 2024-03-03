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
import {ActionButtons} from './ui/actionButtons';

const Root = styled.ScrollView`
  padding: 22px ${HorizontalPaddingScreen}px;
`;

const Title = styled(Text)`
  margin-bottom: 22px;
`;

const Field = styled.View`
  margin-top: 16px;
`;

const FieldContentContainer = styled.View`
  background-color: ${defaultColors.background[2]};
  border-radius: 16px;
  margin-top: 12px;
  min-height: 200px;
  padding: 12px;
`;

const emptyFieldText = 'Поле не заполнено';

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

        <ActionButtons />

        <Field>
          <Text fontSize={fontSizes.fs18}>Чтение Библии</Text>
          <FieldContentContainer>
            <Text>{plans?.reading ?? emptyFieldText}</Text>
          </FieldContentContainer>
        </Field>
        <Field>
          <Text fontSize={fontSizes.fs18}>Заучивание наизусть</Text>
          <FieldContentContainer>
            <Text>{plans?.memorization ?? emptyFieldText}</Text>
          </FieldContentContainer>
        </Field>
        <Field>
          <Text fontSize={fontSizes.fs18}>Молитвенные нужды</Text>
          <FieldContentContainer>
            <Text>{plans?.pray ?? emptyFieldText}</Text>
          </FieldContentContainer>
        </Field>
        <Field>
          <Text fontSize={fontSizes.fs18}>Планы в служении</Text>
          <FieldContentContainer>
            <Text>{plans?.plans ?? emptyFieldText}</Text>
          </FieldContentContainer>
        </Field>
      </Root>
    </CommonScreenLayout>
  );
};
