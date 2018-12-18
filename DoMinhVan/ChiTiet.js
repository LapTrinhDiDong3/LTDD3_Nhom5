
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default class ChiTiet extends Component {
  static navigationOptions = {
    title: 'Trang Chủ',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Trang Chi Tiết</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.text}>Quay Lại Trang Chủ</Text>
        </TouchableOpacity>
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
  text:{
    color:'red'
  }
});
