import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import TrangChu from './TrangChu';
import ChiTiet from './ChiTiet';

const RootStack = createStackNavigator(
  {
    Home: TrangChu,
    Details: ChiTiet,  
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
