import React, {FC} from 'react';
import {Notes} from '../../../../stores/diary';
import {Text} from '../../../../ui/text';
import {fontSizes} from '../../../../styles/constants';
import styled from 'styled-components/native';
import {defaultColors} from '../../../../styles/colors';

interface IProps {
  notes: Notes;
}

const Title = styled(Text).attrs({fontSize: fontSizes.fs20})`
  margin-bottom: 12px;
`;

const NoteText = styled(Text)`
  margin-bottom: 16px;
`;

const EmptyContent = styled(NoteText).attrs({
  color: defaultColors.grayText,
  italic: true,
})``;

const TextContent = ({content}: {content?: string}) => {
  if (!content) {
    return <EmptyContent>Не заполнено</EmptyContent>;
  }

  return <NoteText>{content}</NoteText>;
};

export const DayNotes: FC<IProps> = ({notes}) => {
  return (
    <>
      <Title>Заметки на сегодня</Title>
      <TextContent content={notes.notes} />
      <Title>Молитвенные нужды</Title>
      <TextContent content={notes.pray} />
      <Title>Планы в служении</Title>
      <TextContent content={notes.plans} />
    </>
  );
};
