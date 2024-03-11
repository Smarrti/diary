import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Text} from '../../../ui/text';
import {getRandomQuote} from '../../../modules/dictionaries';

interface IProps {}

const Root = styled.View`
  margin: 40px 24px 20px;
`;

export const Thought: FC<IProps> = ({}) => {
  return (
    <Root>
      <Text italic>{getRandomQuote()}</Text>
    </Root>
  );
};
