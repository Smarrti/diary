import React, {FC} from 'react';
import {ButtonWrapper} from './buttonWrapper';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';
import {TouchableWithoutFeedbackProps} from 'react-native';
import {Text} from '../text';

interface Props extends TouchableWithoutFeedbackProps {
  children: string;
}

export const Button: FC<Props> = ({children, ...rest}) => {
  return (
    <ButtonWrapper {...rest}>
      <Container>
        <Text color={defaultColors.whiteText}>{children}</Text>
      </Container>
    </ButtonWrapper>
  );
};

const Container = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${defaultColors.primary};
`;
