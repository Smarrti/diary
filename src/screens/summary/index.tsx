import React, {FC, useEffect, useState} from 'react';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import styled from 'styled-components/native';
import {Text} from '../../ui/text';
import {HorizontalPaddingScreen, fontSizes} from '../../styles/constants';
import {getStringMonth} from '../../utils/dates';
import {useStore} from '../../stores';
import {Textarea} from '../../ui/textarea';
import {Button} from '../../ui/buttons/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

const StyledKeyboardView = styled(KeyboardAwareScrollView)`
  flex: 1;
  padding: 22px ${HorizontalPaddingScreen}px;
`;

const Title = styled(Text)`
  margin-bottom: 22px;
`;

const StyledTextarea = styled(Textarea)`
  margin-bottom: 16px;
  min-height: 400px;
`;

export const SummaryScreen: FC = ({}) => {
  const {state, setSummary, getSummary} = useStore().diaryStore;
  const currentMonth = getStringMonth(state?.date.month ?? 0);

  const {goBack} = useNavigation();

  const [summaryText, setSummaryText] = useState('');

  useEffect(() => {
    const summary = getSummary();
    setSummaryText(summary?.notes.notes ?? '');
  }, [getSummary]);

  const handleSubmit = () => {
    setSummary(summaryText).finally(() => goBack());
  };

  return (
    <CommonScreenLayout>
      <StyledKeyboardView>
        <Title fontSize={fontSizes.fs34} fontWeight={500}>
          Итоги за {currentMonth}
        </Title>
        <StyledTextarea value={summaryText} onChangeText={setSummaryText} />
        <Button onPress={handleSubmit}>Сохранить</Button>
      </StyledKeyboardView>
    </CommonScreenLayout>
  );
};
