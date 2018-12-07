/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SanPham from './sanpham.js';
import DanhSach from './danhsach.js';   
import ThemSanPham from './themSanPham';
AppRegistry.registerComponent(appName, () =>DanhSach);
