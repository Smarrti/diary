import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Icon} from '../../../../ui/icon';
import {iconEnum} from '../../../../ui/icon/list';
import {Text} from '../../../../ui/text';
import {defaultColors} from '../../../../styles/colors';

const Root = styled.View`
  padding: 24px 0;
  align-items: center;
  gap: 32px;
`;

export const EmptyNotes: FC = ({}) => {
  return (
    <Root>
      <Icon name={iconEnum.crossClose} />
      <Text color={defaultColors.grayText}>Ещё не было записей</Text>
    </Root>
  );
};
