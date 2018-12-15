

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,Button,TextInput,
} from 'react-native';

export default class Demo2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      
    };
}


render() {
  return (
    <View style={styles.container}>
 
  
      <Text style={styles.dangnhap}>
      Đăng Kí
      </Text>

      <View style={styles.view}>

      <View style={styles.view1}>
            <TextInput style={styles.textInput }placeholder ="Tên đăng nhập"></TextInput>
            <TextInput style={styles.textInput }placeholder ="Họ tên..."></TextInput>
            <TextInput style={styles.textInput }placeholder ="Email..."></TextInput>
            <TextInput style={styles.textInput }placeholder ="SDT..."></TextInput>
            <TextInput style={styles.textInput }placeholder ="Pass..."></TextInput>
            <TextInput style={styles.textInput }placeholder ="Nhập lại pass"></TextInput>
        </View>
        

      
      </View>
      <View style={styles.buttonA}>
      
      <View style={styles.button}>
          <Button style={styles.button1}
            onPress={this.hello}
            title="Log On"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
         
          </View>
      <View style={styles.button}>
          <Button  style={styles.button1}
            
            title="Log Out"
            color="#841584"
            
            accessibilityLabel="Learn more about this purple button"
          />
      </View>


      </View>
      <Text>{this.state.titleText}</Text>
      
      
      
    
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    margin: 10,
    backgroundColor: '#F5FCFF',
   //backgroundColor: '#841584',
  },
  dangnhap: {
    
    fontSize: 20,
    
    marginLeft: 20,
  },
  

  

  button:{
    width: 100,
    height: 100,
    marginRight: 20,

  },


  
  buttonA:{
    flexDirection :'row',
    justifyContent:'center',

    
  },
  view1:{
    flexDirection :'column',
    marginLeft: 20,
    
    
  },
  view:{
    flexDirection :'column',
    marginBottom: 20,
  
  },
  textInput:{
    width: 200,
  }
 
  
});
