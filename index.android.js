import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthService from './src/components/services/AuthService';
import Login from './src/components/Login';
import Tabbar from './src/components/tabbar/Tabbar';
import Ajustes from './src/components/sections/Ajustes';
import Buscar from './src/components/sections/Buscar';
import Discos from './src/components/sections/Discos';
import Bares from './src/components/sections/Bares';
import Details from './src/components/sections/Details';

var NavigatorBarMapper = {
  LeftButton: function(route, navigator, index){
    if(index == 0){
      return null;
    }
    return(
      <TouchableHighlight
        onPress={() => {
          if(index > 0){
            navigator.pop();
          }
        }}
      >
        <Icon style={styles.arrowLeft} name="angle-left" size={35} color="rgb(255,255,255)" />
      </TouchableHighlight>
    );
  },
  RightButton: function(route, navigator, index){
    return null;
  },
  Title: function(route, navigator, index){
    if(index == 0){
      return null;
    }
    return(
      <Text style={styles.navTitle}>{route.title}</Text>
    );
  }
};

class bnoapp extends Component {
  constructor(props){
    super(props);
    this.state = {
      usuario: false,
      checkingAuth: true
    };
  }

  renderScene(route, navigator){
    switch (route.name) {
      case 'Login':
        return(
          <Login navigator={navigator} route={route} />
        );
        break;
      case 'Tabbar':
        return(
          <Tabbar navigator={navigator} route={route} />
        );
        break;
      case 'Ajustes':
        return(
          <Ajustes navigator={navigator} route={route} />
        );
        break;
      case 'Buscar':
        return(
          <Buscar navigator={navigator} route={route} />
        );
        break;
      case 'Discos':
        return(
          <Discos navigator={navigator} route={route} />
        );
        break;
      case 'Bares':
        return(
          <Bares navigator={navigator} route={route} />
        );
        break;
      case 'Detalles':
        return(
          <Details navigator={navigator} route={route} />
        );
        break;
      default:
    }
  }

  componentDidMount(){
    AuthService.getAuthInfo((cb)=> {
      if(cb === 'logeado'){
        this.setState({
          checkingAuth: false,
          usuario: true
        });
      }else{
        this.setState({
          checkingAuth: false
        })
      }
    });
  }

  render() {
    if(this.state.checkingAuth){
      return(
          <View style={styles.cargador}>
            <ActivityIndicator
              animating={true}
              size="large"
              color="#00aeef"
              style={styles.loader}
            />
          </View>
      );
    }
    if(this.state.usuario){
      return (
        <Navigator style={styles.navigator}
          initialRoute={{ name: 'Tabbar'}}
          renderScene={this.renderScene}
          configureScene={(route) => {
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigatorBarMapper}
            />
          }
        >
        </Navigator>
      );
    }else{
      return (
        <Navigator style={styles.navigator}
          initialRoute={{ name: 'Login'}}
          renderScene={this.renderScene}
          configureScene={(route) => {
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigatorBarMapper}
            />
          }
        >
        </Navigator>
      );
    }
  }
}

const styles = StyleSheet.create({
  cargador: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080b0c',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navigator:{
    backgroundColor: '#fff',
  },
  navButton:{
    color: '#FFF',
    padding: 7,
    fontFamily: 'sans-serif-light',
  },
  navTitle:{
    color: '#FFF',
    fontFamily: 'sans-serif-light',
    paddingTop: 5,
    fontSize: 20
  },
  arrowLeft:{
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  arrowRight:{
    marginTop: 3,
    width: 35,
    height: 35,
  }
});

AppRegistry.registerComponent('bnoapp', () => bnoapp);
