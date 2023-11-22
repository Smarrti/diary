import React, {FC} from 'react';
import {ButtonWrapper} from './buttonWrapper';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';
import {TouchableWithoutFeedbackProps} from 'react-native';
import {Icon} from '../icon';
import {iconEnum} from '../icon/list';

interface Props extends TouchableWithoutFeedbackProps {}

export const IconButton: FC<Props> = props => {
  return (
    <ButtonWrapper {...props}>
      <Container>
        <Icon name={iconEnum.arrowRight} />
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
