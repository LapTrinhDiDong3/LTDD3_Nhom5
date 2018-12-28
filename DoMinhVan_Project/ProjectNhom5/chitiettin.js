
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View, TouchableOpacity, ScrollView
} from 'react-native';

export default class ChiTiet extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View>
          <View style={styles.login}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
              <Text style={styles.log}>Đăng Nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.log}>Đăng Ký</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title1}>{this.props.navigation.state.params.tieude}</Text>
        </View>
        <View style={styles.content0}>

          <View style={styles.content1}>
            <Text>Ngày Đăng:{this.props.navigation.state.params.ngaydang}</Text>
          </View>

          <View style={styles.content2}>

            <ScrollView>

              <View style={styles.mota}>
                <Text style={styles.txtmota}>{this.props.navigation.state.params.mota}</Text>
              </View>

              <View style={styles.image1}>
                <Image
                  style={styles.image2}
                  source={{ uri: "http://192.168.56.1/webtintuc/hinhanh/" + this.props.navigation.state.params.hinhanh }}
                />
              </View>

              <Text>{this.props.navigation.state.params.noidung}</Text>
              <Text>Người Đăng:{this.props.navigation.state.params.nguoidang}</Text>

            </ScrollView>

          </View>
          
        </View>

      </View>
    );


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  title1: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  image1: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  image2: {
    width: 300,
    height: 300
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  log: { paddingRight: 10, color: 'blue' },
  content1: {
    alignItems: 'flex-end',
  },
  content2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mota: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtmota:{
    color:'brown'
  }
});
