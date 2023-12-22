import React, {FC, useEffect, useState} from 'react';
import {useStore} from '../../../../stores';
import {DayReports} from '../../../../stores/diary';
import {ShadowBlock} from '../../../../ui/shadowBlock';
import styled from 'styled-components/native';
import {DayNotes} from './dayNotes';
import {EmptyNotes} from './emptyNotes';

const StyledShadowBlock = styled(ShadowBlock)`
  padding: 24px;
`;

export const DayNotesBlock: FC = ({}) => {
  const {getDayNotes, selectDate} = useStore().diaryStore;
  const [dayNotes, setDayNotes] = useState<DayReports | undefined>();

  useEffect(() => {
    const asyncEffect = async () => {
      if (!selectDate) {
        return;
      }

      const dayNotesFromStore = await getDayNotes(selectDate.day);
      dayNotesFromStore?.notes;
      setDayNotes(dayNotesFromStore);
    };

    asyncEffect();
  }, [getDayNotes, selectDate]);

  const hasDayNotes = !!(
    dayNotes &&
    dayNotes.notes &&
    (dayNotes.notes.notes || dayNotes.notes.pray || dayNotes.notes.plans)
  );

  return (
    <StyledShadowBlock>
      {hasDayNotes ? <DayNotes notes={dayNotes.notes} /> : <EmptyNotes />}
    </StyledShadowBlock>
  );
};
