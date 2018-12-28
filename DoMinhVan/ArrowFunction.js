

import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:0
    }
  }
  //ARROW FUNCTION
  TANG = () => {
    this.setState({
      id:this.state.id + 1
    })
  };
  GIAM = () => {
    this.setState({
      id:this.state.id - 1
    })
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>DEMO ARROWFUNCTION</Text>
        <View style={styles.demo}>            
            <Text>Gía Trị:{this.state.id} </Text>
            <TouchableOpacity onPress={()=>{this.TANG()}}>
            <Text style={styles.tang}>Tăng</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.GIAM()}}>
            <Text style={styles.tang}>Giảm</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red'
  },
  tang: {    
    marginBottom: 10,
    marginTop:10,
    color:"red"
  },
});
