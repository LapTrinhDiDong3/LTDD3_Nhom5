/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SanPham from './sanpham.js';
import DanhSach from './danhsach.js';   

AppRegistry.registerComponent(appName, () => DanhSach);
