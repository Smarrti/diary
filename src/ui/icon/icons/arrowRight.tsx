import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from '../../text';
import {defaultColors} from '../../../styles/colors';

interface Props {}

export const ArrowRight: FC<Props> = ({}) => {
  return (
    <View>
      <Text color={defaultColors.whiteText}>{'>'}</Text>
    </View>
  );
};
