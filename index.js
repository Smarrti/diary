/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import dayjs from 'dayjs';
import locale_ru from 'dayjs/locale/ru';

dayjs.locale(locale_ru);

AppRegistry.registerComponent(appName, () => App);
