

import React, { Component } from 'react';


import {

  StyleSheet,
  Text,
  View, Button,TextInput,
} from 'react-native';

export default class Demo extends Component {

  constructor(props){
    super(props);
    this.state = {
      titleText: "HELLO WORLD",
      
    };
  }

  
  hello=()=>{
    this.setState({
      titleText: "Bạn đã click vào logon!",
    })
  }


  render() {
    return (
      <View style={styles.container}>
   
    
        <Text style={styles.dangnhap}>
        Đăng Nhập
        </Text>

        <View style={styles.view}>
          <View style={styles.view1}>
              <Text style={styles.user}>
              User 
              </Text>
              <TextInput style={styles.textInput }placeholder ="Tên đăng nhập..."></TextInput>
          </View>
        
        <View style={styles.view1}>
              <Text style={styles.password}>
              password 
              </Text>

              <TextInput style={styles.textInput }placeholder ="Nhập pass..."></TextInput>
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
            <Button  style={styles.button2}
              
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
    
    margin: 10,
  },
  user:{
    fontSize: 15,
    margin: 10,
    marginRight: 50,

  },

  password:{
    fontSize: 15,
    margin: 10,
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
    flexDirection :'row'
  },
  view:{
    flexDirection :'column',
    marginBottom: 20,
  
  },
  textInput:{
    width: 200,
  }
 
  
});
