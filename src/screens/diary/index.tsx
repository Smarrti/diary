import React, {FC, useEffect} from 'react';
import {Button, ScrollView} from 'react-native';
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
import {SelectDate} from '../../stores/diary';
import {ReadingBlock} from './components/readingBlock';
import {Thought} from './components/thought';

type Props = NativeStackScreenProps<DiaryNavigatorType, Routes.Diary>;

const getTitle = (date: SelectDate) => {
  return dayjs({day: date.day, month: date.month - 1, year: date.year}).format(
    'D MMMM YYYY [г.]',
  );
};

export const DiaryScreen: FC<Props> = ({navigation}) => {
  const {selectDate} = useStore().diaryStore;

  useEffect(() => {
    if (selectDate) {
      navigation.setOptions({headerTitle: getTitle(selectDate)});
    }
  }, [navigation, selectDate]);

  const handleButton = () => {
    navigation.push(Routes.MonthlyPlan);
  };

  return (
    <CommonScreenLayout>
      <ScrollView>
        <ReadingBlock />
        <Thought />

        <Button title="План на месяц" onPress={handleButton} />
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
      console.log('GOT RESULT', result);

      // stat the first file
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
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
      console.log(contents);
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
