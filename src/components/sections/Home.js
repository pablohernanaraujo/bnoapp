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

class Home extends Component {

  aceptar(){
    this.props.navigator.push({
      title: 'Ajustes',
      name: 'Ajustes',
      passProps: {}
    })
  }

  discos(){
    this.props.navigator.push({
      title: 'Discos',
      name: 'Discos',
      passProps: {}
    })
  }

  bares(){
    this.props.navigator.push({
      title: 'Bares',
      name: 'Bares',
      passProps: {}
    })
  }

  render() {
    var _scrollView: ScrollView;
    return (
      <View style={styles.container}>

          <TouchableHighlight
            onPress={this.aceptar.bind(this)}
            style={styles.buttonInicio}>
            <Image
              style={styles.backgroundImage}
              source={require('../../images/destacados2.jpg')}
            >
              <View style={styles.btnTextoContenedor}>
                <Text style={styles.titulo}>DESTACADOS</Text>
                <Text style={styles.subtitulo}>Encuentra los mejores lugares</Text>
              </View>
            </Image>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.discos.bind(this)}
            style={styles.buttonInicio}>
            <Image
              style={styles.backgroundImage}
              source={require('../../images/discos2.jpg')}
            >
              <View style={styles.btnTextoContenedor}>
                <Text style={styles.titulo}>DISCOS</Text>
                <Text style={styles.subtitulo}>Encuentra las discos más cercanas</Text>
              </View>
            </Image>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.bares.bind(this)}
            style={styles.buttonInicio}>
            <Image
              style={styles.backgroundImage}
              source={require('../../images/bares.jpg')}
            >
              <View style={styles.btnTextoContenedor}>
                <Text style={styles.titulo}>BARES</Text>
                <Text style={styles.subtitulo}>Encuentra los bares más cercanos</Text>
              </View>
            </Image>
          </TouchableHighlight>

      </View>
    );
  }
}

var ancho = Dimensions.get('window').width;
var alto = Dimensions.get('window').height;
var btnAlto = alto / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080b0c',
  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  subtitulo:{
    fontSize: 14,
    color: '#fff',
    fontFamily: 'sans-serif-light',
  },
  buttonInicio:{
    flex: 3,
    width: ancho,
  },
  btnTextoContenedor:{
    paddingTop: 20,
    alignItems: 'center',
  },
  backgroundImage:{
    width: ancho,
    height: btnAlto,
    resizeMode: 'cover',
  },
});

export default Home;
