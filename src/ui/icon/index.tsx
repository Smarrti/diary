import React, {FC} from 'react';
import {iconEnum, iconList} from './list';
import {View} from 'react-native';

interface Props {
  name: iconEnum;
}

export const Icon: FC<Props> = ({name}) => {
  return <View>{iconList[name]({})}</View>;
};
