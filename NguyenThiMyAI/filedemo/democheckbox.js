/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  CheckBox,
  View
} from 'react-native';

export default class Democheckbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ckbox}>
        <View style={styles.check}>
          <CheckBox style={styles.chk1}></CheckBox>
          <Text style={styles.txt1}>Checkbox1</Text>
        </View>  
        <View style={styles.check2}>
          <CheckBox style={styles.chk2}></CheckBox>
          <Text style={styles.txt2}>Checkbox2</Text>
        </View>       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  ckbox: {
    flex: 1,
    flexDirection: "row",

  },
  txt1: {
    fontSize: 20,
    textAlign: 'left',
  },
  chk: {
    flex: 1,
    padding: 10,
  }, 
  check: {
    flexDirection: 'row'
  },
  check2:{
    flexDirection: 'row'
  },
  txt2: {
    fontSize: 20,
    textAlign: 'left',
  },
});
