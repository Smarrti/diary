import {FC, useEffect} from 'react';
import {useStore} from '../../stores';
import {generateDiaryId} from '../../utils/generateDiaryId';
import {getDay, getMonth, getYear} from '../../utils/dates';

export const HandleStartScreen: FC = ({}) => {
  const {diaryStore, configStore} = useStore();

  const startAppHandle = async () => {
    const day = getDay();
    const month = getMonth();
    const year = getYear();

    const id = generateDiaryId(month, year);
    await diaryStore.getStateFromManager(id);

    diaryStore.setSelectDate({day, month, year});

    configStore.setAppInitialized();
  };

  useEffect(() => {
    startAppHandle();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
