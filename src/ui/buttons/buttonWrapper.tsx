import React, {FC} from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';

interface Props extends TouchableWithoutFeedbackProps {
  children: React.ReactNode;
}

export const ButtonWrapper: FC<Props> = ({children, ...rest}) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback {...rest}>{children}</TouchableNativeFeedback>
    );
  }

  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};
