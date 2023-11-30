import React, {FC} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {Routes} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryNavigatorType} from '../../navigation/navigationTypes';
import RNFS from 'react-native-fs';
import {FileManager} from '../../modules/fileManager';
import {FileStorage} from '../../modules/fileStorage';

export const DiaryScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiaryNavigatorType>>();

  const handleButton = () => {
    navigation.push(Routes.MonthlyPlan);
  };

  const createFile = async () => {
    const instance = FileManager.getInstance();
    console.log(await instance.getMonth('15-2023'));
  };

  const updateFile = async () => {
    const instanceFileManager = FileManager.getInstance();
    const content = JSON.parse(await instanceFileManager.getMonth('15-2023'));
    content.dayReports = '12345';

    const instanceFileStorage = FileStorage.getInstance();
    instanceFileStorage.setFile('15-2023', JSON.stringify(content));
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

  return (
    <CommonScreenLayout>
      <ScrollView>
        <Text>Ежедневник</Text>
        <Button title="План на месяц" onPress={handleButton} />
        <Button title="Создать файл" onPress={createFile} />
        <Button title="Обновить файл" onPress={updateFile} />
        <Button title="Find файл" onPress={find} />
      </ScrollView>
    </CommonScreenLayout>
  );
};
