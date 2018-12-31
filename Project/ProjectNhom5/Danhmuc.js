import React, {Component} from 'react';
import {StyleSheet,Text, Image, View,TouchableOpacity} from 'react-native';

export default class DanhMuc extends Component {
  render() {
    return (
      <View style={styles.container}>



        <View style={styles.header}>
         <View style={styles.img1}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Image
          style={styles.imgMenu}
            source={require('./giaodien/back.png')}
          />
      </TouchableOpacity>      
      </View>
      <View style={styles.txt}>  
      <Text style={styles.txtMenu}>Chuyên Mục</Text>  
      </View>           
      </View>
     <View style={styles.content}>
      <View style={styles.hang}>
      <View style={styles.cot}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{id:0,title:"TIN TỨC MỚI NHẤT"})}>
              <Image
              style={styles.image}
              id="1"
                source={require('./giaodien/tinmoinhat.jpg')}
              />
              </TouchableOpacity>
              <Text style={styles.tl}>Tin Mới Nhất</Text>
      </View>
      </View>
      <View style={styles.cot}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{id:1,title:"TIN TRONG NƯỚC"})}>
              <Image
              style={styles.image}
              id="1"
                source={require('./giaodien/tintrongnuoc.jpg')}
              />
              </TouchableOpacity>
              <Text style={styles.tl}>Tin Trong Nước</Text>
      </View>
      </View> 
      <View style={styles.hang}>
      <View style={styles.cot}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{id:2,title:"KINH DOANH"})}>
              <Image
              style={styles.image}
              id="1"
                source={require('./giaodien/kinhdoanh.jpg')}
              />
              </TouchableOpacity>
              <Text style={styles.tl}>Kinh Doanh</Text>
      </View>
      <View style={styles.cot}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{id:3,title:"XE MÁY"})}>
              <Image
              style={styles.image}
              id="1"
                source={require('./giaodien/xemay.jpg')}
              />
              </TouchableOpacity>
              <Text style={styles.tl}>Xe Máy</Text>
      </View>
      </View> 
      <View style={styles.hang}>
      <View style={styles.cot}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{id:4,title:"PHÁP LUẬT"})}>
              <Image
              style={styles.image}
              id="1"
                source={require('./giaodien/phapluat.jpg')}
              />
              </TouchableOpacity>
              <Text style={styles.tl}>Pháp Luật</Text>
      </View>
      <View style={styles.cot}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{id:5,title:"XÃ HỘI"})}>
              <Image
              style={styles.image}
              id="1"
                source={require('./giaodien/xahoi.jpg')}
              />
              </TouchableOpacity>
              <Text style={styles.tl}>Xã Hội</Text>
      </View>
      </View> 
      <View style={styles.hang}>
      <View style={styles.cot}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{id:6,title:"THỂ THAO"})}>
              <Image
              style={styles.image}
              id="1"
                source={require('./giaodien/thethao.jpg')}
              />
              </TouchableOpacity>
              <Text style={styles.tl}>Thể Thao</Text></View>
      <View style={styles.cot}>
      </View>
      </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  header:{
    flex:1/8,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:"row"
  },
  content:{
    flex:7/8,
    flexDirection:"row"
  },
  hang:{
    flex:1,    
    
    flexDirection:'row',
  },
  cot:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:100,
    height:100,
    borderRadius:50,   
  },
  hd:{
    fontSize:40,
  },
  imgHd:{
    
  },

tl:{
  fontSize:20,
  color:'red',
  marginTop:10
},


  header:{
    flexDirection:"row",
    marginTop:10,
    marginBottom:10
  },
  hdTheloai:{
    justifyContent:"center",
    alignItems:"center",
    flex:5/6,   
    marginTop:20 
  },
  hdText:{
    color:"red",
    fontSize:30
  },
  txtMenu:{    
    color:'red',
    fontSize:20
  },
  img1:{
flex:1/8
  },
  imgMenu:{
    width:30,
    height:30
  },
  txt:{
    flex:7/8,
    justifyContent:'center',
    alignItems:'center'
  }
});
