import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import authService from '../services/AuthService';

class Details extends Component {
  constructor(props){
    super(props);
    this.passProps = this.props.route.passProps;
    this.state = {
      seccion: false
    };
  }

  cambiaFondo(){
    if(this.passProps.lugar.tipo === 'Disco'){
      this.setState({ seccion: true });
    }else{
      this.setState({ seccion: false });
    }
  }

  componentDidMount(){
    this.cambiaFondo();
  }

  render() {
    return (
      <ScrollView>
        <View style={[
          styles.container,
          this.state.seccion && styles.discos
        ]}>
          <Image
            source={{uri: this.passProps.lugar.imagen.url}}
            style={styles.imagen}
          >
            <View style={styles.imagenInterno}>
              <Image
                source={require('../../images/fondo.png')}
                style={styles.fondo}
              />
              <Image
                source={require('../../images/fondoAbajo.png')}
                style={styles.fondoabajo}
              >
                <View style={styles.iconscontainer}>
                  <Icon style={styles.icons} name="heart-o" size={20} color="rgb(255,255,255)" />
                  <Icon style={styles.icons} name="star-o" size={20} color="rgb(255,255,255)" />
                  <Icon style={styles.icons} name="share" size={20} color="rgb(255,255,255)" />
                  <Icon style={styles.icons} name="map-o" size={20} color="rgb(255,255,255)" />
                </View>
              </Image>
            </View>
          </Image>
          <Text style={styles.textoimagen}>
            {this.passProps.lugar.textoimagen}
          </Text>

          <View style={styles.datosContenedor}>
            <View style={styles.datosIzquierda}>
              <Image
                source={{uri: this.passProps.lugar.logo.url}}
                style={styles.logo}
              />
            </View>
            <View style={styles.datosDerecha}>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>Nombre</Text>
                <Text style={styles.textoRespuesta}>{this.passProps.lugar.nombre}</Text>
              </View>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>Direccion</Text>
                <Text style={styles.textoRespuesta}>{this.passProps.lugar.direccion}</Text>
              </View>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>Música</Text>
                <Text style={styles.textoRespuesta}>{this.passProps.lugar.nombre}</Text>
              </View>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>Aniversario</Text>
                <Text style={styles.textoRespuesta}>aca va el aniversario</Text>
              </View>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>Telefono</Text>
                <Text style={styles.textoRespuesta}>{this.passProps.lugar.nombre}</Text>
              </View>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>rrpp</Text>
                <Text style={styles.textoRespuesta}>{this.passProps.lugar.nombre}</Text>
              </View>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>rrpp cel</Text>
                <Text style={styles.textoRespuesta}>{this.passProps.lugar.nombre}</Text>
              </View>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>Nombre</Text>
                <Text style={styles.textoRespuesta}>{this.passProps.lugar.nombre}</Text>
              </View>
              <View style={styles.textosContenedor}>
                <Text style={styles.textoTitulo}>Nombre</Text>
                <Text style={styles.textoRespuesta}>{this.passProps.lugar.nombre}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

var ancho = Dimensions.get('window').width;
var anchoCard = ancho - 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#66102f',
  },
  imagen:{
    width: ancho,
    height: 500,
    resizeMode: 'cover',
  },
  imagenInterno:{
    flex: 1,
    justifyContent: 'flex-start',
  },
  fondo:{
    width: ancho,
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  fondoabajo:{
    width: ancho,
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  discos:{
    backgroundColor: '#003c53',
  },
  textoimagen:{
    color: '#fff',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    fontFamily: 'sans-serif-light',
  },
  iconscontainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 15,
    justifyContent: 'space-around',
  },
  datosContenedor:{
    flex: 1,
    width: ancho,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  datosIzquierda:{
    width: 100,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
  },
  datosDerecha:{

  },
  textosContenedor:{
    flex: 1,
    flexDirection: 'row',
  },
  logo:{
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 15,
  },
  textoTitulo:{
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 40,
    width: 90,
    padding: 10,
    paddingTop: 12,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'sans-serif-light',
    fontSize: 12,
  },
  textoRespuesta:{
    height: 40,
    padding: 10,
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'sans-serif-light',
    fontSize: 15,
  },
});

export default Details;
