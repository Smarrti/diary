import React, {FC} from 'react';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';
import {ViewProps} from 'react-native';

export const CommonScreenLayout: FC<ViewProps> = ({children, ...rest}) => {
  return <Root {...rest}>{children}</Root>;
};

const Root = styled.SafeAreaView`
  background-color: ${defaultColors.background[0]};
  flex: 1;
`;
