import React, {FC} from 'react';
import {Notes} from '../../../../stores/diary';
import {ShadowBlock} from '../../../../ui/shadowBlock';
import styled from 'styled-components/native';
import {DayNotes} from './dayNotes';
import {EmptyNotes} from './emptyNotes';

const StyledShadowBlock = styled(ShadowBlock)`
  padding: 24px;
  margin-bottom: 34px;
`;

interface Props {
  notes: Notes;
}

export const DayNotesBlock: FC<Props> = ({notes}) => {
  const hasDayNotes = !!(notes.notes || notes.pray || notes.plans);

  return (
    <StyledShadowBlock>
      {hasDayNotes ? <DayNotes notes={notes} /> : <EmptyNotes />}
    </StyledShadowBlock>
  );
};
