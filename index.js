/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import dayjs from 'dayjs';
import locale_ru from 'dayjs/locale/ru';
import objectSupport from 'dayjs/plugin/objectSupport';
import isToday from 'dayjs/plugin/isToday';
import {LocaleConfig} from 'react-native-calendars';
import './src/utils/calendarLocale';

dayjs.locale(locale_ru);
dayjs.extend(objectSupport);
dayjs.extend(isToday);
LocaleConfig.defaultLocale = 'ru';

AppRegistry.registerComponent(appName, () => App);
