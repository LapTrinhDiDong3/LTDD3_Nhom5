

import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  TouchableOpacity, FlatList, Image
} from 'react-native';
var url = "http://192.168.56.1/webtintuc/Select_TinTuc.php?id=";
export default class TrangChu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: 'Tin Tức Mới Nhất',
      id: 0,
    }
  }
  componentDidMount() {
    fetch(url + this.state.id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
          this.setState({
          })
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getData(id, title) {
    fetch(url + id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          text: title
        }, function () {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
          <TouchableOpacity onPress={() => { this.getData(0, "Tin Tức Mới Nhất") }}>
            <Text style={styles.danhmuc}>Trang Chủ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.login}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.log}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.log} onPress={() => this.props.navigation.navigate('Register')}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row1}>
          <TouchableOpacity onPress={() => { this.getData(1, "Trong Nước") }}>
            <Text style={styles.danhmuc}>Trong Nước</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.getData(2, "Kinh Doanh") }}>
            <Text style={styles.danhmuc}>Kinh Doanh</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.getData(3, "Xe Máy") }}>
            <Text style={styles.danhmuc}>Xe Máy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row1}>
          <TouchableOpacity onPress={() => { this.getData(4, "Pháp Luật") }}>
            <Text style={styles.danhmuc}>Pháp Luật</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.getData(5, "Xã Hội") }}>
            <Text style={styles.danhmuc}>Xã Hội</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.getData(6, "Thể Thao") }}>
            <Text style={styles.danhmuc}>Thể Thao</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.title1}>
          <Text style={styles.text}>{this.state.text}</Text>
        </View>

        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <View style={styles.container}>
              <View style={styles.tintuc}>
                <Image
                  style={styles.image}
                  source={{ uri: "http://192.168.56.1/webtintuc/hinhanh/" + item.hinh_anh }}
                />
                <View style={styles.content}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details',
                    {
                      tieude: item.tieu_de, ngaydang: item.ngay_dang, nguoidang: item.nguoi_dang, mota: item.mo_ta,
                      noidung: item.noi_dung, hinhanh: item.hinh_anh
                    })} >
                    <Text style={styles.title}>{item.tieu_de}</Text>
                  </TouchableOpacity>
                  <Text style={styles.description}>{item.mo_ta}</Text>
                  <View style={styles.time}>
                    <Text >Ngày đăng:{item.ngay_dang}</Text>
                  </View>

                </View>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  log: { paddingRight: 10, color: 'red' },
  row: {
    flexDirection: 'row'
  },
  row1: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  danhmuc: {
    color: 'blue',
    fontSize: 20,
    paddingRight: 10,
  },
  title1: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  tintuc: {
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    paddingLeft: 10,
    width: 230,
  },
  title: {
    color: 'red',
    fontSize: 13,
  },
  description: {
    fontSize: 10,
  },
  time: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
});
