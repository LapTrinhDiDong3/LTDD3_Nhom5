

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: "demo state"
     }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.text}</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 
});
