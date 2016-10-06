import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';

class Walk03 extends Component {
  render() {
    return (
      <Image source={require('../../images/walk02.jpg')} style={styles.image}>
        <Text style={styles.textTitle}>Busca</Text>
        <Text style={styles.text}>Donde ir</Text>
        <Text style={styles.text}>facíl y rápido</Text>
        <Text style={styles.text}>donde estes</Text>
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

export default Walk03;
