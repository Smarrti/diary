import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Text} from '../../../ui/text';

interface IProps {}

const Root = styled.View`
  margin: 40px 24px 20px;
`;

export const Thought: FC<IProps> = ({}) => {
  return (
    <Root>
      <Text italic>
        Спокойное и терпеливое ожидание приводит верующих к таким высотам, о
        которых они даже не могли и думать!
      </Text>
    </Root>
  );
};
