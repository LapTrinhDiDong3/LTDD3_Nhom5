
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class WidthHeightFlex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>DEMO WIDTH HEIGHT FLEX</Text>
          <Image
            style={styles.hinh}
            source={require('./hinh1.jpg')}
          />
        </View>
        <View style={styles.content}>
            <View style={styles.dong}>
            <View style={styles.cot}>
            <Text>REACTNATIVE</Text>
            </View>
            <View style={styles.cot}>
            <Text>NODE JS</Text>
            </View>
            </View>
            <View style={styles.dong}>
            <View style={styles.cot}>
            <Text>PHP</Text>
            </View>
            <View style={styles.cot}>
            <Text>IOS</Text>
            </View>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  hinh: {
    width: 200,
    height: 200,
    marginLeft:30
  },
  content:{
    marginTop:20,
    flex:1,
    flexDirection:'row'    
  },
  dong:{
    flex:1,
  },
  cot:{
    borderWidth:1,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
