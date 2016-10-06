import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import authService from '../services/AuthService';

class Ajustes extends Component {

  onLogoutPressed(){
    authService.logout();
    this.props.navigator.replace({
      title: 'Login',
      name: 'Login',
      passProps: {}
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onLogoutPressed.bind(this)}
          >
            <Text style={styles.ingresar}>
              Salir
            </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#080b0c',
  },
  ingresar: {
    fontSize: 15,
    color: '#fff',
  },
  button: {
    height: 35,
    width: 250,
    backgroundColor: '#00aeef',
    marginTop: 70,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Ajustes;
