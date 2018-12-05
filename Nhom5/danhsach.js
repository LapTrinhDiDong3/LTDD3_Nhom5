
import React, {Component} from 'react';
import {
  View,StyleSheet
} 
from 'react-native';
import SanPham from './sanpham.js'

export default class DanhSach extends Component {
  render() {
    return (
     <View>
          <SanPham masp="SP01" tensp="Áo Thun Tay Ngắn" hinh="1"></SanPham>
          <SanPham masp="SP02" tensp="Áo Sơ Mi" hinh="2"></SanPham>
          <SanPham masp="SP03" tensp="Áo Thun Cổ Trụ" hinh="1"></SanPham>
     </View>
    );
  }
}

