import React, {FC} from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {fontSizes, fontWeights, fonts} from '../../styles/constants';
import {defaultColors} from '../../styles/colors';

interface IProps extends TextInputProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  lineHeight?: string;
}

const Input = styled.TextInput<{
  fontSize: string;
  color: string;
  fontWeight: number;
  lineHeight?: string;
}>`
  font-family: ${fonts.main};
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize}px;
  font-weight: ${({fontWeight}) => fontWeight};
  ${({lineHeight}) => (lineHeight ? `line-height: ${lineHeight}px` : '')};
  border: 1px solid ${defaultColors.borders};
  border-radius: 16px;
  padding: 12px;
`;

export const Textarea: FC<IProps> = ({
  fontSize = fontSizes.fs16,
  color = defaultColors.text,
  fontWeight = fontWeights.fw400,
  lineHeight,
  ...rest
}) => {
  return (
    <Input
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      multiline
      textAlignVertical="top"
      {...rest}
    />
  );
};
