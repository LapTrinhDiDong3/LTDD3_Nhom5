
import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';

export default class TextTextinput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TEXT TEXTINPUT</Text>
        <Text style={styles.text}>DEMOTEXT</Text> 
        <TextInput
          style={styles.textinput}
          placeholder="Mời Bạn Nhập"
          onChangeText={(text) => this.setState({text})}
        /> 
        <Text>Bạn Đã Nhập :{this.state.text}</Text>      
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
  text:{
    color:'red',
    fontSize:30,
    fontWeight:'bold',
    fontFamily: 'Cochin',
  },
  textinput:{
    textAlign: 'center',
    height: 40,
    backgroundColor : "#fff",
    borderWidth: 1,
    borderColor: 'yellow',
    borderRadius: 7 ,
    marginBottom: 10,
    width: '95%'
  }
});
