import React, {FC, useEffect, useState} from 'react';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {useStore} from '../../stores';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DiaryNavigatorType} from '../../navigation/navigationTypes';
import {Routes} from '../../navigation/routes';
import dayjs from 'dayjs';
import {SelectDate} from '../../stores/diary';
import {KeyboardView} from '../../ui/keyboardView';
import styled from 'styled-components/native';
import {HorizontalPaddingScreen, fontSizes} from '../../styles/constants';
import {Textarea} from '../../ui/textarea';
import {Text} from '../../ui/text';
import {Button} from '../../ui/buttons/button';

type Props = NativeStackScreenProps<DiaryNavigatorType, Routes.DayNotes>;

const getTitle = (date: SelectDate) => {
  const day = dayjs({day: date.day, month: date.month - 1, year: date.year});

  if (day.isToday()) {
    return 'Заметки на сегодня';
  }

  return day.format('[Заметки на] D MMMM');
};

const Root = styled.ScrollView`
  padding: 22px ${HorizontalPaddingScreen}px;
`;

const FormField = styled.View`
  margin-bottom: 22px;
`;

const StyledTextarea = styled(Textarea)`
  margin-top: 8px;
  min-height: 200px;
`;

const PrayTextarea = styled(StyledTextarea)`
  min-height: 400px;
`;

export const DayNotes: FC<Props> = ({navigation}) => {
  const {selectDate, state} = useStore().diaryStore;
  console.log(state);

  useEffect(() => {
    if (selectDate) {
      navigation.setOptions({headerTitle: getTitle(selectDate)});
    }
  }, [navigation, selectDate]);

  const [notes, setNotes] = useState('');
  const [pray, setPray] = useState('');
  const [plans, setPlans] = useState('');

  const handleSubmit = () => {
    console.log(notes, pray, plans);
  };

  return (
    <CommonScreenLayout>
      <KeyboardView>
        <Root>
          <FormField>
            <Text fontSize={fontSizes.fs20}>Мысли</Text>
            <PrayTextarea
              fontSize={fontSizes.fs18}
              value={notes}
              onChangeText={setNotes}
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
            <Button onPress={handleSubmit}>Сохранить</Button>
          </FormField>
        </Root>
      </KeyboardView>
    </CommonScreenLayout>
  );
};
