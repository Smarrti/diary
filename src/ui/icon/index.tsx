import React, {FC} from 'react';
import {iconEnum, iconList} from './list';
import {View} from 'react-native';
import {IconProps} from './icons/type';

export interface IconListProps extends IconProps {
  name: iconEnum;
}

export const Icon: FC<IconListProps> = ({name, ...rest}) => {
  return <View>{iconList[name](rest)}</View>;
};
