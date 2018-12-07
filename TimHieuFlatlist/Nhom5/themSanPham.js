
import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import conn from './config';
export default class ThemSanPham extends Component {

  constructor()
  {
      super();

      this.state = { 

        masp: '', 

        tensp: '', 

        soluong: '',

        ActivityIndicator_Loading: false, 

      }
  }

themsanpham = () =>
  {
      this.setState({ ActivityIndicator_Loading : true }, () =>
      {
          fetch('http://192.168.56.1/webservice_php/Insert_SanPham.php',
          {
              method: 'POST',
              headers: 
              {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
              {
                masp : this.state.masp,

                tensp : this.state.tensp,

                soluong : this.state.soluong

              })

          }).then((response) => response.json()).then((responseJsonFromServer) =>
          {
              alert(responseJsonFromServer);

              this.setState({ ActivityIndicator_Loading : false });

          }).catch((error) =>
          {
              console.error(error);

              this.setState({ ActivityIndicator_Loading : false});
          });
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textinput}>
        <TextInput 
                  placeholder = "Nhập mã sản phẩm"
                  style = { styles.input } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ masp: TextInputText })} />
        </View>
        <TextInput 
                  placeholder = "Nhập tên sản phẩm"
                  style = { styles.input } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ tensp: TextInputText })} />
        <TextInput 
                  placeholder = "Nhập số lượng"
                  style = { styles.input } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ soluong: TextInputText })} />
        <View  style = { styles.them } > 
        <TouchableOpacity 
                  activeOpacity = { 0.5 }                 
                  onPress = { this.themsanpham }> 
                   <Text style = { styles.TextStyle }>Thêm sản phẩm</Text> 
        </TouchableOpacity>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop:20,
  },
  input:
    {
 
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
    them:{
      backgroundColor:'red',
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
    },
    TextStyle:{
      textAlign:'center',
      marginTop:10,
      marginBottom:10,
    }
});
