import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';
import {Platform, ViewProps} from 'react-native';

interface IProps extends ViewProps {
  children: ReactNode;
}

const Root = styled.View`
  background-color: ${defaultColors.background[0]};
  margin: 28px 0;
  ${Platform.OS === 'ios'
    ? defaultColors.shadow.ios
    : defaultColors.shadow.android}
`;

export const ShadowBlock: FC<IProps> = ({children, ...rest}) => {
  return <Root {...rest}>{children}</Root>;
};
