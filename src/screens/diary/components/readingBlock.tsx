import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Text} from '../../../ui/text';
import {defaultColors} from '../../../styles/colors';
import {fontSizes} from '../../../styles/constants';
import {Button} from '../../../ui/buttons/button';
import {View} from 'react-native';

interface IProps {}

const Root = styled.View`
  background-color: ${defaultColors.background[0]};
  border-radius: 12px;
  margin: 28px 0;
  transform: translateX(16px);
  ${defaultColors.shadow.ios}
`;

const Plan = styled.View`
  padding: 26px;
`;

const PlanHint = styled(Text)`
  margin-bottom: 8px;
`;

const Quote = styled.View`
  background-color: ${defaultColors.background[1]};
  border-top-width: 1px;
  border-top-color: ${defaultColors.borders};
  padding: 20px 35px 20px 26px;
`;

const QuoteText = styled(Text)`
  margin-bottom: 8px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 0;
  transform: translateY(-18px);
`;

const buttonContainerStyle = {
  height: 36,
  paddingHorizontal: 24,
};

export const ReadingBlock: FC<IProps> = ({}) => {
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
      <View>
        <StyledButton containerStyle={buttonContainerStyle}>
          Заполнить день
        </StyledButton>
      </View>
    </Root>
  );
};
