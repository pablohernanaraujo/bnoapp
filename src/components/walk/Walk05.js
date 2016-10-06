import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';

class Walk05 extends Component {
  render() {
    return (
      <Image source={require('../../images/walk04.jpg')} style={styles.image}>
        <Text style={styles.textTitle}>Llega</Text>
        <Text style={styles.text}>A donde quieras</Text>
        <Text style={styles.text}>nosotros</Text>
        <Text style={styles.text}>te guiamos</Text>
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

export default Walk05;
