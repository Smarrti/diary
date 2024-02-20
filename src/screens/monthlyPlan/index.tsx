import React, {FC, useState} from 'react';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {Text} from '../../ui/text';
import {HorizontalPaddingScreen, fontSizes} from '../../styles/constants';
import styled from 'styled-components/native';
import {Textarea} from '../../ui/textarea';
import {Button} from '../../ui/buttons/button';
import {defaultColors} from '../../styles/colors';
import {useStore} from '../../stores';
import {useNavigation} from '@react-navigation/native';
import {KeyboardView} from '../../ui/keyboardView';
import {getStringMonth} from '../../utils/dates';

const Root = styled.ScrollView`
  padding: 22px ${HorizontalPaddingScreen}px;
`;

const Title = styled(Text)`
  margin-bottom: 22px;
`;

const Disclaimer = styled(Text)`
  margin-bottom: 22px;
`;

const FormField = styled.View`
  margin-bottom: 22px;
`;

const StyledTextarea = styled(Textarea)`
  margin-top: 8px;
  min-height: 200px;
`;

export const MonthlyPlan: FC = () => {
  const {setMonthPlans, state} = useStore().diaryStore;
  const {goBack} = useNavigation();

  const currentMonth = getStringMonth(state?.date.month ?? 0);

  const [reading, setReading] = useState(
    state?.monthlyPlan.notes.reading ?? '',
  );
  const [memorization, setMemorization] = useState(
    state?.monthlyPlan.notes.memorization ?? '',
  );
  const [pray, setPray] = useState(state?.monthlyPlan.notes.pray ?? '');
  const [plans, setPlans] = useState(state?.monthlyPlan.notes.plans ?? '');

  const handleSubmit = async () => {
    setMonthPlans({reading, memorization, pray, plans}).finally(() => {
      goBack();
    });
  };

  return (
    <CommonScreenLayout>
      <KeyboardView>
        <Root>
          <Title fontSize={fontSizes.fs34} fontWeight={500}>
            Мои планы на {currentMonth}
          </Title>

          <FormField>
            <Text fontSize={fontSizes.fs20}>Чтение Библии</Text>
            <StyledTextarea
              fontSize={fontSizes.fs18}
              value={reading}
              onChangeText={setReading}
            />
          </FormField>

          <FormField>
            <Text fontSize={fontSizes.fs20}>Заучивание наизусть</Text>
            <StyledTextarea
              fontSize={fontSizes.fs18}
              value={memorization}
              onChangeText={setMemorization}
            />
          </FormField>

          <FormField>
            <Text fontSize={fontSizes.fs20}>Молитвенные нужды</Text>
            <StyledTextarea
              fontSize={fontSizes.fs18}
              value={pray}
              onChangeText={setPray}
            />
          </FormField>

          <FormField>
            <Text fontSize={fontSizes.fs20}>Планы в служении</Text>
            <StyledTextarea
              fontSize={fontSizes.fs18}
              value={plans}
              onChangeText={setPlans}
            />
          </FormField>

          <FormField>
            <Disclaimer color={defaultColors.grayText}>
              Вы всегда можете вернуться, чтобы обновить свои планы
            </Disclaimer>
            <Button onPress={handleSubmit}>Сохранить</Button>
          </FormField>
        </Root>
      </KeyboardView>
    </CommonScreenLayout>
  );
};
