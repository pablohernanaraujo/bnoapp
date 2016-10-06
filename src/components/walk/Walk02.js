import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';

class Walk02 extends Component {
  render() {
    return (
      <Image source={require('../../images/walk05.jpg')} style={styles.image}>
        <Text style={styles.textTitle}>La guia de la Noche</Text>
        <Text style={styles.text}>Vas a encontrar</Text>
        <Text style={styles.text}>todo lo que necesitas para redescubrir</Text>
        <Text style={styles.text}>la noche</Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'sans-serif-light',
  },
  textTitle:{
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
});

export default Walk02;
