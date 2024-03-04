import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {defaultColors} from '../../../styles/colors';
import {IconProps} from './type';

export const Check: FC<IconProps> = ({color, width, height}) => {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={color ?? defaultColors.disabled}
      fill="none">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M9 11l3 3l8 -8" />
      <Path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
    </Svg>
  );
};
