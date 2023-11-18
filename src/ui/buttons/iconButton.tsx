import React, {FC} from 'react';
import {ButtonWrapper} from './buttonWrapper';
import {Text} from '../text';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';
import {TouchableWithoutFeedbackProps} from 'react-native';

interface Props extends TouchableWithoutFeedbackProps {}

export const IconButton: FC<Props> = props => {
  return (
    <ButtonWrapper {...props}>
      <Container>
        <Text color={defaultColors.whiteText}>{'>'}</Text>
      </Container>
    </ButtonWrapper>
  );
};

const Container = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${defaultColors.primary};
`;
