

import React, { Component } from 'react';


import {

  StyleSheet,
  Text, Image,
  View, TextInput, TouchableOpacity
} from 'react-native';

export default class DangKy extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  dangKy = () => {
    const { hoten, user, email, password, password2 } = this.state;
    if(password == password2){
    fetch('http://192.168.143.2/webtintuc/Them_Nguoi_Dung.php',
      {
        method: 'POST',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            HoTen: hoten,
            User: user,
            Password: password,
            Email: email
          })

      }).then((response) => response.text())
      .then((responseJson) => {
        alert("Dang Ky Thanh Cong")
      }).done()
    }else{
      alert("Dang Ky That Bai ")
    }
  }




  render() {
    return (
      <View style={styles.container}>
        <View style={styles.img1}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              style={styles.imgMenu}
              source={require('./giaodien/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.txt}>Quay Lại</Text>
        </View>
        <View style={styles.dangnhap}>
          <Text style={{ textAlign: 'center', marginTop: 20, color: 'red', fontSize: 30, marginBottom: 50 }}>ĐĂNG KÝ</Text>
          <TextInput
            placeholder="Nhập Họ Tên"
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ hoten: text })} />
          <TextInput
            placeholder="Nhập Tên Đăng Nhập"
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ user: text })} />
          <TextInput
            placeholder="Nhập Email"
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ email: text })} />
          <TextInput
            placeholder="Nhập Mật Khẩu"
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ password: text })} />
          <TextInput
            placeholder="Nhập Lại Mật Khẩu"
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ password2: text })} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.txtButton}
            onPress={()=>{this.dangKy()}}>

            <Text style={styles.txt1}>Đăng Ký</Text>

          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.txtButton}
            onPress={() => this.props.navigation.navigate('Home')}
          >

            <Text style={styles.txt1}>THOÁT</Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgMenu: {
    width: 30,
    height: 30,
    marginRight: 20
  },
  img1: {
    flexDirection: 'row'
  },
  dangnhap: {
    marginLeft: 10

  },
  dong: {
    flexDirection: 'row',
    marginTop: 20
  },
  text:
  {
    textAlign: 'center',
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 7,
    marginBottom: 10,
    width: '95%'
  },
  txtButton:
  {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    marginBottom: 20,
    width: '90%',
    marginLeft: 10,
    borderRadius: 15

  },
  txt1:
  {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },
});
