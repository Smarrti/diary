import React, {FC} from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import {fontSizes, fontWeights} from '../../styles/constants';
import {defaultColors} from '../../styles/colors';

interface Props extends TextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  lineHeight?: string;
}

export const Text: FC<Props> = ({
  children,
  fontSize = fontSizes.fs16,
  color = defaultColors.text,
  fontWeight = fontWeights.fw400,
  lineHeight,
  ...rest
}) => {
  return (
    <StyledText
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...rest}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<{
  fontSize: string;
  color: string;
  fontWeight: number;
  lineHeight?: string;
}>`
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize}px;
  font-weight: ${({fontWeight}) => fontWeight};
  ${({lineHeight}) => (lineHeight ? `line-height: ${lineHeight}px` : '')};
  font-family: Roboto;
`;
