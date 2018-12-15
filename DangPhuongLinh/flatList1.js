
import React, {Component} from 'react';
import {
  View,StyleSheet,Text,FlatList
} 
from 'react-native';
import SanPham from './sanpham.js';
import conn from './config';
export default class DanhSach extends Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  
  componentDidMount(){
    return fetch('http://192.168.56.1/webservice_php/Select_SanPham.php')
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
     <View>
          <View style={styles.title}>
            <Text style={styles.tt}>DANH SÁCH SẢN PHẨM</Text>
            <Text>{conn}</Text>
          </View>
          <View>
          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <SanPham masp={item.masp} tensp={item.tensp} soluong={item.soluong} img={"http://192.168.56.1/webservice_php/hinh/"+item.HinhAnh}/>}         
        />
          </View>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  title:{
   justifyContent:'center',  
   alignItems:'center',
  },
  tt:{
    color:'red',
    fontSize:20,
  }
});
