import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import authService from '../services/AuthService';

class Buscar extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.ingresar}>
            BUSCAR
          </Text>
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
});

export default Buscar;
