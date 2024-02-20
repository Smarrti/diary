import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
} from 'react-native';

export const KeyboardView: FC<KeyboardAvoidingViewProps> = ({
  children,
  ...rest
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      {...rest}>
      {children}
    </KeyboardAvoidingView>
  );
};
