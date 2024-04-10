import React, {FC, useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {Routes} from '../../navigation/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DiaryNavigatorType} from '../../navigation/navigationTypes';
import RNFS from 'react-native-fs';
import {DiaryManager} from '../../modules/diaryManager';
import {FileStorage} from '../../modules/fileStorage';
import {useStore} from '../../stores';
import dayjs from 'dayjs';
import {generateDiaryId} from '../../utils/generateDiaryId';
import {DayReports, SelectDate} from '../../stores/diary';
import {ReadingBlock} from './components/readingBlock';
import {Thought} from './components/thought';
import {DayNotesBlock} from './components/dayNotesBlock';
import {useFocusEffect} from '@react-navigation/native';

type Props = NativeStackScreenProps<DiaryNavigatorType, Routes.Diary>;

const getTitle = (date: SelectDate) => {
  return dayjs({day: date.day, month: date.month - 1, year: date.year}).format(
    'D MMMM YYYY [г.]',
  );
};

export const DiaryScreen: FC<Props> = ({navigation}) => {
  const {getDayNotes, selectDate} = useStore().diaryStore;

  const [dayNotes, setDayNotes] = useState<DayReports | undefined>();

  const setNotes = useCallback(async () => {
    if (!selectDate) {
      return;
    }

    const dayNotesFromStore = await getDayNotes(selectDate.day);
    setDayNotes(dayNotesFromStore);
  }, [getDayNotes, selectDate]);

  useEffect(() => {
    setNotes();
  }, [setNotes]);

  useFocusEffect(() => {
    setNotes(); //TODO: убрать костыль c клонированием стэйта
  });

  useEffect(() => {
    if (selectDate) {
      navigation.setOptions({headerTitle: getTitle(selectDate)});
    }
  }, [navigation, selectDate]);

  return (
    <CommonScreenLayout>
      <ScrollView>
        <ReadingBlock />
        <Thought />

        {!!dayNotes && <DayNotesBlock notes={dayNotes.notes} />}
      </ScrollView>
    </CommonScreenLayout>
  );
};

// service

const createFile = async () => {
  const instance = DiaryManager.getInstance();
  console.log(await instance.getMonth('15-2023'));
};

const deleteF = () => {
  const instance = FileStorage.getInstance();
  instance.remove('12-2023');
};

const find = () => {
  RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then(result => {
      console.log(result);

      // stat the first file
      return Promise.all([RNFS.stat(result[2].path), result[2].path]);
    })
    .then(statResult => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], 'utf8');
      }

      return 'no file';
    })
    .then(contents => {
      // log the file contents
      console.log(JSON.parse(contents));
    })
    .catch(err => {
      console.log(err.message, err.code);
    });
};

const effect = () => {
  const month = dayjs().month() + 1;
  const year = dayjs().year();
  const id = generateDiaryId(month, year);
  // getStateFromManager(id);
};
