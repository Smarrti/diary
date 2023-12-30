import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {defaultColors} from '../../../styles/colors';

interface Props {}

export const Calendar: FC<Props> = ({}) => {
  return (
    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <Path
        d="M1 2H19V18H1V2Z"
        stroke={defaultColors.disabled}
        strokeWidth="2"
      />
      <Path d="M19 6H1" stroke={defaultColors.disabled} strokeWidth="2" />
      <Path d="M5 2V0" stroke={defaultColors.disabled} strokeWidth="2" />
      <Path d="M15 2V0" stroke={defaultColors.disabled} strokeWidth="2" />
      <Path
        d="M15 12H13V14H15V12Z"
        stroke={defaultColors.disabled}
        strokeWidth="2"
      />
    </Svg>
  );
};
