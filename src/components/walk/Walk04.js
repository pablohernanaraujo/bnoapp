import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';

class Walk04 extends Component {
  render() {
    return (
      <Image source={require('../../images/walk03.jpg')} style={styles.image}>
        <Text style={styles.textTitle}>Invita</Text>
        <Text style={styles.text}>A tus amigos</Text>
        <Text style={styles.text}>para compartir</Text>
        <Text style={styles.text}>los mejores momentos</Text>
        <Text style={styles.text}>juntos</Text>
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

export default Walk04;
