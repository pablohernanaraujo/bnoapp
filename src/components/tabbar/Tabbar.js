import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import FacebookTabBar from './FacebookTabBar';

import Home from '../sections/Home';
import Mapa from '../sections/Mapa';
import Buscar from '../sections/Buscar';
import Ajustes from '../sections/Ajustes';

class Tabbar extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      <ScrollableTabView
        tabBarPosition="bottom"
        initialPage={1}
        style={{backgroundColor:'#080b0c'}}
        renderTabBar={() => <FacebookTabBar />}
      >
        <Ajustes tabLabel="bars" navigator={this.props.navigator}>AJUSTES</Ajustes>
        <Home tabLabel="home" navigator={this.props.navigator}/>
        <Mapa tabLabel="map" navigator={this.props.navigator}/>
        <Buscar tabLabel="search">BUSCAR</Buscar>
      </ScrollableTabView>
    );
  }
}

export default Tabbar;
