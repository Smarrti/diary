import React, {FC} from 'react';
import {TouchableOpacity, TouchableWithoutFeedbackProps} from 'react-native';

interface Props extends TouchableWithoutFeedbackProps {
  children: React.ReactNode;
}

export const ButtonWrapper: FC<Props> = ({children, ...rest}) => {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};
