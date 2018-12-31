import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  CheckBox,
  Image,
  TouchableOpacity,
  View,FlatList
} from 'react-native';



export default class Quanlytin extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.143.2/webtintuc/Select_TinTuc.php?id=0')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <View style={styles.image}>
          <TouchableOpacity>
            <Image style={styles.imguser} source={require('./img/user.png')}></Image>
          </TouchableOpacity>                
          </View>
          <View style={styles.nameuser}>
            <Text>Quản lý tin</Text>
          </View>
        </View>
        <View style={styles.iconadd}>
  <TouchableOpacity >
    <Image style={styles.imgedt} source={require('./img/add.png')}></Image>
  </TouchableOpacity>
  </View>
        <FlatList
  data={this.state.dataSource}
  renderItem={({item}) => <View>
 

  <View style={styles.ckbox}>
  <View style={styles.check}>
    <CheckBox style={styles.chk1}></CheckBox>
    <Text style={styles.txt1}>{item.tieu_de}</Text>
  </View>
  <View style={styles.icon}> 
  <TouchableOpacity>
    <Image style={styles.imgedt} source={require('./img/edit.png')}></Image>
  </TouchableOpacity>
  <TouchableOpacity>
    <Image style={styles.imgdlt} source={require('./img/delete.png')}></Image>
  </TouchableOpacity>
    
  
  </View>         
  </View>
  </View>}
/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user:{
    marginTop: 10,
    flexDirection: "row",
  },
  iconadd: {
    marginTop: 10,
    marginLeft:313,
  },
  ckbox: {
    flex: 1,
    flexDirection: "row",
    marginTop:10,
  },
  imgedt: {
    textAlign: 'right',
  },
  txt1: {
    fontSize: 15,
    textAlign: 'left',
  },
  chk: {
    flex: 1,
    padding: 10,
  },
  imguser: {
    marginLeft: 8,
  },
  image: {
    marginRight: 100,
  },
  check: {
    marginRight: 150,
    flexDirection: "row",
  },
  icon: {
    flexDirection: "row",
  },
});
