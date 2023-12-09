import React, {FC, useState} from 'react';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {Text} from '../../ui/text';
import {HorizontalPaddingScreen, fontSizes} from '../../styles/constants';
import styled from 'styled-components/native';
import {Textarea} from '../../ui/textarea';
import {Button} from '../../ui/buttons/button';
import {defaultColors} from '../../styles/colors';
import dayjs from 'dayjs';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useStore} from '../../stores';
import {useNavigation} from '@react-navigation/native';

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
  const {setMonthPlans} = useStore().diaryStore;
  const {goBack} = useNavigation();

  const currentMonth = dayjs().format('MMMM');

  const [reading, setReading] = useState('');
  const [memorization, setMemorization] = useState('');
  const [pray, setPray] = useState('');
  const [plans, setPlans] = useState('');

  const handleSubmit = async () => {
    setMonthPlans({reading, memorization, pray, plans}).finally(() => {
      goBack();
    });
  };

  return (
    <CommonScreenLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}>
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
              В течении месяца вы можете редактировать планы
            </Disclaimer>
            <Button onPress={handleSubmit}>Сохранить</Button>
          </FormField>
        </Root>
      </KeyboardAvoidingView>
    </CommonScreenLayout>
  );
};
