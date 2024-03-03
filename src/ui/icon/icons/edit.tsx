import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {defaultColors} from '../../../styles/colors';

export const Edit: FC = ({}) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={defaultColors.disabled}
      fill="none">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path
        d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
        fill="none"
      />
      <Path
        d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
        fill="none"
      />
      <Path d="M16 5l3 3" fill="none" />
    </Svg>
  );
};
