import React, {FC, ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

interface IProps {
  children: ReactNode;
}

export const KeyboardView: FC<IProps> = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      {children}
    </KeyboardAvoidingView>
  );
};
