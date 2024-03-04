import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {defaultColors} from '../../../styles/colors';
import {IconProps} from './type';

export const Notes: FC<IconProps> = ({color, width, height}) => {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color ?? defaultColors.disabled}
      fill="none">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
      <Path d="M9 7l6 0" />
      <Path d="M9 11l6 0" />
      <Path d="M9 15l4 0" />
    </Svg>
  );
};
