import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: "TN TỨC MỚI NHẤT",
      id: 0
    }
  }

  componentDidMountt() {
    fetch("http://192.168.143.2/webtintuc/Select_TinTuc.php?id=" + id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {


    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const title = navigation.getParam('title');

    fetch("http://192.168.143.2/webtintuc/Select_TinTuc.php?id=" + id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });



    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.img1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DanhMucs')}>
              <Image
                style={styles.imgMenu}
                source={require('./giaodien/menu.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.txtMenu}>Chuyên Mục</Text>


          <View style={styles.img2}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Image
                style={styles.imgMenu}
                source={require('./giaodien/login.png')}
              />
            </TouchableOpacity>
          </View>

        </View>


        <View style={styles.content}>
          <View style={styles.hdTheloai}>
            <Text style={styles.hdText}>{title}</Text>
          </View>

          <View style={styles.listView}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) =>
                <View style={styles.hang}>
                  <View style={styles.hinh}>
                    <Image
                      style={styles.image}
                      source={{ uri: "http://192.168.143.2/webtintuc/hinhanh/" + item.hinh_anh }}
                    />
                  </View>
                  <View style={styles.text}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details',
                      {
                        tieude: item.tieu_de, ngaydang: item.ngay_dang, nguoidang: item.nguoi_dang, mota: item.mo_ta,
                        noidung: item.noi_dung, hinhanh: item.hinh_anh
                      }
                    )}>
                      <Text style={styles.tieude}>{item.tieu_de}</Text>
                    </TouchableOpacity>
                    <Text style={styles.mota}>{item.mo_ta}</Text>
                    <Text style={styles.ngaydang}>Ngày Đăng:{item.ngay_dang}</Text>
                  </View>
                </View>
              } />
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
  image: {
    width: 250,
    height: 200,
    borderRadius: 10
  },
  hinh: {
    marginTop: 5,

  },
  hang: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    marginTop: 5
  },
  text: {
    marginLeft: 20,
  },
  tieude: {
    color: "#FF0000",
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mota: {
    color: "#808080",
    fontSize: 10
  },
  ngaydang: {
    color: "#800000",
    fontSize: 10
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00FFFF',
  },
  hdTheloai: {
    alignItems: "center",
  },
  hdText: {
    color: "red",
    fontSize: 30
  },
  img2: {
    flex: 1 / 8
  },
  txtMenu: {
    flex: 5 / 8,
    color: 'red'
  },
  img1: {
    flex: 1 / 8
  },
  img3: {
    flex: 1 / 8
  },
  imgMenu: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  listView: {
    marginTop: 10
  },

});
