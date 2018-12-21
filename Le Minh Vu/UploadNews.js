/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Picker,
  Button,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      //Component
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>UPLOAD NEWS</Text>
          <View style={{flexDirection: "row"}}>
            <Image source={require('./img/person-male.png')} style={{width: 50, height:50}}/>
            <Text>Wellcome </Text>
            <Text>ABC</Text>
            <Text>!</Text>
          </View>
        </View>

        <View>
          <TextInput style={styles.textInput} placeholder="Nhập tiêu đề bảng tin"></TextInput>
          <TextInput placeholder="Nhập mô tả bảng tin"/>
          <View style={{flexDirection: "row"}}>
            <Text style={{flex:1}}>Loại tin</Text>
            <Picker style={{ height: 50, width: 100 ,flex:3}}>
              <Picker.Item label="Trong nước" />
              <Picker.Item label="Quốc tế" />
              <Picker.Item label="Xe máy" />
              <Picker.Item label="Xã hội" />
              <Picker.Item label="Pháp luật" />
              <Picker.Item label="Thể thao" />
            </Picker>
          </View>
          <View >
            <TextInput style={styles.content} placeholder="Nhập nội dung 1" />
            <TextInput style={styles.content} placeholder="Nhập nội dung 2"/>
          </View>
          <View style={{flexDirection: "row"}}>
            <Button title="UPLOAD"></Button>
            <Button title= "IMG" ></Button>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign:"center",
  },

  container:{
    flex :1,
  },
  content:{
    height:100,
  },

  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
