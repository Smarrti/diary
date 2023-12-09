import {FC, useEffect} from 'react';
import {useStore} from '../../stores';
import dayjs from 'dayjs';
import {generateDiaryId} from '../../utils/generateDiaryId';

export const HandleStartScreen: FC = ({}) => {
  const {diaryStore, configStore} = useStore();

  const startAppHandle = async () => {
    const month = dayjs().month() + 1;
    const year = dayjs().year();
    // const month = 1;
    // const year = 2024;

    const id = generateDiaryId(month, year);
    await diaryStore.getStateFromManager(id);

    configStore.setAppInitialized();
  };

  useEffect(() => {
    setTimeout(() => {
      startAppHandle();
    }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
