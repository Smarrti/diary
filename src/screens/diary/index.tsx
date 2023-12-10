import React, {FC} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {Routes} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryNavigatorType} from '../../navigation/navigationTypes';
import RNFS from 'react-native-fs';
import {DiaryManager} from '../../modules/diaryManager';
import {FileStorage} from '../../modules/fileStorage';
import {useStore} from '../../stores';
import dayjs from 'dayjs';
import {generateDiaryId} from '../../utils/generateDiaryId';

export const DiaryScreen: FC = () => {
  const {getStateFromManager, state, stateId} = useStore().diaryStore;
  console.log(state, stateId);

  const effect = () => {
    const month = dayjs().month() + 1;
    const year = dayjs().year();
    const id = generateDiaryId(month, year);
    getStateFromManager(id);
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<DiaryNavigatorType>>();

  const handleButton = () => {
    navigation.push(Routes.MonthlyPlan);
  };

  const createFile = async () => {
    const instance = DiaryManager.getInstance();
    console.log(await instance.getMonth('15-2023'));
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

  const deleteF = () => {
    const instance = FileStorage.getInstance();
    instance.remove('12-2023');
  };

  return (
    <CommonScreenLayout>
      <ScrollView>
        <Text>Ежедневник</Text>
        <Button title="План на месяц" onPress={handleButton} />
        <Button title="useEffect" onPress={effect} />
        <Button title="Создать файл" onPress={createFile} />
        <Button title="Найти файл" onPress={find} />
        <Button title="Удалить файл" onPress={deleteF} />
      </ScrollView>
    </CommonScreenLayout>
  );
};
