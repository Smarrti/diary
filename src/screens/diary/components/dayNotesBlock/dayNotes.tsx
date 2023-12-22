import React, {FC} from 'react';
import {Notes} from '../../../../stores/diary';
import {Text} from '../../../../ui/text';
import {fontSizes} from '../../../../styles/constants';
import styled from 'styled-components/native';

interface IProps {
  notes: Notes;
}

const Title = styled(Text).attrs({fontSize: fontSizes.fs20})`
  margin-bottom: 12px;
`;

const NoteText = styled(Text)`
  margin-bottom: 16px;
`;

export const DayNotes: FC<IProps> = ({notes}) => {
  return (
    <>
      <Title>Заметки на сегодня</Title>
      <NoteText>{notes.notes}</NoteText>
      <Title>Молитвенные нужды</Title>
      <NoteText>{notes.pray}</NoteText>
      <Title>Планы в служении</Title>
      <NoteText>{notes.plans}</NoteText>
    </>
  );
};
