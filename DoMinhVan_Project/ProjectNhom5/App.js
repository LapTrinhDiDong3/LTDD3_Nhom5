import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import TrangChu from './trangChu';
import ChiTiet from './chitiettin';
import DangNhap from './dangNhap';
import DangKy from './dangKy';
import Home from './Home';
import Details from './Details';
import DanhMuc from './Danhmuc';
import QuanLyTin from './quanlytin';
export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details
    },
    DanhMucs: {
      screen: DanhMuc
    },
    Login: {
      screen: DangNhap
    },
    Register: {
      screen: DangKy
    },
    quanlytin: {
      screen: QuanLyTin
    }
  }, {
    headerMode: "none"
  }
);
/*
export const UserStack = createStackNavigator(
  {
    Home:{ 
      screen: User
     },
     TrangChu:{
      screen: Home,     
    },
  }
);



export const TabBar = createBottomTabNavigator({
  HomeBar: {
   screen: HomeStack,
   navigationOptions:{
    tabBarLabel:"TIN TỨC",    
   },
  },
  UserBar: {
    screen: UserStack,
    navigationOptions:{
      tabBarLabel:"ADMIN"
     }
  },
});*/

const AppContainer = createAppContainer(HomeStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
