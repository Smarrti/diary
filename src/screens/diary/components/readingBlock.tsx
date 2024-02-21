import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Text} from '../../../ui/text';
import {defaultColors} from '../../../styles/colors';
import {fontSizes} from '../../../styles/constants';
import {Button} from '../../../ui/buttons/button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryNavigatorType} from '../../../navigation/navigationTypes';
import {ShadowBlock} from '../../../ui/shadowBlock';
import {isLastDayInMonth} from '../../../utils/dates';
import {useStore} from '../../../stores';

interface IProps {}

const Root = styled(ShadowBlock)`
  border-radius: 12px;
  transform: translateX(16px);
`;

const Plan = styled.View`
  padding: 26px;
`;

const PlanHint = styled(Text)`
  margin-bottom: 8px;
`;

const Quote = styled.View`
  border-bottom-left-radius: 12px;
  background-color: ${defaultColors.background[1]};
  border-top-width: 1px;
  border-top-color: ${defaultColors.borders};
  padding: 20px 35px 28px 26px;
`;

const QuoteText = styled(Text)`
  margin-bottom: 8px;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(18px);
`;

const StyledButton = styled(Button)<{isLast?: boolean}>`
  margin-left: 8px;
  ${defaultColors.shadow.ios}
`;

const buttonContainerStyle = {
  height: 36,
  paddingHorizontal: 24,
};

export const ReadingBlock: FC<IProps> = ({}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<DiaryNavigatorType>>();
  const {selectDate} = useStore().diaryStore;

  const isLastDay = isLastDayInMonth(
    selectDate?.day ?? 0,
    (selectDate?.month ?? 0) - 1,
  );

  return (
    <Root>
      <Plan>
        <PlanHint
          italic
          color={defaultColors.grayText}
          fontSize={fontSizes.fs14}>
          По плану
        </PlanHint>
        <Text fontSize={fontSizes.fs22}>Быт. 41</Text>
        <Text fontSize={fontSizes.fs22}>Мф. 13, 1–32</Text>
      </Plan>
      <Quote>
        <QuoteText fontSize={fontSizes.fs14}>
          Осанна Сыну Давидову! благословен Грядущий во имя Господне! осанна в
          вышних!
        </QuoteText>
        <Text fontSize={fontSizes.fs14}>Мф. 21, 9</Text>
      </Quote>
      <ButtonsContainer>
        {isLastDay && (
          <StyledButton
            containerStyle={buttonContainerStyle}
            onPress={() => navigate(Routes.Summary)}
            type="secondary">
            Подвести итоги
          </StyledButton>
        )}
        <StyledButton
          containerStyle={buttonContainerStyle}
          onPress={() => navigate(Routes.DayNotes)}>
          Заполнить день
        </StyledButton>
      </ButtonsContainer>
    </Root>
  );
};
