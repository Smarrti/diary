import React, {FC} from 'react';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {KeyboardView} from '../../ui/keyboardView';
import styled from 'styled-components/native';
import {Text} from '../../ui/text';
import {HorizontalPaddingScreen, fontSizes} from '../../styles/constants';
import {getStringMonth} from '../../utils/dates';
import {useStore} from '../../stores';
import {Textarea} from '../../ui/textarea';
import {Button} from '../../ui/buttons/button';

interface IProps {}

const Root = styled(KeyboardView)`
  padding: 22px ${HorizontalPaddingScreen}px;
`;

const Title = styled(Text)`
  margin-bottom: 22px;
`;

const StyledTextarea = styled(Textarea)`
  min-height: 250;
  margin-bottom: 16px;
`;

export const SummaryScreen: FC<IProps> = ({}) => {
  const {state} = useStore().diaryStore;
  const currentMonth = getStringMonth(state?.date.month ?? 0);

  const handleSubmit = () => {};

  return (
    <CommonScreenLayout>
      <Root>
        <Title fontSize={fontSizes.fs34} fontWeight={500}>
          Итоги за {currentMonth}
        </Title>
        <StyledTextarea />
        <Button onPress={handleSubmit}>Сохранить</Button>
      </Root>
    </CommonScreenLayout>
  );
};
