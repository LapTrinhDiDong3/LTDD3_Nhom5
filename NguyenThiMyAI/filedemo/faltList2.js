import React, {Component} from 'react';
import {
  StyleSheet,
   Text,
   TouchableOpacity,
   View,Image,
    } from 'react-native';
export default class SanPham extends Component{


  constructor(props){
    super(props);
    this.state={
      soluong:1
    }    
  }

  TangSoLuong=()=>{
    this.setState({
      soluong:this.state.soluong +1
    })
  }

  GiamSoLuong=()=>{
    if(this.state.soluong>0){
    this.setState({
      soluong:this.state.soluong - 1
    })
  }
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.dong}>
              <View style={styles.cot1}>             
              <Image
                style={{width: 120, height: 100}}
                source={{uri: this.props.img}}
              />
              </View>
              <View style={styles.cot2}>
              <Text>Mã Sản Phẩm : {this.props.masp}</Text>
              <Text>Tên Sản Phẩm :{this.props.tensp}</Text>
              </View>
          </View> 
          <View style={styles.dong}>
              <View style={styles.cot1}>
              <Text>Số Lượng</Text>             
                 <Text style={styles.sl}>{this.state.soluong}</Text> 
              </View>
              <View style={styles.cot2}>
                  <View style={styles.func}>
                  <TouchableOpacity onPress={()=>{this.TangSoLuong()}}>
                    <Text style={styles.tang}>Tăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.GiamSoLuong()}}>
                    <Text style={styles.giam}>Giảm</Text>
                    </TouchableOpacity>
                  </View>                    
              </View>
          </View>                  
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width:360,
    height:200   
  },
  dong:{
    flex:1,
    borderBottomWidth:1,
    flexDirection:'row',
  },
  cot1:{
    flex:1/3,
    borderRightWidth:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  cot2:{
    flex:2/3, 
    flexDirection:'column',justifyContent: 'center',
    alignItems:'center'
  },
  sl:{
    fontSize:50
  },
  tang:{
    backgroundColor:'yellow',
    marginBottom:10,
    marginTop:10
  },
  giam:{
    backgroundColor:'green'
  },
});