import {FC, useEffect} from 'react';
import {useStore} from '../../stores';
import {generateDiaryId} from '../../utils/generateDiaryId';
import {getDay, getMonth, getYear} from '../../utils/dates';
import {Platform, StatusBar} from 'react-native';
import {defaultColors} from '../../styles/colors';
import BootSplash from 'react-native-bootsplash';

export const HandleStartScreen: FC = ({}) => {
  const {diaryStore, configStore} = useStore();

  const startAppHandle = async () => {
    StatusBar.setBarStyle('dark-content');
    Platform.OS === 'android' &&
      StatusBar.setBackgroundColor(defaultColors.background[0]);

    const day = getDay();
    const month = getMonth();
    const year = getYear();

    const id = generateDiaryId(month, year);
    await diaryStore.getStateFromManager(id);

    diaryStore.setSelectDate({day, month, year});
    diaryStore.getDayNotes(day);

    await configStore.getStateFromManager();
    configStore.setAppInitialized();
  };

  useEffect(() => {
    startAppHandle().finally(() => {
      setTimeout(() => BootSplash.hide({fade: true}));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
