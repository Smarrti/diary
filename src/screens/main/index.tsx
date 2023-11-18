import React, {FC} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';

const Root = styled.SafeAreaView`
  background-color: ${defaultColors.background[0]};
  flex: 1;
`;

export const MainScreen: FC = ({}) => {
  return (
    <Root>
      <Text>Ежедневник</Text>
    </Root>
  );
};
